import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { ButtonLink, Container, CtaBand, Eyebrow } from "@/components/ui";
import { articles, getArticle, readingTime } from "@/lib/articles";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export const instant = false;

export async function generateMetadata(
  props: PageProps<"/articles/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticle(slug);

  if (!article) {
    return { title: "Article not found" };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage(props: PageProps<"/articles/[slug]">) {
  const { slug } = await props.params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const index = articles.findIndex((item) => item.slug === article.slug);
  const next = articles[(index + 1) % articles.length];

  return (
    <>
      <article>
        <header className="border-b border-line/60 bg-cream">
          <Container className="py-14 sm:py-20">
            <Breadcrumbs className="mb-6" />
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-moss transition-colors hover:text-gold"
            >
              <ArrowRight className="h-3.5 w-3.5 rotate-180" />
              All articles
            </Link>
            <div className="mt-7 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                  {article.category}
                  <span className="ml-2 font-normal tracking-normal text-ink/35">
                    · {readingTime(article)} min read
                  </span>
                </p>
                <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.06] text-balance text-forest-deep sm:text-5xl lg:text-6xl">
                  {article.title}
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-pretty text-ink/65 sm:text-lg">
                  {article.excerpt}
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-sand">
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Container>
        </header>

        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-16">
            <aside className="lg:sticky lg:top-32 lg:self-start">
              <div className="rounded-2xl border border-line bg-sand/60 p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-moss">
                  In this article
                </p>
                <ul className="mt-4 space-y-2.5 text-sm text-ink/60">
                  {article.sections
                    .filter((section) => section.heading)
                    .map((section) => (
                      <li key={section.heading} className="flex gap-2.5">
                        <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-gold" />
                        {section.heading}
                      </li>
                    ))}
                </ul>
              </div>
              <div className="mt-4 rounded-2xl border border-line bg-cream p-5">
                <p className="text-sm font-semibold text-forest-deep">
                  Keep reading
                </p>
                <Link
                  href={`/articles/${next.slug}`}
                  className="group mt-2 inline-flex items-start gap-2 text-sm leading-snug text-ink/60 transition-colors hover:text-forest"
                >
                  {next.title}
                  <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </aside>

            <div className="max-w-3xl">
              <div className="space-y-9">
                {article.sections.map((section) => (
                  <section key={section.heading ?? section.paragraphs[0].slice(0, 40)}>
                    {section.heading ? (
                      <h2 className="font-display text-2xl text-forest-deep sm:text-3xl">
                        {section.heading}
                      </h2>
                    ) : null}
                    <div className="mt-4 space-y-4 text-base leading-relaxed text-ink/70">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              {article.scripture ? (
                <blockquote className="mt-12 rounded-[1.5rem] border border-line bg-sand/60 p-7 sm:p-9">
                  <p className="font-display text-2xl leading-snug text-balance text-forest-deep sm:text-3xl">
                    “{article.scripture.text}”
                  </p>
                  <footer className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                    {article.scripture.reference}
                  </footer>
                </blockquote>
              ) : null}

              <div className="mt-12 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-moss">
                    Written by the fellowship
                  </p>
                  <p className="mt-1 text-sm text-ink/55">
                    Christian Students Network · Rwanda
                  </p>
                </div>
                <ButtonLink href="/join">Join a Bible study</ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </article>

      <section className="border-t border-line/60 bg-sand/60 py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>More from the fellowship</Eyebrow>
              <h2 className="mt-5 font-display text-3xl leading-tight text-forest-deep sm:text-4xl">
                Keep thinking with us.
              </h2>
            </div>
            <ButtonLink href="/articles" variant="outline" icon={false}>
              View all articles
            </ButtonLink>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
