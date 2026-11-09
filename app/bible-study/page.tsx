import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock, MapPin, Users } from "@/components/icons";
import {
  ButtonLink,
  Container,
  CtaBand,
  Eyebrow,
  PageHero,
  SectionHeading,
  TextLink,
} from "@/components/ui";
import { site, thursdaySessions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bible study & training",
  description:
    "Weekly discipleship classes and Strengthen conferences that help high school and university students in Rwanda know the Word and follow Jesus.",
};

const rhythm = [
  {
    step: "01",
    title: "We open the Bible",
    description:
      "A passage is read aloud, explained in context, and applied to student life. We want the text to speak for itself.",
    icon: BookOpen,
  },
  {
    step: "02",
    title: "We discuss and ask",
    description:
      "Questions are welcome. We talk through what the passage means, what it reveals about God, and how it changes us.",
    icon: Users,
  },
  {
    step: "03",
    title: "We pray together",
    description:
      "We bring our studies, exams, families, and struggles before God, and we pray for one another and for our campuses.",
    icon: MapPin,
  },
];

const questions = [
  {
    question: "Do I need to know the Bible already?",
    answer:
      "No. Some students have grown up in church; others are reading the Bible for the first time. We teach clearly and welcome every question.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring a Bible if you have one, a notebook if you like to take notes, and a friend if you can. If you do not have a Bible, let us know and we will help.",
  },
  {
    question: "Which session should I attend?",
    answer:
      "Come to whichever session fits your schedule. All three Thursday sessions cover the same teaching, so you will not miss out.",
  },
  {
    question: "Is there a cost?",
    answer:
      "No. Our Bible studies and conferences are free. We want nothing to stand in the way of students hearing the gospel.",
  },
];

export default function BibleStudyPage() {
  return (
    <>
      <PageHero
        eyebrow="Bible study & training"
        title="The Word of God at the centre of student life."
        intro="We equip students in high schools and universities across Rwanda through weekly discipleship classes, conferences, and training that foster spiritual growth and Christ-centred living."
        image="/images/bible-study-smallgroup.webp"
        imageAlt="Students gathered around open Bibles in a small group"
        meta={["Weekly small groups", "Strengthen conferences", "Student-led training"]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/join">Join a Bible study</ButtonLink>
          <ButtonLink href="/events" variant="outline" icon={false}>
            See conferences
          </ButtonLink>
        </div>
      </PageHero>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <Eyebrow>Weekly discipleship</Eyebrow>
              <h2 className="mt-5 font-display text-3xl leading-tight text-balance text-forest-deep sm:text-4xl">
                A simple rhythm of teaching and fellowship.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink/70">
                Every week, students gather in small groups to study the
                Scriptures, pray, and encourage one another. These groups are
                where the Bible is opened, questions are asked, and students
                learn to follow Jesus in the ordinary places of campus life.
              </p>
              <div className="mt-8 space-y-4">
                {rhythm.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.step}
                      className="flex gap-4 rounded-2xl border border-line bg-cream p-5"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest/5 text-forest">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-semibold tracking-[0.16em] text-gold">
                            {item.step}
                          </span>
                          <h3 className="font-display text-lg text-forest-deep">
                            {item.title}
                          </h3>
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-ink/60">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative min-h-[24rem] overflow-hidden rounded-[1.5rem] bg-sand">
              <Image
                src="/images/training-workshop.webp"
                alt="Students working together during a ministry training session"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/90 to-transparent p-7 pt-20 text-cream">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-soft">
                  Thursday Bible study
                </p>
                <p className="mt-2 font-display text-2xl">
                  Kicukiro – Mu Banyamakuru
                </p>
                <p className="mt-1 text-sm text-cream/70">
                  Three sessions every Thursday
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-line/60 bg-sand/60 py-16 sm:py-24">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Plan your visit"
              title="Thursday sessions."
              intro="Come to the session that fits your schedule. Each one includes teaching, discussion, and prayer."
            />
            <div className="shrink-0">
              <TextLink href="/campuses">Find your campus</TextLink>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {thursdaySessions.map((session, index) => (
              <div
                key={session.session}
                className="rounded-2xl border border-line bg-cream p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest/5 text-forest">
                    <Clock className="h-5 w-5" />
                  </span>
                  <span className="text-[11px] font-medium tracking-[0.18em] text-ink/30">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl text-forest-deep">
                  {session.session}
                </h3>
                <p className="mt-2 text-sm font-medium text-gold">{session.time}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  Teaching and discussion around the Word, followed by prayer
                  and fellowship.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-line bg-cream p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-2 text-sm text-ink/65">
              <MapPin className="h-4 w-4 text-moss" />
              Kicukiro – Mu Banyamakuru, Kigali
            </p>
            <a
              href={site.joinPhone.href}
              className="text-sm font-semibold text-forest underline decoration-gold/60 underline-offset-4"
            >
              Call {site.joinPhone.label}
            </a>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <Eyebrow>Strengthen conferences</Eyebrow>
              <h2 className="mt-5 font-display text-3xl leading-tight text-balance text-forest-deep sm:text-4xl">
                Wider rooms for teaching and sending.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink/70">
                We organise national, regional, and targeted conferences to
                present the gospel clearly, train students, and call them to
                deeper commitment to Christ. Conferences give us a wider room to
                teach, to worship together, and to send students back to their
                campuses with fresh conviction.
              </p>
              <div className="mt-8">
                <TextLink href="/events">View upcoming conferences</TextLink>
              </div>
            </div>
            <Link
              href="/events"
              className="group relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-sand"
            >
              <Image
                src="/images/training-conference.webp"
                alt="Students seated in a conference hall during a teaching session"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-soft">
                    Conferences
                  </p>
                  <p className="mt-1 font-display text-2xl text-cream">
                    Strengthen
                  </p>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-forest-deep">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-y border-line/60 bg-sand/60 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Questions"
            title="Before you come."
            intro="A few things students often ask before their first Bible study."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {questions.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-line bg-cream p-7"
              >
                <h3 className="font-display text-xl text-forest-deep">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Start this week"
        title="Come and study with us."
        intro="Tell us a little about yourself and we will help you find the right session or campus fellowship."
        primaryHref="/join"
        primaryLabel="Join a Bible study"
        secondaryHref="/visit"
        secondaryLabel="Plan your visit"
      />
    </>
  );
}
