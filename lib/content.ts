import { cacheLife, cacheTag } from "next/cache";

import {
  articles as fallbackArticles,
  type Article,
} from "@/lib/articles";
import {
  statementOfFaith as fallbackStatementOfFaith,
  type FaithSection,
} from "@/lib/faith";
import {
  campuses as fallbackCampuses,
  events as fallbackEvents,
  gallery as fallbackGallery,
  leadershipTeams as fallbackLeadershipTeams,
  ministryExpressions as fallbackMinistryExpressions,
  nav as fallbackNav,
  site as fallbackSite,
  testimonials as fallbackTestimonials,
  thursdaySessions as fallbackThursdaySessions,
  type NavItem,
} from "@/lib/site";

export type Site = {
  name: string;
  shortName: string;
  tagline: string;
  mission: string;
  vision: string;
  email: string;
  phones: { label: string; href: string }[];
  joinPhone: { label: string; href: string };
  location: string;
  url: string;
  socials: Record<string, string>;
};

export type MinistryExpression = {
  number: string;
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
};

export type Campus = {
  slug: string;
  name: string;
  shortName: string;
  type: string;
  description: string;
  detail: string;
  image: string;
  imageAlt: string;
};

export type SiteEvent = {
  day: string;
  month: string;
  dateLabel: string;
  title: string;
  kind: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type ThursdaySession = {
  session: string;
  time: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  category: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type LeadershipTeam = {
  slug: string;
  title: string;
  summary: string;
  responsibilities: string[];
};

export type SiteContent = {
  site: Site;
  nav: NavItem[];
  ministryExpressions: MinistryExpression[];
  campuses: Campus[];
  events: SiteEvent[];
  thursdaySessions: ThursdaySession[];
  gallery: GalleryImage[];
  testimonials: Testimonial[];
  leadershipTeams: LeadershipTeam[];
  articles: Article[];
  statementOfFaith: FaithSection[];
};

export type { Article, FaithSection, NavItem };

const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000"
).replace(/\/$/, "");

export const fallbackContent: SiteContent = {
  site: fallbackSite,
  nav: fallbackNav,
  ministryExpressions: fallbackMinistryExpressions,
  campuses: fallbackCampuses,
  events: fallbackEvents,
  thursdaySessions: fallbackThursdaySessions,
  gallery: fallbackGallery,
  testimonials: fallbackTestimonials,
  leadershipTeams: fallbackLeadershipTeams,
  articles: fallbackArticles,
  statementOfFaith: fallbackStatementOfFaith,
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function text(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim() ? value : fallback;
}

function list<T>(value: unknown, fallback: T[]) {
  return Array.isArray(value) && value.length ? (value as T[]) : fallback;
}

function mergeSite(value: unknown): Site {
  if (!isRecord(value)) return fallbackSite;

  const phones = list(value.phones, fallbackSite.phones);
  const joinPhone = isRecord(value.joinPhone) &&
    typeof value.joinPhone.href === "string"
    ? (value.joinPhone as Site["joinPhone"])
    : fallbackSite.joinPhone;

  return {
    name: text(value.name, fallbackSite.name),
    shortName: text(value.shortName, fallbackSite.shortName),
    tagline: text(value.tagline, fallbackSite.tagline),
    mission: text(value.mission, fallbackSite.mission),
    vision: text(value.vision, fallbackSite.vision),
    email: text(value.email, fallbackSite.email),
    phones,
    joinPhone,
    location: text(value.location, fallbackSite.location),
    url: text(value.url, fallbackSite.url),
    socials: {
      ...fallbackSite.socials,
      ...(isRecord(value.socials)
        ? (value.socials as Record<string, string>)
        : {}),
    },
  };
}

function normalize(payload: unknown): SiteContent {
  if (!isRecord(payload)) return fallbackContent;

  return {
    site: mergeSite(payload.site),
    nav: list<NavItem>(payload.nav, fallbackNav),
    ministryExpressions: list<MinistryExpression>(
      payload.ministryExpressions,
      fallbackMinistryExpressions,
    ),
    campuses: list<Campus>(payload.campuses, fallbackCampuses),
    events: list<SiteEvent>(payload.events, fallbackEvents),
    thursdaySessions: list<ThursdaySession>(
      payload.thursdaySessions,
      fallbackThursdaySessions,
    ),
    gallery: list<GalleryImage>(payload.gallery, fallbackGallery),
    testimonials: list<Testimonial>(
      payload.testimonials,
      fallbackTestimonials,
    ),
    leadershipTeams: list<LeadershipTeam>(
      payload.leadershipTeams,
      fallbackLeadershipTeams,
    ),
    articles: list<Article>(payload.articles, fallbackArticles),
    statementOfFaith: list<FaithSection>(
      payload.statementOfFaith,
      fallbackStatementOfFaith,
    ),
  };
}

/**
 * Load every content collection the website renders from the Django API.
 *
 * The result is cached for a few minutes and tagged so it can be revalidated
 * on demand. If the backend is unreachable (for example while running the
 * frontend on its own), the checked-in content modules are used instead so the
 * site keeps rendering.
 */
export async function getSiteContent(): Promise<SiteContent> {
  "use cache";
  cacheLife("minutes");
  cacheTag("site-content");

  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/site-content/`, {
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Site content request failed (${response.status})`);
    }

    return normalize(await response.json());
  } catch (error) {
    console.warn(
      `[content] Using local content because ${API_BASE_URL}/api/v1/site-content/ is unavailable.`,
      error,
    );
    return fallbackContent;
  }
}

export function readingTime(article: Article) {
  const words = article.sections
    .flatMap((section) => section.paragraphs)
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(2, Math.ceil(words / 200));
}

export function getArticle(articles: Article[], slug: string) {
  return articles.find((article) => article.slug === slug);
}
