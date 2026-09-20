import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = ["", "/contact", "/about", "/talent", "/clients", "/hubs", "/pricing"];

  return routes.map((path, index) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : index === 1 ? 0.8 : 0.7,
  }));
}
