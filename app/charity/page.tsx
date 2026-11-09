import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Users } from "@/components/icons";
import {
  ButtonLink,
  Container,
  CtaBand,
  Eyebrow,
  PageHero,
  PhotoGallery,
  SectionHeading,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Charity",
  description:
    "Christian Students Network serves students and surrounding communities through practical acts of love, generosity, and shared life.",
};

const gallery = [
  {
    src: "/images/charity-community.webp",
    alt: "Students serving the community together",
  },
  {
    src: "/images/charity-harvest.webp",
    alt: "Students gathered for a community outreach",
  },
  {
    src: "/images/charity-outreach.webp",
    alt: "A community outreach gathering",
  },
  {
    src: "/images/charity-speaker.webp",
    alt: "A speaker addressing students at a charity event",
  },
  {
    src: "/images/charity-teaching.webp",
    alt: "Students listening during a teaching session",
  },
  {
    src: "/images/charity-team.webp",
    alt: "The charity team standing together after an outreach",
  },
];

const commitments = [
  {
    title: "Love in action",
    description:
      "The gospel moves us toward our neighbours. We want our faith to be visible in generosity, hospitality, and practical care.",
    icon: Heart,
  },
  {
    title: "Shared life",
    description:
      "We share meals, meet needs, and stand with students and families in the ordinary and difficult moments of life.",
    icon: Users,
  },
];

export default function CharityPage() {
  return (
    <>
      <PageHero
        eyebrow="Charity"
        title="The gospel moves us toward our neighbours."
        intro="We serve students and surrounding communities through practical acts of love — sharing meals, meeting needs, and standing with families in the name of Christ."
        image="/images/charity-community.webp"
        imageAlt="Students serving the community together"
        meta={["Practical service", "Community outreach", "Serve with us"]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact">Get involved</ButtonLink>
          <ButtonLink href="/about" variant="outline" icon={false}>
            About our ministry
          </ButtonLink>
        </div>
      </PageHero>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <Eyebrow>Why charity?</Eyebrow>
              <h2 className="mt-5 font-display text-3xl leading-tight text-balance text-forest-deep sm:text-4xl lg:text-[2.85rem]">
                Faith that is visible.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink/70">
                We do not want to be a fellowship that only talks about love.
                The Scriptures call us to care for one another and for our
                neighbours, so we look for concrete ways to serve.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink/70">
                That can look like a shared meal, a visit, a practical need met,
                or a community gathered around the gospel. Whatever the shape,
                the aim is the same: to show the love of Christ and to point
                people to Him.
              </p>

              <div className="mt-8 space-y-4">
                {commitments.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex gap-4 rounded-2xl border border-line bg-cream p-5"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest/5 text-forest">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-display text-lg text-forest-deep">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-ink/60">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-sand">
                <Image
                  src="/images/charity-harvest.webp"
                  alt="Students gathered for a community outreach"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-sand">
                <Image
                  src="/images/charity-outreach.webp"
                  alt="A community outreach gathering"
                  fill
                  sizes="(min-width: 1024px) 22vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-sand">
                <Image
                  src="/images/charity-team.webp"
                  alt="The charity team standing together after an outreach"
                  fill
                  sizes="(min-width: 1024px) 22vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-line/60 bg-sand/60 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Serving together"
            title="Ordinary acts, eternal significance."
            intro="A cup of water given in the name of Christ is never wasted. We serve because He first served us."
          />
          <PhotoGallery images={gallery} className="mt-10" />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow className="justify-center">A word from Scripture</Eyebrow>
            <p className="mt-5 font-display text-2xl leading-snug text-balance text-forest-deep sm:text-3xl lg:text-4xl">
              “And let us consider how to stir up one another to love and good
              works.”
            </p>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Hebrews 10:24
            </p>
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Serve with us"
        title="There is work for every pair of hands."
        intro="If you would like to serve, give, or learn more about our charity work, we would love to hear from you."
        primaryHref="/contact"
        primaryLabel="Get involved"
        secondaryHref="/about"
        secondaryLabel="About the ministry"
      />
    </>
  );
}
