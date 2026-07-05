import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { errorsData } from "@/data/errors";
import { categories } from "@/data/categories";
import ErrorPageClient from "./ErrorPageClient";

interface PageProps {
  params: Promise<{ category: string; id: string }>;
}

// Generate Dynamic SEO Metadata on the Server
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, id } = await params;
  const error = errorsData.find((e) => e.id === id && e.category === category);
  
  if (!error) {
    return {
      title: "Error Not Found",
      description: "The requested programming error guide was not found on ErrorCrate.",
    };
  }

  const getCategoryCleanName = (catId: string) => {
    switch (catId) {
      case "aws": return "AWS";
      case "docker": return "Docker";
      case "nodejs": return "Node.js";
      case "git": return "Git";
      case "http-status": return "HTTP";
      case "javascript": return "JavaScript";
      case "react": return "React";
      case "kubernetes": return "Kubernetes";
      case "linux": return "Linux";
      case "python": return "Python";
      default: return catId.charAt(0).toUpperCase() + catId.slice(1);
    }
  };

  const catLabel = getCategoryCleanName(error.category);
  const pageTitle = `${error.name} - ${catLabel} Error | ErrorCrate`;
  const pageDescription = `Learn how to fix ${catLabel} ${error.name} with causes, solutions and examples.`;

  // Dynamic keywords based on actual error data
  const pageKeywords = [
    error.name,
    `${error.name} fix`,
    `${error.name} solution`,
    `how to fix ${error.name}`,
    `${error.name} error`,
    catLabel,
    `${catLabel} error`,
    ...error.badges.map((b) => b.toLowerCase()),
    ...(error.causes?.slice(0, 3) ?? []),
  ];

  const canonicalUrl = `https://www.errorcrate.com/${error.category}/${error.id}`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large" as const,
      "max-video-preview": -1,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: "article",
      url: canonicalUrl,
      siteName: "ErrorCrate",
      locale: "en_US",
    },
    twitter: {
      card: "summary",
      title: pageTitle,
      description: pageDescription,
    },
  };
}

export default async function ErrorPage({ params }: PageProps) {
  const { category: categoryId, id } = await params;
  const error = errorsData.find((e) => e.id === id);

  if (!error) {
    notFound();
  }

  // Cross-check parameter values to guard incorrect routing links
  if (error.category !== categoryId) {
    notFound();
  }

  const category = categories.find((c) => c.id === error.category);

  return <ErrorPageClient error={error} category={category} />;
}
