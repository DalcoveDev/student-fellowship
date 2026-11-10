import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  MapPin,
  Play,
  Users,
} from "@/components/icons";
import { Testimonials } from "@/components/testimonials";
import {
  ButtonLink,
  Container,
  CtaBand,
  Eyebrow,
  PhotoGallery,
  SectionHeading,
  TextLink,
} from "@/components/ui";
import { articles, readingTime } from "@/lib/articles";
import { campuses, events, gallery, site } from "@/lib/site";

const startHere = [
  {
    intent: "I'm new to all of this",
    title: "Plan a first visit",
    description:
      "Come as you are. Tell us a little about yourself and we will walk you through your first gathering.",
    href: "/visit",
    label: "Plan your visit",
  },
  {
    intent: "I want a fellowship near me",
    title: "Find your campus",
    description:
      "See where students meet at UR-CST, Mount Kigali, and ETO Nyamata, and when each group gathers.",
    href: "/campuses",
    label: "See the campuses",
  },
  {
    intent: "I want to grow in the Word",
    title: "Join a Bible study",
    description:
      "Sit around an open Bible with other students, ask honest questions, and learn to follow Jesus together.",
    href: "/join",
    label: "Join a study",
  },
];

const pathways = [
  {
    title: "Join a Bible study",
    description:
      "Gather with students around the Word, ask honest questions, and grow in Christ.",
    href: "/join",
    icon: BookOpen,
  },
  {
    title: "Explore our campuses",
    description:
      "Find a fellowship at UR-CST, Mount Kigali, or ETO Nyamata High School.",
    href: "/campuses",
    icon: MapPin,
  },
  {
    title: "Trainings & conferences",
    description:
      "Be equipped through weekly discipleship classes and Strengthen conferences.",
    href: "/bible-study",
    icon: Users,
  },
  {
    title: "Online ministry",
    description:
      "Watch The Upside Down Show and study the Scriptures with us online.",
    href: "/online-ministry",
    icon: Play,
  },
];

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-forest-deep text-cream">
        <Image
          src="/images/hero-classroom.webp"
          alt="A teacher opening the Bible to a room full of students"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/80 to-forest-deep/25"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-transparent to-forest-deep/30"
        />

        <Container className="relative py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <Eyebrow light>Christian Students Network · Rwanda</Eyebrow>
            <h1 className="mt-6 font-display text-4xl leading-[1.04] text-balance sm:text-6xl lg:text-7xl">
              Making disciples of Jesus Christ among students in Rwanda.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-cream/75 sm:text-lg">
              {site.mission} We are a fellowship of high school and university
              students learning to love Christ, know His Word, and live for His
              glory.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/visit">Plan your visit</ButtonLink>
              <ButtonLink href="/join" variant="ghost" icon={false}>
                Join a Bible study
              </ButtonLink>
            </div>

            <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-4 border-t border-cream/20 pt-6">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.18em] text-cream/45">
                  Every week
                </dt>
                <dd className="mt-1 text-sm font-medium text-cream/90">
                  Discipleship classes
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.18em] text-cream/45">
                  Across Rwanda
                </dt>
                <dd className="mt-1 text-sm font-medium text-cream/90">
                  3 campus fellowships
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.18em] text-cream/45">
                  Every Thursday
                </dt>
                <dd className="mt-1 text-sm font-medium text-cream/90">
                  Bible study in Kicukiro
                </dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="start-here-heading"
        className="border-b border-line/70 bg-cream py-12 sm:py-16"
      >
        <Container>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Eyebrow>Start here</Eyebrow>
              <h2
                id="start-here-heading"
                className="mt-4 font-display text-2xl leading-tight text-balance text-forest-deep sm:text-3xl"
              >
                Not sure where to begin?
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-ink/55 lg:text-right">
              Pick the sentence that sounds most like you. We will take it from
              there.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {startHere.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex flex-col rounded-2xl border border-line bg-white/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-forest/30 hover:bg-white hover:shadow-xl hover:shadow-forest/10"
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                  {item.intent}
                </span>
                <h3 className="mt-3 font-display text-xl text-forest-deep">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">
                  {item.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-forest">
                  {item.label}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-sand">
                <Image
                  src="/images/about-group.webp"
                  alt="A large group of students gathered after a fellowship meeting"
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
                  src="/images/gallery-09.webp"
                  alt="Students standing together outdoors in Rwanda"
                  fill
                  sizes="(min-width: 1024px) 22vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <Eyebrow>Who we are</Eyebrow>
              <h2 className="mt-5 font-display text-3xl leading-tight text-balance text-forest-deep sm:text-4xl lg:text-[2.85rem]">
                A student fellowship rooted in the Scriptures.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink/70">
                Christian Students Network is a ministry to high school and
                university students across Rwanda. We gather around the Bible,
                pray together, and help one another follow Jesus in the middle
                of student life.
              </p>

              <div className="mt-8 grid gap-6 border-t border-line pt-7 sm:grid-cols-2">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                    Our mission
                  </p>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-forest">
                    {site.mission}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                    Our vision
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">
                    {site.vision}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <TextLink href="/about">More about our ministry</TextLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-line/60 bg-sand/60 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Explore the ministry"
            title="Four ways to get involved."
            intro="Beyond your first step, these are the rhythms that shape life together — study, campus fellowship, training, and online ministry."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pathways.map((pathway, index) => {
              const Icon = pathway.icon;
              return (
                <Link
                  key={pathway.href}
                  href={pathway.href}
                  className="group flex flex-col justify-between rounded-2xl border border-line bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:border-forest/30 hover:shadow-xl hover:shadow-forest/10"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest/5 text-forest">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-[11px] font-medium tracking-[0.18em] text-ink/30">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-8 font-display text-xl text-forest-deep">
                      {pathway.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/60">
                      {pathway.description}
                    </p>
                  </div>
                  <span className="mt-7 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-forest">
                    Learn more
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="What's coming up"
              title="Gather with us."
              intro="Conferences, campus gatherings, and our weekly Bible study. Come and see what God is doing among students."
            />
            <div className="shrink-0">
              <TextLink href="/events">View all events</TextLink>
            </div>
          </div>

          <div className="mt-10 grid gap-4">
            {events.slice(0, 2).map((event) => (
              <Link
                key={event.title}
                href="/events"
                className="group grid gap-5 rounded-2xl border border-line bg-white/40 p-4 transition-colors hover:border-gold sm:grid-cols-[190px_1fr_auto] sm:items-center"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-sand sm:aspect-[16/10]">
                  <Image
                    src={event.image}
                    alt={event.imageAlt}
                    fill
                    sizes="(min-width: 640px) 190px, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <p className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                    <span>{event.dateLabel}</span>
                    <span aria-hidden className="text-ink/25">
                      /
                    </span>
                    <span className="text-moss">{event.kind}</span>
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-forest-deep">
                    {event.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/60">
                    {event.description}
                  </p>
                </div>
                <span className="hidden h-11 w-11 items-center justify-center rounded-full border border-line text-forest transition-colors group-hover:border-gold group-hover:bg-gold sm:flex">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-forest-deep py-16 text-cream sm:py-24">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <Eyebrow light>Where we serve</Eyebrow>
              <h2 className="mt-5 font-display text-3xl leading-tight text-balance sm:text-4xl lg:text-[2.85rem]">
                One fellowship, three campuses.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-cream/65">
                From university halls to high school classrooms, we are building
                communities where students can know Christ and make Him known.
              </p>
            </div>
            <div className="shrink-0">
              <TextLink href="/campuses" light>
                Explore all campuses
              </TextLink>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {campuses.map((campus) => (
              <Link
                key={campus.slug}
                href="/campuses"
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-forest"
              >
                <Image
                  src={campus.image}
                  alt={campus.imageAlt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/95 via-forest-deep/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-soft">
                    {campus.type}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-cream">
                    {campus.shortName}
                  </h3>
                  <p className="mt-1 text-sm text-cream/65">{campus.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <Testimonials />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="From the fellowship"
              title="Think with us."
              intro="Reflections on discipleship, doctrine, and life together as students following Jesus."
            />
            <div className="shrink-0">
              <TextLink href="/articles">View all articles</TextLink>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-cream transition-all duration-300 hover:-translate-y-1 hover:border-forest/25 hover:shadow-xl hover:shadow-forest/10"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                    {article.category}
                    <span className="ml-2 font-normal tracking-normal text-ink/35">
                      · {readingTime(article)} min read
                    </span>
                  </p>
                  <h3 className="mt-3 font-display text-2xl leading-snug text-forest-deep">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">
                    {article.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-forest">
                    Read article
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line/60 bg-sand/60 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-2xl leading-snug text-balance text-forest-deep sm:text-3xl lg:text-4xl">
              “He is the image of the invisible God, the firstborn of all
              creation.”
            </p>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Colossians 1:15
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow className="justify-center">Life in the fellowship</Eyebrow>
            <h2 className="mt-5 font-display text-3xl leading-tight text-balance text-forest-deep sm:text-4xl">
              Ordinary weeks, eternal things.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/65">
              Meals shared, Bibles opened, campuses reached, and friendships
              formed in the gospel.
            </p>
          </div>
          <PhotoGallery images={gallery.slice(0, 8)} className="mt-10" />
          <div className="mt-8 flex justify-center">
            <TextLink href="/gallery">View the full gallery</TextLink>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
