import { readFormError } from "@/lib/form-response";

export const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000"
).replace(/\/$/, "");

export type InquiryKind = "contact" | "join" | "visit";

export type InquiryPayload = {
  name: string;
  email?: string;
  contact?: string;
  campus?: string;
  session?: string;
  subject?: string;
  message?: string;
};

/** Submit one of the site's forms to the Django API. */
export async function submitInquiry(
  kind: InquiryKind,
  payload: InquiryPayload,
): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/api/v1/inquiries/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ kind, ...payload }),
  });

  if (!response.ok) {
    throw new Error(await readFormError(response));
  }
}
