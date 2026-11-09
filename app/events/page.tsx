import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Calendar, Clock, MapPin } from "@/components/icons";
import {
  ButtonLink,
  Container,
  CtaBand,
  Eyebrow,
  PageHero,
  SectionHeading,
  TextLink,
} from "@/components/ui";
import { events, site, thursdaySessions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Conferences, campus gatherings, and the weekly Thursday Bible study with Christian Students Network in Rwanda.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="What's coming up"
        title="Gather with us."
        intro="Conferences, campus gatherings, and our weekly Bible study. Come and see what God is doing among students in Rwanda."
        image="/images/event-conference.webp"
        imageAlt="Students gathered in a hall for a conference"
        meta={["Weekly Bible study", "Conferences", "Campus gatherings"]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/join">Join a Bible study</ButtonLink>
          <ButtonLink href="/visit" variant="outline" icon={false}>
            Plan your visit
          </ButtonLink>
        </div>
      </PageHero>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="On the calendar"
              title="Upcoming gatherings."
              intro="Our conferences and weekly studies are open to students, ministry partners, and anyone who wants to know Christ more."
            />
            <div className="shrink-0">
              <TextLink href="/campuses">Find your campus</TextLink>
            </div>
          </div>

          <div className="mt-10 space-y-5">
            {events.map((event) => (
              <article
                key={event.title}
                className="group grid gap-6 rounded-[1.5rem] border border-line bg-cream p-5 transition-colors hover:border-gold sm:grid-cols-[120px_1fr_auto] sm:items-center sm:p-6"
              >
                <div className="flex h-24 w-24 flex-col items-center justify-center rounded-2xl bg-forest-deep text-cream">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-soft">
                    {event.month}
                  </span>
                  <span className="mt-1 font-display text-3xl leading-none">
                    {event.day}
                  </span>
                </div>

                <div>
                  <p className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                    <span>{event.dateLabel}</span>
                    <span aria-hidden className="text-ink/25">
                      /
                    </span>
                    <span className="text-moss">{event.kind}</span>
                  </p>
                  <h2 className="mt-2 font-display text-2xl text-forest-deep sm:text-3xl">
                    {event.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/60">
                    {event.description}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ink/50">
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-moss" />
                      {event.kind === "Weekly gathering"
                        ? "Kicukiro – Mu Banyamakuru"
                        : "Kigali, Rwanda"}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Clock className="h-4 w-4 text-moss" />
                      {event.kind === "Weekly gathering"
                        ? "Three sessions"
                        : "Full day"}
                    </span>
                  </div>
                </div>

                <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-line text-forest transition-colors group-hover:border-gold group-hover:bg-gold sm:flex">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line/60 bg-sand/60 py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <Eyebrow>Every week</Eyebrow>
              <h2 className="mt-5 font-display text-3xl leading-tight text-balance text-forest-deep sm:text-4xl">
                Thursday Bible study.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink/70">
                Three sessions in Kicukiro – Mu Banyamakuru, with teaching,
                discussion, and fellowship around the Word. No registration is
                needed — just come.
              </p>
              <div className="mt-7 space-y-3">
                {thursdaySessions.map((session) => (
                  <div
                    key={session.session}
                    className="flex items-center justify-between gap-4 rounded-xl border border-line bg-cream px-5 py-4"
                  >
                    <span className="text-sm font-semibold text-forest-deep">
                      {session.session}
                    </span>
                    <span className="text-sm text-ink/60">{session.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/join">Let us know you are coming</ButtonLink>
                <ButtonLink
                  href={site.joinPhone.href}
                  variant="outline"
                  icon={false}
                >
                  Call {site.joinPhone.label}
                </ButtonLink>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-sand lg:aspect-auto lg:min-h-[24rem]">
              <Image
                src="/images/bible-study-smallgroup.webp"
                alt="Students gathered around Bibles for Thursday Bible study"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="rounded-[1.75rem] border border-line bg-cream p-8 sm:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-moss">
                  <Calendar className="h-4 w-4" />
                  Stay in the loop
                </p>
                <h2 className="mt-4 max-w-2xl font-display text-2xl leading-tight text-balance text-forest-deep sm:text-3xl">
                  Want to hear about the next conference or campus gathering?
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/60">
                  Send us a message and we will keep you connected to what is
                  happening across the fellowship.
                </p>
              </div>
              <ButtonLink href="/contact">Get in touch</ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Come and see"
        title="You are welcome at the next gathering."
        intro="Whether it is a conference or a Thursday study, there is a place for you."
        primaryHref="/visit"
        primaryLabel="Plan your visit"
        secondaryHref="/campuses"
        secondaryLabel="Find your campus"
      />
    </>
  );
}
