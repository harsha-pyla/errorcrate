import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "ErrorCrate Dev Blog — Software Engineering & Debugging Insights",
  description:
    "Explore in-depth articles, troubleshooting directories, and architectural deep-dives on HTTP, Node.js, AWS, Docker, and container DevOps diagnostics.",
  keywords: [
    "developer blog",
    "software engineering guides",
    "debugging insights",
    "cloud infrastructure blog",
    "docker containers walkthrough",
  ],
  alternates: {
    canonical: "https://www.errorcrate.com/blog",
  },
  robots: { index: true, follow: true },
};

const blogPosts = [
  {
    slug: "http-status-codes-explained",
    title: "HTTP Status Codes Explained (100–599): The Ultimate Debugger's Directory",
    excerpt: "Demystify HTTP status codes from 100 to 599. Learn the meanings, diagnostics, and resolution strategies for common client and server errors like 404, 500, and 503.",
    image: "/images/blog/http-status-codes.png",
    date: "July 2026",
    readTime: "10 min read",
  },
  {
    slug: "common-nodejs-errors",
    title: "50 Common Node.js Errors Every Developer Should Know",
    excerpt: "Master Node.js debugging with this deep-dive guide. Learn how to diagnose and fix common Node runtime exceptions, connection failures, and file system errors.",
    image: "/images/blog/common-nodejs-errors.png",
    date: "July 2026",
    readTime: "12 min read",
  },
  {
    slug: "common-aws-errors",
    title: "30 Common AWS Errors Explained: Troubleshooting IAM, S3, and API Failures",
    excerpt: "Solve common Amazon Web Services (AWS) errors. Learn how to resolve IAM Access Denied, S3 Bucket Already Exists, Expired Tokens, and Throttling Exception errors.",
    image: "/images/blog/common-aws-errors.png",
    date: "July 2026",
    readTime: "11 min read",
  },
  {
    slug: "docker-errors-and-fixes",
    title: "25 Docker Errors and How to Fix Them: A Container Debugging Handbook",
    excerpt: "Troubleshoot Docker containerization errors. Learn how to resolve Daemon connection failures, exited container code 137, OOMKilled, and buildkit failed to solve errors.",
    image: "/images/blog/docker-errors-and-fixes.png",
    date: "July 2026",
    readTime: "10 min read",
  },
];

export default function BlogIndexPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header} style={{ borderBottom: "1px solid var(--border)", paddingBottom: "24px", marginBottom: "36px" }}>
        <span className={styles.badge}>Developer Insights</span>
        <h1 className={styles.title} style={{ fontSize: "2.5rem", marginBottom: "12px" }}>The Overflow Blog</h1>
        <p className={styles.subtitle} style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
          In-depth articles, troubleshooting guides, and architectural breakdowns compiled by the ErrorCrate engineering team.
        </p>
      </header>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "36px" }}>
        {blogPosts.map((post) => (
          <article key={post.slug} style={{ display: "flex", gap: "24px", borderBottom: "1px solid var(--border)", paddingBottom: "36px", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 250px", position: "relative", minHeight: "180px", borderRadius: "8px", overflow: "hidden", border: "1px solid var(--border)" }}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{ flex: "2 1 350px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{post.date} • {post.readTime}</span>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "8px 0 12px 0" }}>
                  <Link href={`/blog/${post.slug}`} style={{ color: "var(--text-dark)", textDecoration: "none" }}>
                    {post.title}
                  </Link>
                </h2>
                <p style={{ color: "var(--text)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
                  {post.excerpt}
                </p>
              </div>
              <div style={{ marginTop: "16px" }}>
                <Link href={`/blog/${post.slug}`} style={{ color: "var(--accent-orange)", fontWeight: 600, textDecoration: "none", fontSize: "0.95rem" }}>
                  Read Article →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
