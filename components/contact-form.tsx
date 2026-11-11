"use client";

import { useState } from "react";
import { ArrowRight, Check } from "@/components/icons";
import { submitInquiry } from "@/lib/api";
import { site } from "@/lib/site";

const inputStyles =
  "w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setError(null);

    try {
      await submitInquiry("contact", {
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        subject: String(data.get("subject") ?? "General enquiry"),
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
          Message sent.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/65">
          Thank you for getting in touch. Someone from the fellowship will reply
          as soon as we can.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-forest underline decoration-gold/60 underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-forest"
          >
            Your name
          </label>
          <input
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            placeholder="Full name"
            className={inputStyles}
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-forest"
          >
            Email address
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={inputStyles}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-subject"
          className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-forest"
        >
          What is this about?
        </label>
        <select
          id="contact-subject"
          name="subject"
          className={inputStyles}
          defaultValue="General enquiry"
        >
          <option>General enquiry</option>
          <option>Joining a Bible study</option>
          <option>Campuses and fellowships</option>
          <option>Events and conferences</option>
          <option>Online ministry</option>
          <option>Charity and serving</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-forest"
        >
          Your message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="How can we help?"
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
        {status === "sending" ? "Sending…" : "Send message"}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>

      <p className="text-center text-xs leading-relaxed text-ink/50">
        We will get back to you as soon as we can. Or email us directly at{" "}
        <a
          href={`mailto:${site.email}`}
          className="font-semibold text-forest underline decoration-gold/60 underline-offset-4"
        >
          {site.email}
        </a>
        .
      </p>
    </form>
  );
}
