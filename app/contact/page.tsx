import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone, WhatsApp, YouTube } from "@/components/icons";
import { ContactForm } from "@/components/contact-form";
import { Container, CtaBand, Eyebrow, PageHero } from "@/components/ui";
import { site, thursdaySessions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Christian Students Network in Kigali, Rwanda. Call, email, or send a message about Bible studies, campuses, events, or online ministry.",
};

const channels = [
  {
    title: "Call us",
    icon: Phone,
    lines: site.phones.map((phone) => ({
      label: phone.label,
      href: phone.href,
    })),
  },
  {
    title: "Email us",
    icon: Mail,
    lines: [{ label: site.email, href: `mailto:${site.email}` }],
  },
  {
    title: "WhatsApp",
    icon: WhatsApp,
    lines: [
      {
        label: "Chat with the fellowship",
        href: site.socials.whatsapp,
      },
    ],
  },
  {
    title: "Visit us",
    icon: MapPin,
    lines: [
      { label: "Kicukiro – Mu Banyamakuru", href: undefined },
      { label: "Kigali, Rwanda", href: undefined },
    ],
  },
  {
    title: "Watch online",
    icon: YouTube,
    lines: [
      {
        label: "The Upside Down Show",
        href: site.socials.youtube,
      },
    ],
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We would love to hear from you."
        intro="Whether you have a question about a Bible study, want to join a campus fellowship, or would like to partner with the ministry, reach out — we are here."
        meta={["Call or WhatsApp", "Email", "Campus questions"]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={site.joinPhone.href}
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-gold bg-gold px-6 py-3 text-sm font-semibold tracking-wide text-forest-deep transition-colors hover:bg-gold-soft"
          >
            <Phone className="h-4 w-4" />
            Call {site.joinPhone.label}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center justify-center rounded-full border border-forest/25 px-6 py-3 text-sm font-semibold tracking-wide text-forest transition-colors hover:border-forest hover:bg-forest hover:text-cream"
          >
            Email us
          </a>
        </div>
      </PageHero>

      <section className="border-y border-line/60 bg-sand/60 py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <Eyebrow>Get in touch</Eyebrow>
              <h2 className="mt-5 font-display text-3xl leading-tight text-balance text-forest-deep sm:text-4xl">
                Send us a message.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/65">
                Fill in the form and it comes straight to our team. We will get
                back to you as soon as we can.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {channels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <div
                      key={channel.title}
                      className="rounded-2xl border border-line bg-cream p-5"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest/5 text-forest">
                          <Icon className="h-4 w-4" />
                        </span>
                        <h3 className="text-sm font-semibold text-forest-deep">
                          {channel.title}
                        </h3>
                      </div>
                      <ul className="mt-3 space-y-1.5 text-sm text-ink/60">
                        {channel.lines.map((line) =>
                          line.href ? (
                            <li key={line.label}>
                              <a
                                href={line.href}
                                className="break-all transition-colors hover:text-forest"
                              >
                                {line.label}
                              </a>
                            </li>
                          ) : (
                            <li key={line.label}>{line.label}</li>
                          ),
                        )}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-line bg-cream p-6 sm:p-9 lg:self-start">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>Find us</Eyebrow>
              <h2 className="mt-5 font-display text-3xl leading-tight text-balance text-forest-deep sm:text-4xl">
                Join us on a Thursday.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink/70">
                Our weekly Bible study meets at Kicukiro – Mu Banyamakuru with
                three sessions across the day. You are welcome to come to the
                session that fits your schedule.
              </p>
              <div className="mt-7 space-y-3">
                {thursdaySessions.map((session) => (
                  <div
                    key={session.session}
                    className="flex items-center justify-between gap-4 rounded-xl border border-line bg-cream px-5 py-4"
                  >
                    <span className="flex items-center gap-2 text-sm font-semibold text-forest-deep">
                      <Clock className="h-4 w-4 text-moss" />
                      {session.session}
                    </span>
                    <span className="text-sm text-ink/60">{session.time}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 flex items-start gap-2 text-sm text-ink/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-moss" />
                Kicukiro – Mu Banyamakuru, Kigali, Rwanda
              </p>
            </div>

            <div className="relative min-h-[20rem] overflow-hidden rounded-[1.5rem] border border-line bg-sand">
              <div
                aria-hidden
                className="absolute inset-0 opacity-70 [background-image:linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] [background-size:44px_44px]"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest text-cream shadow-lg shadow-forest/20">
                  <MapPin className="h-6 w-6" />
                </span>
                <p className="mt-4 font-display text-2xl text-forest-deep">
                  Kicukiro – Mu Banyamakuru
                </p>
                <p className="mt-1 text-sm text-ink/55">Kigali, Rwanda</p>
                <p className="mt-5 max-w-xs text-xs leading-relaxed text-ink/45">
                  Three Thursday sessions · 11:00 AM, 2:00 PM, and 4:00 PM
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Before you go"
        title="Come and study the Word with us."
        intro="There is a fellowship, a session, and a seat waiting for you."
        primaryHref="/visit"
        primaryLabel="Plan your visit"
        secondaryHref="/join"
        secondaryLabel="Join a study"
      />
    </>
  );
}
