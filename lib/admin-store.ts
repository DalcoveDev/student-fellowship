import fs from "node:fs/promises";
import path from "node:path";
import type { SiteContent } from "@/lib/content";

const STORE_PATH = path.join(process.cwd(), "data", "site-content.json");

export async function loadSiteContent(): Promise<SiteContent> {
  try {
    const raw = await fs.readFile(STORE_PATH, "utf8");
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") {
      throw new Error("Invalid store content");
    }
    return parsed as SiteContent;
  } catch (error) {
    throw new Error(`Unable to read admin content store (${error})`);
  }
}

export async function saveSiteContent(content: SiteContent): Promise<void> {
  await fs.mkdir(path.dirname(STORE_PATH), { recursive: true });
  await fs.writeFile(STORE_PATH, JSON.stringify(content, null, 2), "utf8");
}
