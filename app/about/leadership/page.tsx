import type { Metadata } from "next";
import {
  BookOpen,
  Heart,
  MapPin,
  Play,
  Users,
} from "@/components/icons";
import {
  ButtonLink,
  Container,
  CtaBand,
  Eyebrow,
  PageHero,
  SectionHeading,
} from "@/components/ui";
import { leadershipTeams, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet the teams that serve Christian Students Network: ministry oversight, teaching and discipleship, campus leadership, online ministry, and charity.",
};

const teamIcons = {
  oversight: Users,
  discipleship: BookOpen,
  "campus-leaders": MapPin,
  online: Play,
  charity: Heart,
} as const;

const commitments = [
  {
    title: "Servant leadership",
    description:
      "Leadership in the fellowship is service, not status. Our teams exist to help students know Christ and grow in Him.",
  },
  {
    title: "Accountable teaching",
    description:
      "Those who teach are held to the Scriptures and to one another. Doctrine is handled carefully and prayerfully.",
  },
  {
    title: "Raising up students",
    description:
      "We want to hand responsibility to students and graduates, so the work continues beyond any one leader.",
  },
];

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="A team serving students, behind the scenes and on campus."
        intro="Christian Students Network is served by students, graduates, and ministry partners who give their time to teach the Word, host fellowships, and care for one another. Here is how the work is organised."
        image="/images/training-workshop.webp"
        imageAlt="Students working together during a ministry training session"
        meta={["5 teams", "Students & graduates", "Serving the campuses"]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact">Get in touch</ButtonLink>
          <ButtonLink href="/about" variant="outline" icon={false}>
            About the ministry
          </ButtonLink>
        </div>
      </PageHero>

      <section className="border-y border-line/60 bg-sand/60 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="How we serve"
            title="Five teams, one mission."
            intro="Each team carries a different part of the ministry, but all of them are working toward the same end: disciples of Jesus Christ among students in Rwanda."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {leadershipTeams.map((team) => {
              const Icon =
                teamIcons[team.slug as keyof typeof teamIcons] ?? Users;
              return (
                <article
                  key={team.slug}
                  className="flex flex-col rounded-2xl border border-line bg-cream p-7 sm:p-8"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest/5 text-forest">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl text-forest-deep">
                    {team.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/60">
                    {team.summary}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-line/70 pt-4">
                    {team.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-xs text-ink/60"
                      >
                        <span
                          aria-hidden
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}

            <div className="flex flex-col justify-center rounded-2xl border border-forest/20 bg-forest-deep p-7 text-cream sm:p-8">
              <Eyebrow light>Serve with us</Eyebrow>
              <h3 className="mt-5 font-display text-2xl">
                There is room on the team.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/65">
                If you love the Word, care about students, or have a gift for
                hospitality, media, or organisation, we would love to talk with
                you about serving.
              </p>
              <div className="mt-6">
                <ButtonLink href="/contact" variant="light">
                  Talk to us about serving
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What we look for"
            title="The character behind the role."
            intro="Roles matter, but character matters more. These are the commitments we pray will mark every person who serves."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {commitments.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-line bg-white/40 p-7"
              >
                <span className="text-[11px] font-semibold tracking-[0.18em] text-gold">
                  0{index + 1}
                </span>
                <h3 className="mt-4 font-display text-xl text-forest-deep">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[1.5rem] border border-line bg-sand/60 p-7 sm:p-9">
            <h2 className="font-display text-2xl text-forest-deep sm:text-3xl">
              Want to reach a specific team?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/65">
              Send us a message and tell us which part of the ministry you would
              like to speak with. We will connect you with the right person.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Contact the ministry</ButtonLink>
              <ButtonLink
                href={site.joinPhone.href}
                variant="outline"
                icon={false}
              >
                Call {site.joinPhone.label}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Meet us in person"
        title="The best way to know us is to visit."
        intro="Plan a visit, come to a Thursday session, and meet the students and leaders who make up the fellowship."
        primaryHref="/visit"
        primaryLabel="Plan your visit"
        secondaryHref="/contact"
        secondaryLabel="Get in touch"
      />
    </>
  );
}
