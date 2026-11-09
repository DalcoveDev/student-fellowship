import type { Metadata } from "next";
import { BookOpen } from "@/components/icons";
import { ButtonLink, Container, CtaBand, Eyebrow, PageHero } from "@/components/ui";
import { statementOfFaith } from "@/lib/faith";

export const metadata: Metadata = {
  title: "Statement of faith",
  description:
    "What Christian Students Network believes about the Bible, God, the Holy Spirit, salvation, the Church, and the return of Christ.",
};

export default function StatementOfFaithPage() {
  return (
    <>
      <PageHero
        eyebrow="What we believe"
        title="A statement of faith drawn from the Scriptures."
        intro="We are a fellowship shaped by the Bible. These are the doctrines we confess together, from the authority of Scripture to the hope of eternity."
        meta={["Scripture first", "Core doctrines", "Confessed together"]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/join">Join a Bible study</ButtonLink>
          <ButtonLink href="/about" variant="outline" icon={false}>
            Back to about us
          </ButtonLink>
        </div>
      </PageHero>

      <section className="border-y border-line/60 bg-sand/60 py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-16">
            <aside className="lg:sticky lg:top-32 lg:self-start">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-moss">
                On this page
              </p>
              <nav aria-label="Statement of faith sections" className="mt-4">
                <ol className="space-y-1 border-l border-line">
                  {statementOfFaith.map((section, index) => (
                    <li key={section.slug}>
                      <a
                        href={`#${section.slug}`}
                        className="group flex items-baseline gap-3 border-l border-transparent py-2 pl-4 text-sm text-ink/60 transition-colors hover:border-gold hover:text-forest"
                      >
                        <span className="text-[10px] font-semibold tracking-[0.16em] text-gold">
                          0{index + 1}
                        </span>
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
              <div className="mt-8 rounded-2xl border border-line bg-cream p-5">
                <BookOpen className="h-5 w-5 text-forest" />
                <p className="mt-3 text-sm font-semibold text-forest-deep">
                  Search the Scriptures
                </p>
                <p className="mt-1 text-xs leading-relaxed text-ink/55">
                  Every doctrine here is anchored in the Bible. Read the
                  references for yourself and test what we teach.
                </p>
              </div>
            </aside>

            <div className="space-y-5">
              {statementOfFaith.map((section, index) => (
                <article
                  key={section.slug}
                  id={section.slug}
                  className="scroll-mt-32 rounded-[1.5rem] border border-line bg-cream p-7 sm:p-9"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h2 className="font-display text-2xl text-forest-deep sm:text-3xl">
                      {section.title}
                    </h2>
                    <span className="text-[11px] font-semibold tracking-[0.18em] text-gold">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink/70 sm:text-base">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-6 rounded-xl border border-line/80 bg-sand/60 px-4 py-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-moss">
                      Scripture references
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink/60">
                      {section.scripture}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow className="justify-center">A final word</Eyebrow>
            <p className="mt-5 font-display text-2xl leading-snug text-balance text-forest-deep sm:text-3xl lg:text-4xl">
              “All Scripture is breathed out by God and profitable for teaching,
              for reproof, for correction, and for training in righteousness.”
            </p>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              2 Timothy 3:16
            </p>
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Study with us"
        title="Doctrine is meant to be lived."
        intro="The best way to know what we believe is to open the Bible with us. Join a study and bring your questions."
        primaryHref="/join"
        primaryLabel="Join a Bible study"
        secondaryHref="/contact"
        secondaryLabel="Ask a question"
      />
    </>
  );
}
