import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Play, YouTube } from "@/components/icons";
import {
  ButtonLink,
  Container,
  CtaBand,
  Eyebrow,
  PageHero,
  SectionHeading,
  TextLink,
} from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Online ministry",
  description:
    "The Upside Down Show, weekly online sessions, long-form teaching, and Kinyarwanda gospel resources from Christian Students Network.",
};

const youtubeUrl = site.socials.youtube;

const formats = [
  {
    title: "The Upside Down Show",
    description:
      "Our flagship online conversation about the Christian life, student culture, and the claims of Jesus Christ.",
    tag: "Show",
  },
  {
    title: "Weekly online sessions",
    description:
      "Live teaching and discussion for students who cannot gather in person, or who want to go deeper during the week.",
    tag: "Live",
  },
  {
    title: "Long-form teaching",
    description:
      "Careful, extended Bible teaching on YouTube for students who want to study a book or theme in more depth.",
    tag: "YouTube",
  },
  {
    title: "Short video content",
    description:
      "Short, shareable videos that answer common questions and put the gospel in front of a wider audience.",
    tag: "Shorts",
  },
  {
    title: "Kinyarwanda resources",
    description:
      "Translation and distribution of gospel materials in Kinyarwanda so that the Word is accessible to every student.",
    tag: "Translation",
  },
  {
    title: "Digital discipleship",
    description:
      "Online conversations, prayer, and follow-up that connect students to a local fellowship and to one another.",
    tag: "Community",
  },
];

export default function OnlineMinistryPage() {
  return (
    <>
      <PageHero
        eyebrow="Online ministry"
        title="The gospel, wherever students are."
        intro="We expand gospel reach through weekly online sessions, long-form teaching on YouTube, short video content, and the translation and distribution of gospel materials in Kinyarwanda."
        image="/images/online-ministry.webp"
        imageAlt="A large gathering of students at an online ministry recording"
        meta={["The Upside Down Show", "YouTube teaching", "Kinyarwanda resources"]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-gold bg-gold px-6 py-3 text-sm font-semibold tracking-wide text-forest-deep transition-colors hover:bg-gold-soft"
          >
            <YouTube className="h-4 w-4" />
            Watch The Upside Down Show
          </a>
          <ButtonLink href="/join" variant="outline" icon={false}>
            Join a Bible study
          </ButtonLink>
        </div>
      </PageHero>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <Eyebrow>The Upside Down Show</Eyebrow>
              <h2 className="mt-5 font-display text-3xl leading-tight text-balance text-forest-deep sm:text-4xl lg:text-[2.85rem]">
                Conversations that turn student life right-side up.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink/70">
                The Upside Down Show is our online space for honest
                conversations about faith, campus life, and the claims of Jesus
                Christ. We want students who are curious, sceptical, or
                searching to encounter the gospel clearly.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink/70">
                New episodes and teaching sessions are released on YouTube,
                along with short videos and resources you can share with a
                friend.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                <a
                  href={youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-forest transition-colors hover:text-gold"
                >
                  Visit our YouTube channel
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <TextLink href="/articles">Read our articles</TextLink>
              </div>
            </div>

            <a
              href={youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-forest-deep"
            >
              <Image
                src="/images/online-gathering.webp"
                alt="Students worshipping together during an online ministry gathering"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-forest-deep/20" />
              <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cream/40 bg-cream/10 text-cream backdrop-blur transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-forest-deep">
                <Play className="h-7 w-7" />
              </span>
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-soft">
                  Watch online
                </p>
                <p className="mt-1 font-display text-2xl text-cream">
                  The Upside Down Show
                </p>
              </div>
            </a>
          </div>
        </Container>
      </section>

      <section className="border-y border-line/60 bg-sand/60 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What we make"
            title="Resources for the whole student."
            intro="Teaching, conversation, and practical resources designed to help students know Christ and make Him known."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {formats.map((format, index) => (
              <div
                key={format.title}
                className="flex flex-col rounded-2xl border border-line bg-cream p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-forest/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-forest">
                    {format.tag}
                  </span>
                  <span className="text-[11px] font-medium tracking-[0.18em] text-ink/30">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl text-forest-deep">
                  {format.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  {format.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-sand">
              <Image
                src="/images/online-community.webp"
                alt="Students connecting with one another through the online ministry"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <Eyebrow>Beyond the screen</Eyebrow>
              <h2 className="mt-5 font-display text-3xl leading-tight text-balance text-forest-deep sm:text-4xl">
                Online is a doorway, not a destination.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink/70">
                Digital ministry is meant to move students toward real
                fellowship. If you have been watching online, we would love to
                connect you with a campus fellowship or a Thursday session where
                you can grow in person.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/join">Find a fellowship</ButtonLink>
                <ButtonLink
                  href={`mailto:${site.email}`}
                  variant="outline"
                  icon={false}
                >
                  Talk to us
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Stay connected"
        title="The Word is near you."
        intro="Watch, listen, and then join us in person. There is a fellowship waiting for you."
        primaryHref="/join"
        primaryLabel="Join a Bible study"
        secondaryHref="/contact"
        secondaryLabel="Talk with us"
      />
    </>
  );
}
