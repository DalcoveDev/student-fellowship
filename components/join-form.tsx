"use client";

import { useState } from "react";
import { ArrowRight, Check } from "@/components/icons";
import { submitInquiry } from "@/lib/api";
import { campuses, site } from "@/lib/site";

const inputStyles =
  "w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none";

export function JoinForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setError(null);

    try {
      await submitInquiry("join", {
        name: String(data.get("name") ?? ""),
        contact: String(data.get("contact") ?? ""),
        campus: String(data.get("campus") ?? ""),
        message: String(data.get("message") ?? ""),
      });

      form.reset();
      setStatus("sent");
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Something went wrong. Please try again.",
      );
      setStatus("idle");
    }
  }

  if (status === "sent") {
    return (
      <div>
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-cream">
          <Check className="h-5 w-5" />
        </span>
        <h3 className="mt-5 font-display text-2xl text-forest-deep">
          Enquiry sent.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/65">
          Thank you. We will connect you with the campus fellowship or Thursday
          session that fits your week, and someone will be in touch soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-forest underline decoration-gold/60 underline-offset-4"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-forest">
          Your name
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          placeholder="Full name"
          className={inputStyles}
        />
      </div>

      <div>
        <label htmlFor="contact" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-forest">
          Phone or email
        </label>
        <input
          id="contact"
          name="contact"
          required
          autoComplete="tel"
          placeholder="How can we reach you?"
          className={inputStyles}
        />
      </div>

      <div>
        <label htmlFor="campus" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-forest">
          Campus or school
        </label>
        <select id="campus" name="campus" className={inputStyles} defaultValue="">
          <option value="" disabled>
            Select your campus
          </option>
          {campuses.map((campus) => (
            <option key={campus.slug} value={campus.name}>
              {campus.name}
            </option>
          ))}
          <option value="Other">Other / not listed</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-forest">
          Anything you would like us to know?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="I would like to join a Bible study…"
          className={`${inputStyles} resize-none`}
        />
      </div>

      {error ? (
        <p
          role="alert"
          className="rounded-xl border border-[#b4452f]/30 bg-[#b4452f]/5 px-4 py-3 text-sm leading-relaxed text-[#8f2f1e]"
        >
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-gold bg-gold px-6 py-3.5 text-sm font-semibold text-forest-deep transition-colors hover:bg-gold-soft disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Send my enquiry"}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>

      <p className="text-center text-xs leading-relaxed text-ink/50">
        Prefer to call?{" "}
        <a href={site.joinPhone.href} className="font-semibold text-forest underline decoration-gold/60 underline-offset-4">
          {site.joinPhone.label}
        </a>
      </p>
    </form>
  );
}
