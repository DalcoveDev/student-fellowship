import type { Metadata } from "next";
import { BookOpen, Clock, MapPin, Phone, Users } from "@/components/icons";
import {
  ButtonLink,
  Container,
  CtaBand,
  Eyebrow,
  PageHero,
  SectionHeading,
} from "@/components/ui";
import { VisitPlanner } from "@/components/visit-planner";
import { site, thursdaySessions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Plan your visit",
  description:
    "Plan your first visit to a Christian Students Network fellowship. Choose a campus, pick a Thursday session, and let us know you are coming.",
};

const expectations = [
  {
    title: "A warm welcome",
    description:
      "Someone will meet you, show you around, and introduce you to a few students. You will not be left standing alone.",
    icon: Users,
  },
  {
    title: "An open Bible",
    description:
      "We read a passage together, explain it in context, and talk about what it means for student life. Bring your questions.",
    icon: BookOpen,
  },
  {
    title: "About two hours",
    description:
      "Each session includes teaching, discussion, and prayer. Come for the whole session or simply come and observe.",
    icon: Clock,
  },
];

export default function VisitPage() {
  return (
    <>
      <PageHero
        eyebrow="Plan your visit"
        title="Come and see for yourself."
        intro="You do not need to have it all together to visit us. Choose a campus fellowship or a Thursday session, tell us a little about yourself, and we will help you take the first step."
        image="/images/gallery-02.webp"
        imageAlt="Students grouped together after a fellowship gathering"
        meta={["No pressure", "3-step planner", "We reply by phone or email"]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={site.joinPhone.href}>
            <Phone className="h-4 w-4" />
            Call {site.joinPhone.label}
          </ButtonLink>
          <ButtonLink href="/campuses" variant="outline" icon={false}>
            Explore our campuses
          </ButtonLink>
        </div>
      </PageHero>

      <section className="border-y border-line/60 bg-sand/60 py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <Eyebrow>Your first visit</Eyebrow>
              <h2 className="mt-5 font-display text-3xl leading-tight text-balance text-forest-deep sm:text-4xl">
                Three steps to your first gathering.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink/70">
                Planning a visit should not be complicated. Tell us where you
                study and when you are free, and we will do the rest. If you
                would rather talk to someone first, call us — we would love to
                hear from you.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex gap-4 rounded-2xl border border-line bg-cream p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest/5 text-forest">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-forest-deep">
                      Where we meet
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/60">
                      Kicukiro – Mu Banyamakuru, Kigali, for our Thursday study.
                      Campus fellowships meet at UR-CST, Mount Kigali, and ETO
                      Nyamata.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl border border-line bg-cream p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest/5 text-forest">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-forest-deep">
                      When we meet
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/60">
                      Every Thursday, with three sessions across the day. Pick
                      the one that fits your schedule.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
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
            </div>

            <VisitPlanner />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What to expect"
            title="You are welcome before you are ready."
            intro="Here is what a first visit usually looks like. Come as you are, bring your Bible if you have one, and bring a friend if you can."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {expectations.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-line bg-white/40 p-7"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest/5 text-forest">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl text-forest-deep">
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

      <CtaBand
        eyebrow="Still deciding?"
        title="Talk to a real person before you come."
        intro="Send us a message or call the fellowship. We are happy to answer your questions and help you find the right group."
        primaryHref="/contact"
        primaryLabel="Send a message"
        secondaryHref="/campuses"
        secondaryLabel="See the campuses"
      />
    </>
  );
}
