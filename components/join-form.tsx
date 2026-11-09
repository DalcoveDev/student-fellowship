"use client";

import { useState } from "react";
import { ArrowRight } from "@/components/icons";
import { campuses, site } from "@/lib/site";

const inputStyles =
  "w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none";

export function JoinForm() {
  const [opened, setOpened] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const contact = String(data.get("contact") ?? "");
    const campus = String(data.get("campus") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Bible study enquiry — ${name}`;
    const body = [
      `Name: ${name}`,
      `Phone or email: ${contact}`,
      `Campus: ${campus}`,
      "",
      message ? `Message: ${message}` : "I would like to join a Bible study.",
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setOpened(true);
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

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-gold bg-gold px-6 py-3.5 text-sm font-semibold text-forest-deep transition-colors hover:bg-gold-soft"
      >
        Send my enquiry
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>

      <p className="text-center text-xs leading-relaxed text-ink/50">
        {opened
          ? "Your email app should now be open with your message ready to send."
          : "This opens your email app with the message ready to send."}{" "}
        Prefer to call?{" "}
        <a href={site.joinPhone.href} className="font-semibold text-forest underline decoration-gold/60 underline-offset-4">
          {site.joinPhone.label}
        </a>
      </p>
    </form>
  );
}
