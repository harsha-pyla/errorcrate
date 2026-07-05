import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { categories } from "@/data/categories";
import CategoryPageClient from "./CategoryPageClient";

interface PageProps {
  params: Promise<{ category: string }>;
}

// Generate Category Index SEO Metadata dynamically
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categoryId } = await params;
  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    return {
      title: "Category Not Found - ErrorCrate",
      description: "The requested programming error category index was not found.",
    };
  }

  return {
    title: `${category.name} Troubleshooting & Debugging Guides | ErrorCrate`,
    description: `Comprehensive list of common programming errors, troubleshooting steps, causes, code examples, and fixes tagged with [${category.name.toLowerCase()}].`,
    keywords: [
      category.name,
      "programming errors",
      "how to fix",
      "debugging guides",
      "error codes",
      "syntax errors",
      "stack trace troubleshooting",
    ],
    openGraph: {
      title: `${category.name} Troubleshooting & Debugging Guides | ErrorCrate`,
      description: `Comprehensive list of common programming errors, troubleshooting steps, causes, code examples, and fixes tagged with [${category.name.toLowerCase()}].`,
      url: `https://www.errorcrate.com/${category.id}`,
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: categoryId } = await params;
  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    notFound();
  }

  return <CategoryPageClient categoryId={categoryId} />;
}
