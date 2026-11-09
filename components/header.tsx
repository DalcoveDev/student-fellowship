"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Close, Mail, Menu, Phone } from "@/components/icons";
import { ButtonLink, Container } from "@/components/ui";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const closeMenus = () => {
    setMobileOpen(false);
    setOpenMenu(null);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-forest-deep text-cream/75">
        <Container className="flex min-h-9 items-center justify-between gap-4 py-2 text-[11px] tracking-wide">
          <p className="truncate">{site.tagline}</p>
          <div className="hidden items-center gap-5 sm:flex">
            <a
              href={site.phones[0].href}
              className="flex items-center gap-1.5 transition-colors hover:text-gold-soft"
            >
              <Phone className="h-3.5 w-3.5" />
              {site.phones[0].label}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-1.5 transition-colors hover:text-gold-soft"
            >
              <Mail className="h-3.5 w-3.5" />
              {site.email}
            </a>
          </div>
        </Container>
      </div>

      <div className="border-b border-line/70 bg-cream/95 backdrop-blur">
        <Container className="flex h-20 items-center justify-between gap-6">
          <Link
            href="/"
            aria-label="Christian Students Network home"
            onClick={closeMenus}
            className="shrink-0"
          >
            <Image
              src="/images/logo-dark.png"
              alt="Christian Students Network"
              width={760}
              height={521}
              priority
              className="h-11 w-auto sm:h-12"
            />
          </Link>

          <nav
            aria-label="Main navigation"
            onClick={closeMenus}
            className="hidden items-center gap-0.5 lg:flex"
          >
            {nav.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <Link
                    href={item.href}
                    onFocus={() => setOpenMenu(item.label)}
                    className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors ${
                      isActive(item.href)
                        ? "bg-sand text-forest"
                        : "text-ink/75 hover:bg-sand/70 hover:text-forest"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform ${
                        openMenu === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </Link>
                  {openMenu === item.label ? (
                    <div className="absolute left-0 top-full w-80 pt-2">
                      <div className="rounded-2xl border border-line bg-cream p-2 shadow-xl shadow-forest/10">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="group block rounded-xl px-4 py-3 transition-colors hover:bg-sand"
                          >
                            <span className="flex items-center justify-between gap-3 text-sm font-semibold text-forest-deep">
                              {child.label}
                            </span>
                            {child.description ? (
                              <span className="mt-1 block text-xs leading-relaxed text-ink/55">
                                {child.description}
                              </span>
                            ) : null}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-sand text-forest"
                      : "text-ink/75 hover:bg-sand/70 hover:text-forest"
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden lg:block">
            <ButtonLink
              href="/join"
              icon={false}
              className="px-5 py-2.5 text-[13px]"
            >
              Join a Bible study
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-forest/20 text-forest lg:hidden"
          >
            {mobileOpen ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </Container>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-navigation"
          className="max-h-[calc(100vh-7rem)] overflow-y-auto border-b border-line bg-cream shadow-xl shadow-forest/10 lg:hidden"
        >
          <Container className="py-5">
            <nav
              aria-label="Mobile navigation"
              onClick={closeMenus}
              className="flex flex-col"
            >
              {nav.map((item) => (
                <div key={item.label} className="border-b border-line/70 py-2 last:border-0">
                  <Link
                    href={item.href}
                    className={`flex items-center justify-between rounded-lg px-2 py-2.5 text-base font-semibold ${
                      isActive(item.href) ? "text-gold" : "text-forest-deep"
                    }`}
                  >
                    {item.label}
                    {item.children ? (
                      <ChevronDown className="h-4 w-4 -rotate-90 opacity-50" />
                    ) : null}
                  </Link>
                  {item.children ? (
                    <div className="mb-2 ml-2 border-l border-line pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 text-sm text-ink/65"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </nav>
            <div className="mt-5 flex flex-col gap-3" onClick={closeMenus}>
              <ButtonLink href="/join" className="w-full">
                Join a Bible study
              </ButtonLink>
              <a
                href={site.phones[0].href}
                className="flex items-center justify-center gap-2 rounded-full border border-forest/20 py-3 text-sm font-semibold text-forest"
              >
                <Phone className="h-4 w-4" />
                {site.phones[0].label}
              </a>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
