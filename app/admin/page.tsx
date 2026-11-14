"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState, type ReactElement } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Calendar,
  Heart,
  Lock,
  MapPin,
  Plus,
  Save,
  Trash2,
  Users,
} from "@/components/icons";
import { ButtonLink, Container } from "@/components/ui";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";
const SESSION_KEY = "csn_admin_session";

type Tab =
  | "site"
  | "nav"
  | "ministry"
  | "campuses"
  | "events"
  | "gallery"
  | "testimonials"
  | "leadership"
  | "articles"
  | "faith";

type TabMeta = {
  key: Tab;
  label: string;
  description: string;
  icon: (props: { className?: string }) => ReactElement;
};

const TABS: TabMeta[] = [
  { key: "site", label: "Site info", description: "Name, mission, vision, contact details and social links.", icon: Users },
  { key: "nav", label: "Navigation", description: "Menu items and dropdown links shown in the header.", icon: ArrowUpRight },
  { key: "ministry", label: "Ministries", description: "The ministry expressions shown across the site.", icon: BookOpen },
  { key: "campuses", label: "Campuses", description: "University and high school fellowships.", icon: MapPin },
  { key: "events", label: "Events", description: "Conferences and weekly gatherings.", icon: Calendar },
  { key: "gallery", label: "Gallery", description: "Images and their categories.", icon: Plus },
  { key: "testimonials", label: "Testimonials", description: "Student and viewer stories.", icon: Users },
  { key: "leadership", label: "Leadership", description: "Teams and their responsibilities.", icon: Users },
  { key: "articles", label: "Articles", description: "Teaching articles and posts.", icon: BookOpen },
  { key: "faith", label: "Statement of faith", description: "Core doctrines and scripture references.", icon: Heart },
];

type SiteContent = Record<string, unknown>;

const EMPTY_CONTENT: SiteContent = {
  site: {
    name: "",
    shortName: "",
    tagline: "",
    email: "",
    location: "",
    url: "",
    mission: "",
    vision: "",
    phones: [],
    joinPhone: { label: "", href: "" },
    socials: {},
  },
  nav: [],
  ministryExpressions: [],
  campuses: [],
  events: [],
  gallery: [],
  testimonials: [],
  leadershipTeams: [],
  articles: [],
  statementOfFaith: [],
};

const CONTENT_KEY_BY_TAB: Record<Tab, string | null> = {
  site: "site",
  nav: "nav",
  ministry: "ministryExpressions",
  campuses: "campuses",
  events: "events",
  gallery: "gallery",
  testimonials: "testimonials",
  leadership: "leadershipTeams",
  articles: "articles",
  faith: "statementOfFaith",
};

type AdminUser = {
  id?: number;
  username: string;
  email?: string;
  role: string;
};

type Session = {
  access: string;
  refresh: string;
  user: AdminUser;
};

type TokenPair = { access: string; refresh: string };

