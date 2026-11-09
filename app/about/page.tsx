import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Heart, MapPin, Users } from "@/components/icons";
import {
  ButtonLink,
  Container,
  CtaBand,
  Eyebrow,
  PageHero,
  SectionHeading,
  TextLink,
} from "@/components/ui";
import { ministryExpressions, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Christian Students Network is a ministry to high school and university students across Rwanda, making disciples of Jesus Christ and strengthening believers in the gospel.",
};

const values = [
  {
    title: "Rooted in the Word",
    description:
      "The Scriptures shape what we teach, how we gather, and how we live. We want students to know the Bible and obey it.",
    icon: BookOpen,
  },
  {
    title: "Grounded in the gospel",
    description:
      "Everything we do flows from the good news of Jesus Christ — His life, death, resurrection, and lordship over all things.",
    icon: Heart,
  },
  {
    title: "Reaching every campus",
    description:
      "From university halls to high school classrooms, we want every student in Rwanda to hear the gospel and find a fellowship.",
    icon: MapPin,
  },
  {
    title: "Growing together",
    description:
      "Discipleship happens in community. We learn, pray, serve, and grow as a family of students following Jesus.",
    icon: Users,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the ministry"
        title="A fellowship rooted in the Word, reaching every campus."
        intro={`${site.mission} We are a network of high school and university students across Rwanda, learning to love Christ, know His Word, and live for His glory.`}
        image="/images/about-group.webp"
        imageAlt="Students gathered together after a Christian Students Network fellowship meeting"
        meta={["Our mission", "Our story", "Statement of faith"]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/join">Join a Bible study</ButtonLink>
          <ButtonLink href="/about/statement-of-faith" variant="outline" icon={false}>
            Read our statement of faith
          </ButtonLink>
        </div>
      </PageHero>

      <section className="border-y border-line/60 bg-sand/60 py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <Eyebrow>Our story</Eyebrow>
              <h2 className="mt-5 font-display text-3xl leading-tight text-balance text-forest-deep sm:text-4xl lg:text-[2.85rem]">
                Students reaching students with the gospel.
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/70">
                <p>
                  Christian Students Network is a ministry to high school and
                  university students across Rwanda. We gather around the Bible,
                  pray together, and help one another follow Jesus in the middle
                  of student life.
                </p>
                <p>
                  Our conviction is simple: the gospel is the power of God for
                  salvation, and disciples are made as the Word is taught,
                  believers are strengthened, and students are sent back to their
                  campuses to live for Christ.
                </p>
                <p>
                  We are not a building or a single programme. We are a family of
                  fellowships — in lecture halls, classrooms, homes, and online —
                  united by a common Saviour and a common mission.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                <TextLink href="/campuses">Explore our campuses</TextLink>
                <TextLink href="/about/leadership">Meet the leadership</TextLink>
                <TextLink href="/events">See upcoming events</TextLink>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-sand">
                <Image
                  src="/images/gallery-02.webp"
                  alt="Students grouped together after a fellowship gathering"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-sand">
                <Image
                  src="/images/gallery-07.webp"
                  alt="Students sharing a meal together"
                  fill
                  sizes="(min-width: 1024px) 22vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-sand">
                <Image
                  src="/images/gallery-10.webp"
                  alt="Students standing together after a ministry gathering"
                  fill
                  sizes="(min-width: 1024px) 22vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.5rem] border border-line bg-cream p-8 sm:p-10">
              <Eyebrow>Our mission</Eyebrow>
              <p className="mt-6 font-display text-2xl leading-snug text-forest-deep sm:text-3xl">
                {site.mission}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-ink/60">
                We exist to make disciples — not merely to gather a crowd. That
                means teaching the Scriptures, praying for one another, and
                walking with students as they grow in Christ.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-line bg-forest-deep p-8 text-cream sm:p-10">
              <Eyebrow light>Our vision</Eyebrow>
              <p className="mt-6 font-display text-2xl leading-snug sm:text-3xl">
                {site.vision}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-cream/60">
                We long to see the supremacy of Christ proclaimed from every
                campus in Rwanda to the ends of the earth.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-line/60 bg-sand/60 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our strategy"
            title="Three ministry expressions."
            intro="We pursue our mission through a simple, repeatable rhythm: teach the Word, train believers, and reach the next student."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {ministryExpressions.map((expression) => (
              <Link
                key={expression.number}
                href={expression.href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-cream transition-all duration-300 hover:-translate-y-1 hover:border-forest/25 hover:shadow-xl hover:shadow-forest/10"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                  <Image
                    src={expression.image}
                    alt={expression.imageAlt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-gold">
                    {expression.number}
                  </p>
                  <h3 className="mt-3 font-display text-2xl text-forest-deep">
                    {expression.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/60">
                    {expression.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-forest">
                    Learn more
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What shapes us"
            title="Four convictions we keep returning to."
            intro="These are not slogans. They are the things we pray will mark our fellowships, our teaching, and our friendships."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-line bg-white/40 p-7"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest/5 text-forest">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl text-forest-deep">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-y border-line/60 bg-sand/60 py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 rounded-[1.75rem] border border-line bg-cream p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-12">
            <div>
              <Eyebrow>What we believe</Eyebrow>
              <h2 className="mt-5 max-w-2xl font-display text-3xl leading-tight text-balance text-forest-deep sm:text-4xl">
                A statement of faith drawn from the Scriptures.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/65">
                We believe the Bible is the fully inspired, inerrant, and
                sufficient Word of God. Read the doctrines that shape our
                fellowship, from the Trinity to the Church.
              </p>
            </div>
            <ButtonLink href="/about/statement-of-faith">
              Read the statement
            </ButtonLink>
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Get involved"
        title="There is a seat for you at the table."
        intro="Whether you are exploring the Christian faith, looking for a Bible study, or longing to grow deeper, you are welcome here."
        primaryHref="/join"
        primaryLabel="Join a Bible study"
        secondaryHref="/visit"
        secondaryLabel="Plan your visit"
      />
    </>
  );
}
