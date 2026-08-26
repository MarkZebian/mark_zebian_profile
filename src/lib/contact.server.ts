import { z } from "zod";
import { getRequestHeader, getRequestIP } from "@tanstack/react-start/server";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email is too long"),
  subject: z.string().trim().max(150, "Subject is too long").optional().default(""),
  message: z
    .string()
    .trim()
    .min(20, "Please write at least 20 characters")
    .max(2000, "Message is too long"),
  // Spam protection: hidden field must stay empty, and the form must be
  // open for at least a few seconds before it can be submitted.
  company: z.string().max(0).optional().default(""),
  elapsedMs: z.number().int().nonnegative().max(1000 * 60 * 60 * 24),
});

export type ContactInput = z.infer<typeof contactSchema>;

const MIN_FILL_MS = 3_000;
const MAX_PER_HOUR = 3;
const LINK_LIMIT = 4;

export type ContactResult = { ok: true } | { ok: false; error: string };

async function hashIp(ip: string): Promise<string> {
  const bytes = new TextEncoder().encode(`contact:${ip}`);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function looksLikeSpam(input: ContactInput): boolean {
  const links = input.message.match(/https?:\/\//gi)?.length ?? 0;
  if (links > LINK_LIMIT) return true;
  if (/\b(viagra|casino|crypto giveaway|seo services|buy followers)\b/i.test(input.message)) {
    return true;
  }
  return false;
}

export async function handleContactSubmission(input: ContactInput): Promise<ContactResult> {
  if (input.company) return { ok: true }; // honeypot: silently accept, never store
  if (input.elapsedMs < MIN_FILL_MS) {
    return { ok: false, error: "That was a little too fast — please try again." };
  }
  if (looksLikeSpam(input)) {
    return { ok: false, error: "Your message was flagged as spam. Please email me directly." };
  }

  const ip = getRequestIP({ xForwardedFor: true }) ?? "unknown";
  const ipHash = await hashIp(ip);
  const userAgent = (getRequestHeader("user-agent") ?? "").slice(0, 300);

  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

  const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const { count } = await supabaseAdmin
    .from("contact_messages")
    .select("id", { count: "exact", head: true })
    .eq("ip_hash", ipHash)
    .gte("created_at", since);

  if ((count ?? 0) >= MAX_PER_HOUR) {
    return { ok: false, error: "You've sent a few messages already. Please try again later." };
  }

  const { error } = await supabaseAdmin.from("contact_messages").insert({
    name: input.name,
    email: input.email,
    subject: input.subject || null,
    message: input.message,
    ip_hash: ipHash,
    user_agent: userAgent,
  });

  if (error) {
    console.error("contact insert failed", error);
    return { ok: false, error: "Something went wrong sending your message. Please try again." };
  }

  return { ok: true };
}
