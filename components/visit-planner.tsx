"use client";

import { useState } from "react";
import { ArrowRight, Check, MapPin, Phone } from "@/components/icons";
import { submitInquiry } from "@/lib/api";
import { campuses, site, thursdaySessions } from "@/lib/site";

const campusOptions = [
  ...campuses.map((campus) => ({
    value: campus.slug,
    title: campus.shortName,
    detail: campus.name,
    meta: campus.type,
  })),
  {
    value: "not-sure",
    title: "Not sure yet",
    detail: "Help me choose",
    meta: "We will help you find the right group",
  },
];

const sessionOptions = [
  ...thursdaySessions.map((session) => ({
    value: session.session,
    title: session.session,
    detail: session.time,
    meta: "Thursday · Kicukiro – Mu Banyamakuru",
  })),
  {
    value: "not-sure",
    title: "Not sure yet",
    detail: "Help me choose a time",
    meta: "We will suggest the best session for your schedule",
  },
];

const inputStyles =
  "w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none";

const steps = [
  { number: "01", label: "Campus" },
  { number: "02", label: "Session" },
  { number: "03", label: "Details" },
];

export function VisitPlanner() {
  const [step, setStep] = useState(1);
  const [campus, setCampus] = useState("");
  const [session, setSession] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selectedCampus = campusOptions.find((option) => option.value === campus);
  const selectedSession = sessionOptions.find((option) => option.value === session);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setSending(true);
    setError(null);

    try {
      await submitInquiry("visit", {
        name: String(data.get("name") ?? ""),
        contact: String(data.get("contact") ?? ""),
        campus: selectedCampus?.title ?? "",
        session: selectedSession?.title ?? "",
        message: String(data.get("message") ?? ""),
      });

      form.reset();
      setSent(true);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-[1.5rem] border border-line bg-cream p-7 sm:p-10">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest text-cream">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="mt-6 font-display text-3xl text-forest-deep">
          Your visit plan is ready.
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/65">
          We have your details. Someone from the fellowship will get in touch to
          confirm your visit and answer any questions before you come.
        </p>
        <div className="mt-6 rounded-2xl border border-line bg-sand/60 p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-moss">
            Your plan
          </p>
          <dl className="mt-3 space-y-2 text-sm">
            <div className="flex items-center justify-between gap-4">
              <dt className="text-ink/55">Campus</dt>
              <dd className="font-medium text-forest-deep">
                {selectedCampus?.title ?? "Not sure yet"}
              </dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-ink/55">Session</dt>
              <dd className="font-medium text-forest-deep">
                {selectedSession?.title ?? "Not sure yet"}
              </dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-ink/55">Location</dt>
              <dd className="text-right font-medium text-forest-deep">
                Kicukiro – Mu Banyamakuru
              </dd>
            </div>
          </dl>
        </div>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a
            href={site.joinPhone.href}
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-gold bg-gold px-6 py-3 text-sm font-semibold text-forest-deep transition-colors hover:bg-gold-soft"
          >
            <Phone className="h-4 w-4" />
            Call {site.joinPhone.label}
          </a>
          <button
            type="button"
            onClick={() => {
              setSent(false);
              setStep(1);
              setCampus("");
              setSession("");
            }}
            className="inline-flex items-center justify-center rounded-full border border-forest/25 px-6 py-3 text-sm font-semibold text-forest transition-colors hover:border-forest hover:bg-forest hover:text-cream"
          >
            Plan another visit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[1.5rem] border border-line bg-cream p-6 sm:p-9">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-moss">
            Plan your visit
          </p>
          <p className="mt-1 font-display text-2xl text-forest-deep">
            {steps[step - 1].label}
          </p>
        </div>
        <span className="text-[11px] font-semibold tracking-[0.18em] text-ink/35">
          Step {step} of 3
        </span>
      </div>

      <ol className="mt-6 flex gap-2" aria-label="Visit plan progress">
        {steps.map((item, index) => {
          const current = index + 1;
          const complete = current < step;
          return (
            <li key={item.number} className="flex-1">
              <div
                className={`h-1.5 rounded-full ${
                  complete || current === step ? "bg-gold" : "bg-sand"
                }`}
              />
              <p
                className={`mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] ${
                  complete || current === step ? "text-forest" : "text-ink/35"
                }`}
              >
                {item.number} {item.label}
              </p>
            </li>
          );
        })}
      </ol>

      <div className="mt-8" aria-live="polite">
        {step === 1 ? (
          <div>
            <h3 className="font-display text-xl text-forest-deep">
              Which fellowship would you like to visit?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              Choose a campus fellowship, or let us help you find the right one.
            </p>
            <div className="mt-5 grid gap-3">
              {campusOptions.map((option) => (
                <label
                  key={option.value}
                  className={`flex cursor-pointer items-start gap-4 rounded-2xl border p-4 transition-colors ${
                    campus === option.value
                      ? "border-gold bg-sand/50"
                      : "border-line bg-white/40 hover:border-forest/25"
                  }`}
                >
                  <input
                    type="radio"
                    name="campusChoice"
                    value={option.value}
                    checked={campus === option.value}
                    onChange={() => setCampus(option.value)}
                    className="sr-only"
                  />
                  <span
                    aria-hidden
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                      campus === option.value
                        ? "border-gold bg-gold text-forest-deep"
                        : "border-line text-transparent"
                    }`}
                  >
                    <Check className="h-3 w-3" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-forest-deep">
                      {option.title}
                    </span>
                    <span className="mt-0.5 block text-xs text-ink/55">
                      {option.detail}
                    </span>
                    <span className="mt-1 block text-[10px] uppercase tracking-[0.14em] text-moss">
                      {option.meta}
                    </span>
                  </span>
                </label>
              ))}
            </div>
          </div>
        ) : null}

        {step === 2 ? (
          <div>
            <h3 className="font-display text-xl text-forest-deep">
              Which Thursday session works for you?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              All three sessions meet at Kicukiro – Mu Banyamakuru. Pick one, or
              ask us to help.
            </p>
            <div className="mt-5 grid gap-3">
              {sessionOptions.map((option) => (
                <label
                  key={option.value}
                  className={`flex cursor-pointer items-start gap-4 rounded-2xl border p-4 transition-colors ${
                    session === option.value
                      ? "border-gold bg-sand/50"
                      : "border-line bg-white/40 hover:border-forest/25"
                  }`}
                >
                  <input
                    type="radio"
                    name="sessionChoice"
                    value={option.value}
                    checked={session === option.value}
                    onChange={() => setSession(option.value)}
                    className="sr-only"
                  />
                  <span
                    aria-hidden
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                      session === option.value
                        ? "border-gold bg-gold text-forest-deep"
                        : "border-line text-transparent"
                    }`}
                  >
                    <Check className="h-3 w-3" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-forest-deep">
                      {option.title}
                    </span>
                    <span className="mt-0.5 block text-xs text-ink/55">
                      {option.detail}
                    </span>
                    <span className="mt-1 block text-[10px] uppercase tracking-[0.14em] text-moss">
                      {option.meta}
                    </span>
                  </span>
                </label>
              ))}
            </div>
            <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-ink/50">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-moss" />
              Kicukiro – Mu Banyamakuru, Kigali. Sessions run at 11:00 AM, 2:00
              PM, and 4:00 PM.
            </p>
          </div>
        ) : null}

        {step === 3 ? (
          <form onSubmit={handleSubmit}>
            <h3 className="font-display text-xl text-forest-deep">
              How can we reach you?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              We will confirm your visit and help with anything you need before
              you come.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="visit-name"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-forest"
                >
                  Your name
                </label>
                <input
                  id="visit-name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Full name"
                  className={inputStyles}
                />
              </div>
              <div>
                <label
                  htmlFor="visit-contact"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-forest"
                >
                  Phone or email
                </label>
                <input
                  id="visit-contact"
                  name="contact"
                  required
                  autoComplete="tel"
                  placeholder="How can we reach you?"
                  className={inputStyles}
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="visit-message"
                className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-forest"
              >
                Anything we should know?
              </label>
              <textarea
                id="visit-message"
                name="message"
                rows={3}
                placeholder="I would like to visit this Thursday…"
                className={`${inputStyles} resize-none`}
              />
            </div>

            <div className="mt-5 rounded-2xl border border-line bg-sand/60 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-moss">
                Your visit
              </p>
              <dl className="mt-2 space-y-1.5 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-ink/55">Campus</dt>
                  <dd className="font-medium text-forest-deep">
                    {selectedCampus?.title ?? "Not sure yet"}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-ink/55">Session</dt>
                  <dd className="font-medium text-forest-deep">
                    {selectedSession?.title ?? "Not sure yet"}
                  </dd>
                </div>
              </dl>
            </div>

            {error ? (
              <p
                role="alert"
                className="mt-4 rounded-xl border border-[#b4452f]/30 bg-[#b4452f]/5 px-4 py-3 text-sm leading-relaxed text-[#8f2f1e]"
              >
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={sending}
              className="group mt-5 inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-gold bg-gold px-6 py-3.5 text-sm font-semibold text-forest-deep transition-colors hover:bg-gold-soft disabled:cursor-not-allowed disabled:opacity-70"
            >
              {sending ? "Sending…" : "Send my visit plan"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <p className="mt-3 text-center text-xs leading-relaxed text-ink/50">
              We will get back to you to confirm. Prefer to call?{" "}
              <a
                href={site.joinPhone.href}
                className="font-semibold text-forest underline decoration-gold/60 underline-offset-4"
              >
                {site.joinPhone.label}
              </a>
            </p>
          </form>
        ) : null}
      </div>

      <div className="mt-7 flex items-center justify-between gap-4 border-t border-line pt-5">
        <button
          type="button"
          onClick={() => {
            setError(null);
            setStep((current) => Math.max(1, current - 1));
          }}
          disabled={step === 1}
          className="text-sm font-semibold text-forest transition-colors hover:text-gold disabled:cursor-not-allowed disabled:text-ink/25"
        >
          Back
        </button>
        {step < 3 ? (
          <button
            type="button"
            onClick={() => {
              setError(null);
              setStep((current) => Math.min(3, current + 1));
            }}
            disabled={step === 1 ? !campus : !session}
            className="group inline-flex items-center gap-2.5 rounded-full border border-gold bg-gold px-6 py-3 text-sm font-semibold text-forest-deep transition-colors hover:bg-gold-soft disabled:cursor-not-allowed disabled:border-line disabled:bg-sand disabled:text-ink/35"
          >
            Continue
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        ) : null}
      </div>
    </div>
  );
}
