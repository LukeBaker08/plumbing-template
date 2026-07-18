import { sheridanGodfrey } from "./sheridan-godfrey";
import { andrewMcreynolds } from "./andrew-mcreynolds";
import { duncansPlumbing } from "./duncans-plumbing";
import type { SiteConfig } from "./types";

const sites = {
  "sheridan-godfrey": sheridanGodfrey,
  "andrew-mcreynolds": andrewMcreynolds,
  "duncans-plumbing": duncansPlumbing,
} satisfies Record<string, SiteConfig>;

export type SiteId = keyof typeof sites;

export function getActiveSite(): SiteConfig {
  const id = import.meta.env.VITE_SITE_ID;
  if (!id) {
    throw new Error(
      `VITE_SITE_ID is not set. Set it to one of: ${Object.keys(sites).join(", ")}`,
    );
  }
  const site = sites[id as SiteId];
  if (!site) {
    throw new Error(
      `Unknown VITE_SITE_ID "${id}". Available sites: ${Object.keys(sites).join(", ")}`,
    );
  }
  return site;
}
