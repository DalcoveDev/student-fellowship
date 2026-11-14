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
  events: Event[];
  thursdaySessions: ThursdaySession[];
  gallery: GalleryImage[];
  testimonials: Testimonial[];
  leadershipTeams: LeadershipTeam[];
  articles: Article[];
  statementOfFaith: FaithSection[];
};

export type Event = SiteEvent;

export type { Article, FaithSection, NavItem };

const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000"
).replace(/\/$/, "");

/**
 * When this project ships its own local content store, prefer it. Otherwise
 * fall through to the external backend and then to the checked-in static
 * content modules.
 */
async function loadBackend(): Promise<SiteContent | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/site-content/`, {
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      return null;
    }

    const payload = await response.json();
    if (!payload || typeof payload !== "object") {
      return null;
    }

    const normalized = normalizeBackendPayload(payload as Record<string, unknown>);
    if (normalized.site?.name) {
      return normalized;
    }

    return null;
  } catch {
    return null;
  }
}

async function loadLocalStore(): Promise<SiteContent | null> {
  try {
    const response = await fetch("/api/content", {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    const payload = await response.json();
    if (!payload || typeof payload !== "object") {
      return null;
    }

    const normalized = normalizeBackendPayload(payload as Record<string, unknown>);
    if (normalized.site?.name) {
      return normalized;
    }

    return null;
  } catch {
    return null;
  }
}

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

function normalizeBackendPayload(payload: unknown): SiteContent {
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
 * The backend is the default source. If it is unreachable, the frontend falls
 * back to the project-local admin content store, and only then to the
 * checked-in static content modules so the site keeps rendering.
 */
export async function getSiteContent(): Promise<SiteContent> {
  "use cache";
  cacheLife("minutes");
  cacheTag("site-content");

  const backend = await loadBackend();
  if (backend) {
    return backend;
  }

  const local = await loadLocalStore();
  if (local) {
    return local;
  }

  console.warn(
    `[content] Using local content because ${API_BASE_URL}/api/v1/site-content/ is unavailable.`,
  );
  return fallbackContent;
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

/**
 * Normalize helpers kept internal so the public pages always get the same
 * shape whether the data came from the backend, the local store, or the
 * static fallback modules.
 */
type NormalizeBackendPayload = typeof normalizeBackendPayload;
const _normalizeBackendPayload: NormalizeBackendPayload = normalizeBackendPayload;
void _normalizeBackendPayload;
