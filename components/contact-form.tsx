"use client";

import { useState } from "react";
import { ArrowRight } from "@/components/icons";
import { site } from "@/lib/site";

const inputStyles =
  "w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none";

export function ContactForm() {
  const [opened, setOpened] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "General enquiry");
    const message = String(data.get("message") ?? "");

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `${subject} — ${name}`,
    )}&body=${encodeURIComponent(body)}`;
    setOpened(true);
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

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-gold bg-gold px-6 py-3.5 text-sm font-semibold text-forest-deep transition-colors hover:bg-gold-soft"
      >
        Send message
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>

      <p className="text-center text-xs leading-relaxed text-ink/50">
        {opened
          ? "Your email app should now be open with your message ready to send."
          : "This opens your email app with the message ready to send."}{" "}
        Or email us directly at{" "}
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