async function requestToken(username: string, password: string): Promise<TokenPair> {
  let response: Response;
  try {
    response = await fetch(`${API_URL}/api/v1/auth/token/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
  } catch {
    throw new Error("Cannot reach the server. Please check your connection and try again.");
  }

  if (!response.ok) {
    const data = (await response.json().catch(() => null)) as { detail?: string } | null;
    if (response.status === 401) {
      throw new Error("Incorrect username or password.");
    }
    if (response.status === 429) {
      throw new Error("Too many sign-in attempts. Please wait a moment and try again.");
    }
    throw new Error(data?.detail ?? "Sign in failed. Please try again.");
  }

  const data = (await response.json().catch(() => null)) as TokenPair | null;
  if (!data?.access) {
    throw new Error("The server returned an unexpected response.");
  }
  return data;
}

async function fetchCurrentUser(access: string): Promise<AdminUser | null> {
  try {
    const response = await fetch(`${API_URL}/api/v1/auth/me/`, {
      headers: { Authorization: `Bearer ${access}` },
    });
    if (!response.ok) return null;
    return (await response.json()) as AdminUser;
  } catch {
    return null;
  }
}

function AdminLogin({
  onSignIn,
  notice,
}: {
  onSignIn: (username: string, password: string) => Promise<void>;
  notice?: string;
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(notice ?? "");
  const [pending, setPending] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4 py-16">
      <div className="w-full max-w-md rounded-2xl border border-line bg-white p-8 shadow-sm">
        <div className="mb-8 flex flex-col items-center text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-cream">
            <Lock className="h-5 w-5" />
          </span>
          <h1 className="mt-4 font-display text-2xl text-forest-deep">Admin portal</h1>
          <p className="mt-2 text-sm text-ink/60">
            Sign in to manage the Christian Students Network website.
          </p>
        </div>

        <form
          className="flex flex-col gap-5"
          onSubmit={async (event) => {
            event.preventDefault();
            if (!username.trim() || !password) {
              setError("Enter your username and password.");
              return;
            }
            setPending(true);
            setError("");
            try {
              await onSignIn(username.trim(), password);
            } catch (caught) {
              setError(caught instanceof Error ? caught.message : "Sign in failed. Please try again.");
              setPending(false);
            }
          }}
        >
          <label className="flex flex-col gap-1.5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-moss">
              Username
            </span>
            <input
              type="text"
              name="username"
              autoComplete="username"
              autoCapitalize="none"
              spellCheck={false}
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="your-username"
              className="h-11 w-full rounded-xl border border-line bg-cream px-3 text-sm text-ink focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-moss">
              Password
            </span>
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="••••••••"
              className="h-11 w-full rounded-xl border border-line bg-cream px-3 text-sm text-ink focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
            />
          </label>

          {error ? (
            <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={pending}
            className="inline-flex h-11 items-center justify-center rounded-xl bg-forest px-5 text-sm font-semibold text-cream transition-colors hover:bg-forest-deep disabled:opacity-60"
          >
            {pending ? "Signing in…" : "Sign in"}
          </button>

          <ButtonLink href="/" variant="outline" icon={false} className="justify-center text-sm">
            Back to the website
          </ButtonLink>
        </form>
      </div>
    </div>
  );
}

function Sidebar({
  active,
  onSelect,
  user,
  onLogout,
  open,
  onClose,
}: {
  active: Tab;
  onSelect: (tab: Tab) => void;
  user: AdminUser;
  onLogout: () => void;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {open ? (
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="fixed inset-0 z-30 bg-forest-deep/40 lg:hidden"
        />
      ) : null}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-line bg-forest text-cream transition-transform lg:static lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="border-b border-cream/10 px-5 py-5">
          <Link
            href="/"
            aria-label="Christian Students Network home"
            onClick={onClose}
            className="inline-flex rounded-2xl bg-cream px-4 py-3"
          >
            <Image
              src="/images/logo-dark.png"
              alt="Christian Students Network"
              width={760}
              height={521}
              className="h-14 w-auto"
            />
          </Link>
          <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-cream/50">
            Content portal
          </p>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="flex flex-col gap-1">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = active === tab.key;
              return (
                <li key={tab.key}>
                  <button
                    type="button"
                    onClick={() => {
                      onSelect(tab.key);
                      onClose();
                    }}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                      isActive
                        ? "bg-cream text-forest-deep font-semibold"
                        : "text-cream/70 hover:bg-cream/10 hover:text-cream"
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    {tab.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-cream/10 px-4 py-4">
          <p className="truncate text-xs text-cream/60">Signed in as</p>
          <p className="truncate text-sm font-medium text-cream">{user.username}</p>
          {user.email ? <p className="truncate text-xs text-cream/50">{user.email}</p> : null}
          <button
            type="button"
            onClick={onLogout}
            className="mt-3 w-full rounded-xl border border-cream/20 px-3 py-2 text-sm text-cream/80 transition-colors hover:border-gold/50 hover:text-cream"
          >
            Sign out
          </button>
        </div>
      </aside>
    </>
  );
}

export default function AdminPage() {
  const router = useRouter();
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  const [authNotice, setAuthNotice] = useState("");
  const [active, setActive] = useState<Tab>("site");
  const [content, setContent] = useState<SiteContent>(EMPTY_CONTENT);
  const [status, setStatus] = useState("");
  const [saving, setSaving] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Restore and re-validate a stored session against Django.
  useEffect(() => {
    const raw = window.localStorage.getItem(SESSION_KEY);
    if (!raw) {
      setReady(true);
      return;
    }

    let stored: Session | null = null;
    try {
      stored = JSON.parse(raw) as Session;
    } catch {
      window.localStorage.removeItem(SESSION_KEY);
      setReady(true);
      return;
    }

    if (!stored?.access) {
      window.localStorage.removeItem(SESSION_KEY);
      setReady(true);
      return;
    }

    fetchCurrentUser(stored.access)
      .then((me) => {
        if (me && me.role === "admin") {
          const refreshed: Session = { ...stored!, user: me };
          window.localStorage.setItem(SESSION_KEY, JSON.stringify(refreshed));
          setSession(refreshed);
          return;
        }
        window.localStorage.removeItem(SESSION_KEY);
        setAuthNotice("Your session has expired. Please sign in again.");
      })
      .catch(() => {
        window.localStorage.removeItem(SESSION_KEY);
        setAuthNotice("Could not verify your session. Please sign in again.");
      })
      .finally(() => setReady(true));
  }, []);

  // Load public site content once a session exists.
  useEffect(() => {
    if (!session) return;
    let cancelled = false;
    fetch(`${API_URL}/api/v1/site-content/`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data) setContent(data as SiteContent);
      })
      .catch(() => {
        if (!cancelled) setStatus("Showing default content — the backend is unreachable.");
      });
    return () => {
      cancelled = true;
    };
  }, [session]);

  const signIn = useCallback(async (username: string, password: string) => {
    const tokens = await requestToken(username, password);
    const me = await fetchCurrentUser(tokens.access);

    if (!me) {
      throw new Error("Signed in, but the server would not confirm your account.");
    }
    if (me.role !== "admin") {
      throw new Error("This account does not have administrator access.");
    }

    const next: Session = { access: tokens.access, refresh: tokens.refresh, user: me };
    window.localStorage.setItem(SESSION_KEY, JSON.stringify(next));
    setSession(next);
    setAuthNotice("");
  }, []);

  const logout = useCallback(() => {
    window.localStorage.removeItem(SESSION_KEY);
    setSession(null);
    router.push("/");
  }, [router]);

  const save = useCallback(() => {
    setSaving(true);
    fetch("/api/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
    })
      .then((res) => {
        setStatus(res.ok ? "Saved." : "Could not save — the content API returned an error.");
      })
      .catch(() => setStatus("Could not save — the content API is unreachable."))
      .finally(() => setSaving(false));
  }, [content]);

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4 py-16">
        <div className="w-full max-w-md animate-pulse rounded-2xl border border-line bg-white p-8">
          <div className="mx-auto h-12 w-12 rounded-full bg-line" />
          <div className="mx-auto mt-4 h-5 w-40 rounded bg-line" />
          <div className="mx-auto mt-3 h-3 w-56 rounded bg-line/70" />
          <div className="mt-8 h-11 rounded-xl bg-line/70" />
          <div className="mt-4 h-11 rounded-xl bg-line/70" />
        </div>
      </div>
    );
  }

  if (!session) {
    return <AdminLogin onSignIn={signIn} notice={authNotice} />;
  }

  const meta = TABS.find((tab) => tab.key === active) ?? TABS[0];
  const contentKey = CONTENT_KEY_BY_TAB[active];
  const sectionValue = contentKey ? content[contentKey] : undefined;

  return (
    <div className="flex min-h-screen bg-cream">
      <Sidebar
        active={active}
        onSelect={setActive}
        user={session.user}
        onLogout={logout}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 flex items-center gap-4 border-b border-line bg-cream/95 px-5 py-4 backdrop-blur sm:px-8">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="rounded-lg border border-line bg-white px-2.5 py-1.5 text-sm text-ink/70 lg:hidden"
            aria-label="Open menu"
          >
            Menu
          </button>
          <div className="min-w-0">
            <h1 className="truncate font-display text-xl text-forest-deep">{meta.label}</h1>
            <p className="truncate text-xs text-ink/50">{meta.description}</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              onClick={save}
              disabled={saving}
              className="inline-flex items-center gap-2 rounded-xl bg-forest px-4 py-2 text-sm font-semibold text-cream transition-colors hover:bg-forest-deep disabled:opacity-60"
            >
              <Save className="h-4 w-4" />
              {saving ? "Saving…" : "Save"}
            </button>
            <ButtonLink href="/" variant="outline" icon={false} className="hidden text-sm sm:inline-flex">
              View site
            </ButtonLink>
          </div>
        </header>

        <main className="flex-1 px-5 py-8 sm:px-8">
          <Container className="px-0">
            {status ? (
              <p className="mb-6 rounded-xl border border-gold/40 bg-gold/10 px-4 py-2 text-sm text-forest-deep">
                {status}
              </p>
            ) : null}

            <section className="rounded-2xl border border-line bg-white p-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
                <div>
                  <h2 className="font-display text-lg text-forest-deep">{meta.label}</h2>
                  <p className="text-xs text-ink/50">
                    {Array.isArray(sectionValue)
                      ? `${sectionValue.length} item${sectionValue.length === 1 ? "" : "s"}`
                      : "Single record"}
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl border border-dashed border-ink/25 px-4 py-2 text-sm text-ink/70 transition-colors hover:border-gold/60 hover:text-forest"
                  onClick={() => setStatus(`Editing ${meta.label.toLowerCase()} is coming next.`)}
                >
                  <Plus className="h-4 w-4" /> Add item
                </button>
              </div>

              {Array.isArray(sectionValue) ? (
                <ul className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {sectionValue.map((item, index) => {
                    const entry = (item ?? {}) as Record<string, unknown>;
                    const title =
                      (entry.title as string) ||
                      (entry.name as string) ||
                      (entry.session as string) ||
                      `Item ${index + 1}`;
                    const subtitle =
                      (entry.description as string) ||
                      (entry.quote as string) ||
                      (entry.summary as string) ||
                      (entry.excerpt as string) ||
                      (entry.alt as string) ||
                      "";
                    return (
                      <li
                        key={`${title}-${index}`}
                        className="rounded-xl border border-line bg-cream p-4"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-semibold text-forest-deep">{title}</p>
                          <button
                            type="button"
                            className="rounded-md p-1 text-ink/40 transition-colors hover:text-ink"
                            aria-label={`Remove ${title}`}
                            onClick={() =>
                              setContent((prev) => {
                                const key = contentKey as string;
                                const list = Array.isArray(prev[key])
                                  ? [...(prev[key] as unknown[])]
                                  : [];
                                list.splice(index, 1);
                                return { ...prev, [key]: list };
                              })
                            }
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        {subtitle ? (
                          <p className="mt-1 line-clamp-3 text-xs leading-relaxed text-ink/60">
                            {subtitle}
                          </p>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                  {Object.entries((sectionValue ?? {}) as Record<string, unknown>).map(
                    ([key, value]) => (
                      <div key={key} className="rounded-xl border border-line bg-cream p-4">
                        <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-moss">
                          {key}
                        </dt>
                        <dd className="mt-1 break-words text-sm text-ink/70">
                          {typeof value === "string" || typeof value === "number"
                            ? String(value)
                            : "—"}
                        </dd>
                      </div>
                    ),
                  )}
                </dl>
              )}
            </section>
          </Container>
        </main>
      </div>
    </div>
  );
}
