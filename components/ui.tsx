import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ArrowRight, ArrowUpRight } from "@/components/icons";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  light = false,
  className = "",
}: {
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] ${
        light ? "text-gold-soft" : "text-moss"
      } ${className}`}
    >
      <span
        aria-hidden
        className={`h-px w-8 ${light ? "bg-gold-soft/70" : "bg-gold"}`}
      />
      {children}
    </p>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  icon = true,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "light" | "ghost";
  className?: string;
  icon?: boolean;
}) {
  const styles = {
    primary:
      "bg-gold text-forest-deep hover:bg-gold-soft border border-gold hover:border-gold-soft",
    outline:
      "border border-forest/25 text-forest hover:border-forest hover:bg-forest hover:text-cream",
    light:
      "bg-cream text-forest-deep hover:bg-gold-soft border border-cream hover:border-gold-soft",
    ghost:
      "border border-cream/35 text-cream hover:border-cream hover:bg-cream hover:text-forest-deep",
  }[variant];

  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors ${styles} ${className}`}
    >
      {children}
      {icon ? (
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      ) : null}
    </Link>
  );
}

export function TextLink({
  href,
  children,
  light = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
        light ? "text-gold-soft hover:text-cream" : "text-forest hover:text-gold"
      } ${className}`}
    >
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow ? (
        <Eyebrow className={align === "center" ? "justify-center" : ""}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2 className="mt-5 font-display text-3xl leading-tight text-balance text-forest-deep sm:text-4xl lg:text-[2.85rem]">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-base leading-relaxed text-pretty text-ink/70 sm:text-lg">
          {intro}
        </p>
      ) : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  meta,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  imageAlt?: string;
  meta?: string[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div
        aria-hidden
        className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-gold/25"
      />
      <Container className="relative py-14 sm:py-20 lg:py-24">
        <div
          className={`grid items-center gap-10 lg:gap-16 ${
            image ? "lg:grid-cols-[1.05fr_0.95fr]" : "max-w-4xl"
          }`}
        >
          <div>
            <Breadcrumbs className="mb-6" />
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-6 font-display text-4xl leading-[1.05] text-balance text-forest-deep sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-pretty text-ink/70 sm:text-lg">
              {intro}
            </p>
            {meta?.length ? (
              <ul className="mt-7 flex flex-wrap gap-2">
                {meta.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-white/50 px-3.5 py-1.5 text-[11px] font-medium text-ink/60"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
            {children ? <div className="mt-8">{children}</div> : null}
          </div>
          {image ? (
            <div className="relative">
              <div
                aria-hidden
                className="absolute -bottom-4 -left-4 h-full w-full rounded-[1.75rem] border border-gold/40"
              />
              <div className="relative aspect-[5/4] overflow-hidden rounded-[1.5rem] bg-sand">
                <Image
                  src={image}
                  alt={imageAlt ?? ""}
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

export function PhotoGallery({
  images,
  className = "",
}: {
  images: { src: string; alt: string }[];
  className?: string;
}) {
  return (
    <div
      className={`grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 ${className}`}
    >
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`group relative overflow-hidden rounded-2xl bg-sand ${
            index % 5 === 0 ? "aspect-[4/5]" : "aspect-square"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}

export function CtaBand({
  eyebrow = "Get involved",
  title = "There is a seat for you at the table.",
  intro = "Whether you are exploring the Christian faith, looking for a Bible study, or longing to grow deeper, you are welcome here.",
  primaryHref = "/join",
  primaryLabel = "Join a Bible study",
  secondaryHref = "/contact",
  secondaryLabel = "Talk to us",
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-forest-deep text-cream">
      <div
        aria-hidden
        className="absolute -right-32 -top-40 h-[28rem] w-[28rem] rounded-full border border-gold/25"
      />
      <div
        aria-hidden
        className="absolute -bottom-48 left-1/3 h-[26rem] w-[26rem] rounded-full border border-cream/10"
      />
      <Container className="relative py-16 sm:py-20">
        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Eyebrow light>{eyebrow}</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-display text-3xl leading-tight text-balance sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/70">
              {intro}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
            <ButtonLink href={secondaryHref} variant="ghost" icon={false}>
              {secondaryLabel}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
