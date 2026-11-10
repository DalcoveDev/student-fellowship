"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Close } from "@/components/icons";

type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  category: string;
};

const aspectClasses = [
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-[5/4]",
];

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(images.map((image) => image.category)))],
    [images],
  );
  const [filter, setFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? images
        : images.filter((image) => image.category === filter),
    [images, filter],
  );

  const active = activeIndex !== null ? filtered[activeIndex] : null;

  const showPrev = () =>
    setActiveIndex((index) =>
      index === null ? index : (index - 1 + filtered.length) % filtered.length,
    );

  const showNext = () =>
    setActiveIndex((index) =>
      index === null ? index : (index + 1) % filtered.length,
    );

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((index) =>
          index === null
            ? index
            : (index - 1 + filtered.length) % filtered.length,
        );
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((index) =>
          index === null ? index : (index + 1) % filtered.length,
        );
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, filtered.length]);

  return (
    <>
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((category) => {
          const count =
            category === "All"
              ? images.length
              : images.filter((image) => image.category === category).length;
          const isActive = filter === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => {
                setFilter(category);
                setActiveIndex(null);
              }}
              aria-pressed={isActive}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                isActive
                  ? "border-forest bg-forest text-cream"
                  : "border-line bg-cream text-ink/55 hover:border-forest/30 hover:text-forest"
              }`}
            >
              {category}
              <span
                className={`text-[10px] ${
                  isActive ? "text-cream/60" : "text-ink/35"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 columns-2 gap-3 sm:gap-4 md:columns-3 lg:columns-4">
        {filtered.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Open image: ${image.title}`}
            className={`group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-sand sm:mb-4 ${
              aspectClasses[index % aspectClasses.length]
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-left opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-soft">
                  {image.category}
                </span>
                <span className="mt-1 block font-display text-lg leading-snug text-cream">
                  {image.title}
                </span>
              </span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cream/30 text-cream">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </span>
          </button>
        ))}
      </div>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} — gallery image`}
          onClick={() => setActiveIndex(null)}
          className="fixed inset-0 z-[100] flex flex-col bg-forest-deep/95 backdrop-blur"
        >
          <div className="flex items-center justify-between gap-4 px-5 py-4 text-cream sm:px-8">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-soft">
                {active.category}
              </p>
              <p className="mt-1 font-display text-xl">{active.title}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-cream/50">
                {(activeIndex ?? 0) + 1} / {filtered.length}
              </span>
              <button
                ref={closeRef}
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setActiveIndex(null);
                }}
                aria-label="Close gallery"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream hover:text-forest-deep"
              >
                <Close className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div
            onClick={(event) => event.stopPropagation()}
            className="relative flex flex-1 items-center justify-center px-4 pb-4 sm:px-16 sm:pb-8"
          >
            <button
              type="button"
              onClick={showPrev}
              aria-label="Previous image"
              className="absolute left-1 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 bg-forest-deep/60 text-cream transition-colors hover:border-gold hover:bg-gold hover:text-forest-deep sm:left-5"
            >
              <ArrowRight className="h-5 w-5 rotate-180" />
            </button>

            <div className="relative h-full max-h-[74vh] w-full max-w-5xl">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            <button
              type="button"
              onClick={showNext}
              aria-label="Next image"
              className="absolute right-1 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 bg-forest-deep/60 text-cream transition-colors hover:border-gold hover:bg-gold hover:text-forest-deep sm:right-5"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <p className="px-5 pb-4 text-center text-xs text-cream/45 sm:px-8 sm:pb-6">
            Use the arrow keys to move between photos, or press Escape to close.
          </p>
        </div>
      ) : null}
    </>
  );
}
