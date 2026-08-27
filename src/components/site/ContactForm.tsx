import { useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

import { submitContactMessage } from "@/lib/contact.functions";
import { Reveal } from "./Reveal";

const EMAILJS_SERVICE_ID = "service_6l0fp5s";
const EMAILJS_TEMPLATE_ID = "template_sytycxm";
const EMAILJS_PUBLIC_KEY = "RQ8zwt2K9RRkm9bRx";


type Fields = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", email: "", subject: "", message: "" };

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name";
  else if (values.name.trim().length > 100) errors.name = "Name is too long";

  const email = values.email.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = "Enter a valid email address";
  else if (email.length > 255) errors.email = "Email is too long";

  if (values.subject.trim().length > 150) errors.subject = "Subject is too long";

  const message = values.message.trim();
  if (message.length < 20) errors.message = "Please write at least 20 characters";
  else if (message.length > 2000) errors.message = "Message is too long (2000 characters max)";

  return errors;
}

const fieldClass =
  "w-full rounded-lg border border-border bg-surface/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-gold/60 focus:bg-surface/70";

export function ContactForm() {
  const send = useServerFn(submitContactMessage);
  const mountedAt = useRef(Date.now());
  const [values, setValues] = useState<Fields>(empty);
  const [company, setCompany] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const set = (key: keyof Fields) => (value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    setServerError("");
    try {
      const result = await send({
        data: {
          name: values.name.trim(),
          email: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
          company,
          elapsedMs: Date.now() - mountedAt.current,
        },
      });
      if (result.ok) {
        setStatus("sent");
        setValues(empty);
      } else {
        setStatus("error");
        setServerError(result.error);
      }
    } catch {
      setStatus("error");
      setServerError("Something went wrong. Please email me directly instead.");
    }
  }

  if (status === "sent") {
    return (
      <Reveal className="panel rounded-xl p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-gold" />
        <h3 className="mt-4 font-display text-lg font-semibold text-foreground">Message sent</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thanks for reaching out — I&rsquo;ll get back to you as soon as I can.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-xs font-semibold uppercase tracking-widest text-gold hover:underline"
        >
          Send another message
        </button>
      </Reveal>
    );
  }

  return (
    <Reveal className="panel rounded-xl p-6 sm:p-8">
      <form onSubmit={onSubmit} noValidate className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-name" className="mono-label text-muted-foreground">
              Name
            </label>
            <input
              id="cf-name"
              value={values.name}
              onChange={(e) => set("name")(e.target.value)}
              maxLength={100}
              autoComplete="name"
              placeholder="Your name"
              aria-invalid={!!errors.name}
              className={`mt-2 ${fieldClass}`}
            />
            {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="cf-email" className="mono-label text-muted-foreground">
              Email
            </label>
            <input
              id="cf-email"
              type="email"
              value={values.email}
              onChange={(e) => set("email")(e.target.value)}
              maxLength={255}
              autoComplete="email"
              placeholder="you@company.com"
              aria-invalid={!!errors.email}
              className={`mt-2 ${fieldClass}`}
            />
            {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="cf-subject" className="mono-label text-muted-foreground">
            Subject <span className="normal-case tracking-normal">(optional)</span>
          </label>
          <input
            id="cf-subject"
            value={values.subject}
            onChange={(e) => set("subject")(e.target.value)}
            maxLength={150}
            placeholder="Co-op opportunity, project idea, question…"
            className={`mt-2 ${fieldClass}`}
          />
          {errors.subject && <p className="mt-1.5 text-xs text-destructive">{errors.subject}</p>}
        </div>

        <div>
          <label htmlFor="cf-message" className="mono-label text-muted-foreground">
            Message
          </label>
          <textarea
            id="cf-message"
            value={values.message}
            onChange={(e) => set("message")(e.target.value)}
            maxLength={2000}
            rows={6}
            placeholder="Tell me a bit about what you're working on…"
            aria-invalid={!!errors.message}
            className={`mt-2 resize-y ${fieldClass}`}
          />
          <div className="mt-1.5 flex items-center justify-between gap-3">
            <span className="text-xs text-destructive">{errors.message}</span>
            <span className="font-mono text-[11px] text-muted-foreground/70">
              {values.message.length}/2000
            </span>
          </div>
        </div>

        {/* Honeypot — hidden from real users, catches bots */}
        <div aria-hidden="true" className="pointer-events-none absolute -left-[9999px] opacity-0">
          <label htmlFor="cf-company">Company</label>
          <input
            id="cf-company"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        {status === "error" && serverError && (
          <div className="flex items-start gap-2 rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{serverError}</span>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center gap-2 rounded-md bg-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          <p className="text-xs text-muted-foreground">
            Protected against spam. Your details are only used to reply.
          </p>
        </div>
      </form>
    </Reveal>
  );
}
