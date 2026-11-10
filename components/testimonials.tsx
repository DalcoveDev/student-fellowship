import { Container, Eyebrow, TextLink } from "@/components/ui";
import { testimonials } from "@/lib/site";

export function Testimonials({
  className = "",
}: {
  className?: string;
}) {
  return (
    <section className={`border-y border-line/60 bg-sand/60 py-16 sm:py-24 ${className}`}>
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>From the fellowship</Eyebrow>
            <h2 className="mt-5 font-display text-3xl leading-tight text-balance text-forest-deep sm:text-4xl lg:text-[2.85rem]">
              Students on what God is doing.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/65">
              The best way to understand a fellowship is to hear from the
              students who gather. These are a few of their reflections.
            </p>
          </div>
          <div className="shrink-0">
            <TextLink href="/about">More about the fellowship</TextLink>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <figure
              key={testimonial.name}
              className="flex flex-col justify-between rounded-2xl border border-line bg-cream p-7 sm:p-8"
            >
              <div>
                <span
                  aria-hidden
                  className="font-display text-5xl leading-none text-gold/70"
                >
                  “
                </span>
                <blockquote className="mt-1 text-base leading-relaxed text-ink/70 sm:text-lg">
                  {testimonial.quote}
                </blockquote>
              </div>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line/70 pt-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest/5 text-[11px] font-semibold tracking-[0.08em] text-forest">
                  0{index + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-forest-deep">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-ink/50">{testimonial.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
