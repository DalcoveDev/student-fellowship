import type { Metadata } from "next";
import Image from "next/image";
import { BookOpen, Clock, MapPin, Phone, Users } from "@/components/icons";
import { Container, CtaBand, Eyebrow, PageHero, TextLink } from "@/components/ui";
import { JoinForm } from "@/components/join-form";
import { campuses, site, thursdaySessions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Join a Bible study",
  description:
    "Join a Christian Students Network Bible study at UR-CST, Mount Kigali, ETO Nyamata, or our weekly Thursday gathering in Kicukiro.",
};

const nextSteps = [
  {
    step: "01",
    title: "Send your details",
    description:
      "Fill in the form with your name, contact, and campus, and it comes straight to our team.",
    icon: BookOpen,
  },
  {
    step: "02",
    title: "We get in touch",
    description:
      "Someone from the fellowship will reach out to welcome you and help you find the right group or session.",
    icon: Users,
  },
  {
    step: "03",
    title: "Come and see",
    description:
      "Visit a campus fellowship or a Thursday session. Bring your Bible, your questions, and a friend.",
    icon: MapPin,
  },
];

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Join a Bible study"
        title="There is a seat for you at the table."
        intro="Whether you are exploring the Christian faith, looking for a Bible study, or longing to grow deeper, you are welcome here. Tell us a little about yourself and we will help you find your place."
        image="/images/join-poster.webp"
        imageAlt="Christian Students Network invitation to join a Bible study"
        meta={["Open to all students", "Weekly groups", "Thursday sessions"]}
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
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <div>
              <Eyebrow>Tell us about you</Eyebrow>
              <h2 className="mt-5 font-display text-3xl leading-tight text-balance text-forest-deep sm:text-4xl">
                Let us help you find your fellowship.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/65">
                Fill in the form and we will connect you with the campus
                fellowship or Thursday session that fits your week. If you would
                rather talk to someone first, call us — we would love to hear
                from you.
              </p>

              <div className="mt-5">
                <TextLink href="/visit">Plan your visit instead</TextLink>
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-line bg-cream p-6 sm:p-8">
                <JoinForm />
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-line bg-cream p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest/5 text-forest">
                    <Clock className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-xl text-forest-deep">
                    Thursday sessions
                  </h3>
                </div>
                <div className="mt-5 space-y-3">
                  {thursdaySessions.map((session) => (
                    <div
                      key={session.session}
                      className="flex items-center justify-between gap-4 border-b border-line/70 pb-3 text-sm last:border-0 last:pb-0"
                    >
                      <span className="font-medium text-forest-deep">
                        {session.session}
                      </span>
                      <span className="text-ink/55">{session.time}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-ink/55">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-moss" />
                  Kicukiro – Mu Banyamakuru, Kigali
                </p>
              </div>

              <div className="rounded-2xl border border-line bg-forest-deep p-7 text-cream">
                <h3 className="font-display text-xl">Our campuses</h3>
                <ul className="mt-4 space-y-3">
                  {campuses.map((campus) => (
                    <li key={campus.slug}>
                      <p className="text-sm font-medium">{campus.name}</p>
                      <p className="text-xs text-cream/50">{campus.type}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-line bg-cream p-7">
                <h3 className="font-display text-xl text-forest-deep">
                  Prefer to call?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  Speak to someone from the fellowship directly.
                </p>
                <div className="mt-4 space-y-2">
                  {site.phones.map((phone) => (
                    <a
                      key={phone.href}
                      href={phone.href}
                      className="flex items-center gap-2 text-sm font-semibold text-forest transition-colors hover:text-gold"
                    >
                      <Phone className="h-4 w-4" />
                      {phone.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow className="justify-center">What happens next</Eyebrow>
            <h2 className="mt-5 font-display text-3xl leading-tight text-balance text-forest-deep sm:text-4xl">
              Three simple steps.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/65">
              You do not need to have it all together to join us. Just take the
              first step.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {nextSteps.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="rounded-2xl border border-line bg-white/40 p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest/5 text-forest">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-[11px] font-medium tracking-[0.18em] text-ink/30">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl text-forest-deep">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-y border-line/60 bg-sand/60 py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="relative aspect-[4/3] w-full max-w-[220px] shrink-0 overflow-hidden rounded-2xl bg-sand">
                <Image
                  src="/images/gallery-09.webp"
                  alt="A fellowship group outdoors in Rwanda"
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>
              <div>
                <Eyebrow>You belong here</Eyebrow>
                <h2 className="mt-4 max-w-xl font-display text-2xl leading-tight text-balance text-forest-deep sm:text-3xl">
                  Come as you are. Bring your questions.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/60">
                  Our fellowships are made up of students from different
                  backgrounds and different places in their walk with Christ.
                  You will find a warm welcome and an open Bible.
                </p>
              </div>
            </div>
            <a
              href={site.joinPhone.href}
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-gold bg-gold px-6 py-3 text-sm font-semibold tracking-wide text-forest-deep transition-colors hover:bg-gold-soft"
            >
              <Phone className="h-4 w-4" />
              Call us today
            </a>
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Still deciding?"
        title="Talk to a real person."
        intro="Send us a message or call the fellowship. We are happy to answer your questions before you come."
        primaryHref="/visit"
        primaryLabel="Plan your visit"
        secondaryHref="/contact"
        secondaryLabel="Send a message"
      />
    </>
  );
}
