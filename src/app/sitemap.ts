import { MetadataRoute } from "next";
import { errorsData } from "@/data/errors";
import { categories } from "@/data/categories";
import { learningQuestions } from "@/data/learning";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.errorcrate.com";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/help",
    "/wiki",
    "/changelog",
    "/request",
    "/learning",
    "/blog",
    "/blog/http-status-codes-explained",
    "/blog/common-nodejs-errors",
    "/blog/common-aws-errors",
    "/blog/docker-errors-and-fixes",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Category routes
  const categoryRoutes = categories.map((cat) => ({
    url: `${baseUrl}/${cat.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Error details routes
  const errorRoutes = errorsData.map((error) => ({
    url: `${baseUrl}/${error.category}/${error.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Learning details routes
  const learningRoutes = learningQuestions.map((q) => ({
    url: `${baseUrl}/learning/${q.topic}/${q.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes, ...errorRoutes, ...learningRoutes];
}
