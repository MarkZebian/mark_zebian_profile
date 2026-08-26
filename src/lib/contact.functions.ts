import { createServerFn } from "@tanstack/react-start";

import { contactSchema, handleContactSubmission } from "./contact.server";

export const submitContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => handleContactSubmission(data));
