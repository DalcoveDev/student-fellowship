import type { Metadata } from "next";
import Image from "next/image";
import { BookOpen, Clock, MapPin, Phone, Users } from "@/components/icons";
import {
  ButtonLink,
  Container,
  CtaBand,
  Eyebrow,
  PageHero,
  SectionHeading,
} from "@/components/ui";
import { campuses, site, thursdaySessions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Campuses",
  description:
    "Find a Christian Students Network fellowship at UR-CST, Mount Kigali, or ETO Nyamata High School — and join our weekly Thursday Bible study in Kicukiro.",
};

const expectations = [
  {
    title: "Open Bibles",
    description:
      "We read the text together, explain it, and ask what it means for the way we live as students.",
    icon: BookOpen,
  },
  {
    title: "Honest questions",
    description:
      "You do not need to have it all figured out. Bring your questions and wrestle with the Scriptures alongside us.",
    icon: Users,
  },
  {
    title: "Real fellowship",
    description:
      "Discipleship happens in relationship. Expect prayer, conversation, and friendships that go beyond the meeting.",
    icon: MapPin,
  },
];

export default function CampusesPage() {
  return (
    <>
      <PageHero
        eyebrow="Where we serve"
        title="One fellowship, three campuses."
        intro="From university halls to high school classrooms, we are building communities where students can know Christ and make Him known."
        image="/images/campus-urcst.webp"
        imageAlt="Students seated together during a UR-CST Reformed Bible study session"
        meta={["3 fellowships", "UR-CST", "Mount Kigali", "ETO Nyamata"]}
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
          <SectionHeading
            eyebrow="Our fellowships"
            title="Find your campus."
            intro="Each fellowship has its own rhythm and community, but the same aim: to open the Scriptures and help students follow Jesus."
          />

          <div className="mt-10 space-y-6">
            {campuses.map((campus, index) => (
              <article
                key={campus.slug}
                className="group grid overflow-hidden rounded-[1.5rem] border border-line bg-cream lg:grid-cols-[0.9fr_1.1fr]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-sand lg:aspect-auto lg:min-h-[22rem]">
                  <Image
                    src={campus.image}
                    alt={campus.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-forest/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-forest">
                      {campus.type}
                    </span>
                    <span className="text-[11px] font-medium tracking-[0.18em] text-ink/30">
                      0{index + 1}
                    </span>
                  </div>
                  <h2 className="mt-5 font-display text-3xl text-forest-deep">
                    {campus.shortName}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-gold">{campus.name}</p>
                  <p className="mt-4 text-sm leading-relaxed text-ink/70">
                    {campus.description}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/55">
                    {campus.detail}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ink/50">
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-moss" />
                      Kigali, Rwanda
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Clock className="h-4 w-4 text-moss" />
                      Weekly gathering
                    </span>
                  </div>
                  <div className="mt-7">
                    <ButtonLink href="/join" variant="outline" icon={false}>
                      Join this fellowship
                    </ButtonLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line/60 bg-sand/60 py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <Eyebrow>Every Thursday</Eyebrow>
              <h2 className="mt-5 font-display text-3xl leading-tight text-balance text-forest-deep sm:text-4xl">
                A midweek anchor in Kicukiro.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink/70">
                Students from different campuses gather every Thursday at
                Kicukiro – Mu Banyamakuru for teaching, discussion, and
                fellowship around the Word. Three sessions make room for
                different schedules.
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
                <ButtonLink href="/bible-study">About Bible study</ButtonLink>
                <ButtonLink
                  href={site.joinPhone.href}
                  variant="outline"
                  icon={false}
                >
                  <Phone className="h-4 w-4" />
                  {site.joinPhone.label}
                </ButtonLink>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-sand lg:aspect-auto">
              <Image
                src="/images/bible-study-smallgroup.webp"
                alt="Students gathered around open Bibles in a small group"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What to expect"
            title="Come and see."
            intro="You do not need to have it all together to join us. Bring your Bible, bring your questions, and bring a friend."
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
        eyebrow="Your campus"
        title="There is a seat for you at the table."
        intro="Tell us where you study and we will help you find the fellowship or session that fits your week."
        primaryHref="/visit"
        primaryLabel="Plan your visit"
        secondaryHref="/join"
        secondaryLabel="Join a study"
      />
    </>
  );
}
