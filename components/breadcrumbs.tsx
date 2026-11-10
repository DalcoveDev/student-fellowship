"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { ChevronDown } from "@/components/icons";

const labels: Record<string, string> = {
  about: "About",
  leadership: "Leadership",
  "statement-of-faith": "Statement of faith",
  campuses: "Campuses",
  visit: "Plan your visit",
  "bible-study": "Bible study & training",
  "online-ministry": "Online ministry",
  charity: "Charity",
  events: "Events",
  articles: "Articles",
  gallery: "Gallery",
  join: "Join a Bible study",
  contact: "Contact",
};

function formatSegment(segment: string) {
  if (labels[segment]) {
    return labels[segment];
  }

  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function Breadcrumbs({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  const pathname = usePathname();
  const baseClass = "flex items-center gap-2 text-sm text-ink/60";

  let content = children;

  if (!content) {
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length === 0) {
      return null;
    }

    const items = segments.map((segment, index) => ({
      label: formatSegment(segment),
      href: `/${segments.slice(0, index + 1).join("/")}`,
    }));

    content = (
      <>
        <li>
          <Link href="/" className="transition-colors hover:text-forest">
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href} className="flex items-center gap-2">
              <ChevronDown
                aria-hidden
                className="h-3 w-3 -rotate-90 text-ink/25"
              />
              {isLast ? (
                <span aria-current="page" className="text-ink/70">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-forest"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </>
    );
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={className ? `${baseClass} ${className}` : baseClass}
    >
      <ol className="flex flex-wrap items-center gap-2">{content}</ol>
    </nav>
  );
}
