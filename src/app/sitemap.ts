import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://www.cecsknights.org",
            lastModified: new Date(),
            priority: 1,
        },
    ];
}