import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { site } from "@/lib/site";

const routes: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about/leadership", priority: 0.7, changeFrequency: "monthly" },
  {
    path: "/about/statement-of-faith",
    priority: 0.7,
    changeFrequency: "yearly",
  },
  { path: "/campuses", priority: 0.9, changeFrequency: "monthly" },
  { path: "/visit", priority: 0.9, changeFrequency: "monthly" },
  { path: "/bible-study", priority: 0.8, changeFrequency: "monthly" },
  { path: "/online-ministry", priority: 0.8, changeFrequency: "weekly" },
  { path: "/charity", priority: 0.7, changeFrequency: "monthly" },
  { path: "/events", priority: 0.8, changeFrequency: "weekly" },
  { path: "/articles", priority: 0.8, changeFrequency: "weekly" },
  { path: "/gallery", priority: 0.6, changeFrequency: "monthly" },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...routes.map((route) => ({
      url: `${site.url}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...articles.map((article) => ({
      url: `${site.url}/articles/${article.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
