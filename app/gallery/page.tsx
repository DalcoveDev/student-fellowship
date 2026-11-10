import type { Metadata } from "next";
import {
  ButtonLink,
  Container,
  CtaBand,
  Eyebrow,
  PageHero,
  SectionHeading,
} from "@/components/ui";
import { GalleryGrid } from "@/components/gallery-grid";
import { gallery } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Christian Students Network fellowships, Bible studies, conferences, community outreach, and online ministry across Rwanda.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Life in the fellowship, in pictures."
        intro="Meals shared, Bibles opened, campuses reached, and friendships formed in the gospel. Browse a few moments from across the ministry."
        image="/images/gallery-02.webp"
        imageAlt="Students grouped together after a fellowship gathering"
        meta={["30 photos", "Fellowship", "Conferences & outreach"]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/visit">Plan your visit</ButtonLink>
          <ButtonLink href="/campuses" variant="outline" icon={false}>
            Find your campus
          </ButtonLink>
        </div>
      </PageHero>

      <section className="border-y border-line/60 bg-sand/60 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Photo gallery"
            title="Moments from across the ministry."
            intro="Filter by the life of the fellowship — Bible study, conferences, community outreach, or online ministry."
          />

          <div className="mt-10">
            <GalleryGrid images={gallery} />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow className="justify-center">A word to carry</Eyebrow>
            <p className="mt-5 font-display text-2xl leading-snug text-balance text-forest-deep sm:text-3xl lg:text-4xl">
              “And let us consider how to stir up one another to love and good
              works, not neglecting to meet together.”
            </p>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Hebrews 10:24–25
            </p>
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Be part of the next photo"
        title="Come and see what God is doing."
        intro="The best way to know the fellowship is to visit. Join a Bible study or plan your first gathering with us."
        primaryHref="/visit"
        primaryLabel="Plan your visit"
        secondaryHref="/campuses"
        secondaryLabel="Find your campus"
      />
    </>
  );
}
