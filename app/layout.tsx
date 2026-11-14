import type { Metadata, Viewport } from "next";
import { Inter, Merriweather } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getSiteContent, type Site } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const { site: contentSite } = await getSiteContent();

  return {
    metadataBase: new URL(contentSite.url),
    applicationName: contentSite.name,
    title: {
      default: "Christian Students Network | Making disciples in Rwanda",
      template: "%s | Christian Students Network",
    },
    description: contentSite.vision,
    keywords: [
      "Christian Students Network",
      "student fellowship Rwanda",
      "Bible study Kigali",
      "university ministry",
      "high school ministry",
      "Christian students Rwanda",
      "discipleship Rwanda",
    ],
    authors: [{ name: contentSite.name, url: contentSite.url }],
    creator: contentSite.name,
    publisher: contentSite.name,
    category: "religion",
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "/",
      siteName: contentSite.name,
      title: "Christian Students Network | Making disciples in Rwanda",
      description: contentSite.vision,
    },
    twitter: {
      card: "summary_large_image",
      title: "Christian Students Network | Making disciples in Rwanda",
      description: contentSite.vision,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#0e241d",
};

function buildStructuredData(site: Site) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        logo: `${site.url}/icon.png`,
        description: site.vision,
        email: site.email,
        telephone: site.phones[0]?.href.replace("tel:", "") ?? "",
        address: {
          "@type": "PostalAddress",
          addressLocality: site.location,
          addressCountry: "RW",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.vision,
        inLanguage: "en",
        publisher: { "@id": `${site.url}/#organization` },
      },
    ],
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const content = await getSiteContent();
  const structuredData = buildStructuredData(content.site);

  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${merriweather.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="flex min-h-full flex-col bg-cream text-ink"
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-forest-deep focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-cream"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header site={content.site} nav={content.nav} />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer site={content.site} />
      </body>
    </html>
  );
}
