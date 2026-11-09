import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { Container, CtaBand, Eyebrow, PageHero } from "@/components/ui";
import { articles, readingTime } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Reflections on discipleship, doctrine, and life together as students following Jesus, from Christian Students Network.",
};

export default function ArticlesPage() {
  return (
    <>
      <PageHero
        eyebrow="From the fellowship"
        title="Think with us."
        intro="Reflections on discipleship, doctrine, and life together as students following Jesus. These are the things we are learning and teaching."
        meta={["Discipleship", "Doctrine", "Student life"]}
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="flex flex-col gap-5 border-b border-line pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-moss">
                Latest writing
              </p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/60">
                Long-form reflections for students who want to think carefully
                about the Christian life.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {Array.from(new Set(articles.map((article) => article.category))).map(
                (category) => (
                  <span
                    key={category}
                    className="rounded-full border border-line bg-cream px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/55"
                  >
                    {category}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="mt-10 space-y-6">
            {articles.map((article, index) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group grid overflow-hidden rounded-[1.5rem] border border-line bg-cream transition-all duration-300 hover:-translate-y-1 hover:border-forest/25 hover:shadow-xl hover:shadow-forest/10 lg:grid-cols-[0.8fr_1.2fr]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-sand lg:aspect-auto lg:min-h-[19rem]">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                      {article.category}
                      <span className="ml-2 font-normal tracking-normal text-ink/35">
                        · {readingTime(article)} min read
                      </span>
                    </p>
                    <span className="text-[11px] font-medium tracking-[0.18em] text-ink/30">
                      0{index + 1}
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-2xl leading-snug text-forest-deep sm:text-3xl">
                    {article.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/60">
                    {article.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-forest">
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
            <Eyebrow className="justify-center">A word to carry</Eyebrow>
            <p className="mt-5 font-display text-2xl leading-snug text-balance text-forest-deep sm:text-3xl lg:text-4xl">
              “He is the image of the invisible God, the firstborn of all
              creation.”
            </p>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Colossians 1:15
            </p>
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Keep thinking"
        title="Read, then come and talk with us."
        intro="Articles are a starting point. Join a Bible study and bring your questions into the room."
        primaryHref="/join"
        primaryLabel="Join a Bible study"
        secondaryHref="/contact"
        secondaryLabel="Talk with us"
      />
    </>
  );
}
