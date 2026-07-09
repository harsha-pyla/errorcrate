import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About ErrorCrate — Developer Error Resolution Platform",
  description:
    "Discover the ErrorCrate mission, methodology, and technology stack. Learn how we compile verified troubleshooting guides, root-cause breakdowns, and dynamic resolutions for 220+ system exceptions.",
  keywords: [
    "about errorcrate",
    "developer debugging platform",
    "programming error wiki",
    "error resolution database",
    "developer tools",
    "open source documentation",
  ],
  alternates: {
    canonical: "https://www.errorcrate.com/about",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "About ErrorCrate — Developer Error Resolution Platform",
    description: "Learn about the ErrorCrate mission and the team behind the developer error resolution encyclopedia.",
    url: "https://www.errorcrate.com/about",
    type: "website",
    siteName: "ErrorCrate",
  },
  twitter: {
    card: "summary",
    title: "About ErrorCrate — Developer Error Resolution Platform",
    description: "Learn about the mission, methodology, and team behind ErrorCrate.",
  },
};

export default function AboutPage() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className={styles.container}>
      {/* Pixel Art Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroLogo}>ERRORCRATE</div>
        <h1 className={styles.heroTitle}>
          ErrorCrate helps you resolve compiler errors &amp; runtime bugs instantly, solo.
        </h1>
        <p className={styles.heroSubtitle}>
          A comprehensive developer database documenting mechanical root causes, verified code fixes, and system configuration resolutions.
        </p>
        <div className={styles.heroCtaGroup}>
          <Link href="/wiki" className={styles.heroPrimaryBtn}>
            Explore errors wiki &rarr;
          </Link>
          <Link href="/contact" className={styles.heroSecondaryLink}>
            Contact support
          </Link>
        </div>
      </section>

      {/* Categories Bar */}
      <div className={styles.techCategoryBar}>
        <div className={styles.techTabsList}>
          <Link href="/wiki" className={`${styles.techTabItem} ${styles.techTabItemActive}`}>
            All Categories
          </Link>
          <Link href="/wiki?q=python" className={styles.techTabItem}>
            Python
          </Link>
          <Link href="/wiki?q=java" className={styles.techTabItem}>
            Java
          </Link>
          <Link href="/wiki?q=docker" className={styles.techTabItem}>
            Docker
          </Link>
          <Link href="/wiki?q=aws" className={styles.techTabItem}>
            AWS Cloud
          </Link>
        </div>
      </div>

      {/* Central Diagram Showcase */}
      <div className={styles.sectionTitleBlock}>
        <h2 className={styles.sectionHeading}>Verified diagnostic database. Zero guesswork.</h2>
        <p className={styles.sectionSubheading}>
          Every error entry in our repository undergoes automated validation against standard compiler specifications.
        </p>
      </div>

      <div className={styles.diagramContainer}>
        {/* Connection Lines Svg */}
        <svg className={styles.diagramSvg} viewBox="0 0 320 320">
          <line x1="160" y1="160" x2="160" y2="48" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="160" y1="160" x2="272" y2="102" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="160" y1="160" x2="272" y2="222" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="160" y1="160" x2="160" y2="278" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="160" y1="160" x2="48" y2="222" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="160" y1="160" x2="48" y2="102" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4 4" />
        </svg>

        {/* Center Node */}
        <div className={styles.centerNode}>
          Errors Wiki
          <br />
          Database
        </div>

        {/* Outer Nodes */}
        <div className={styles.outerNode} style={{ top: "10px", left: "122px" }}>
          <span className={styles.nodeIcon}>🐍</span>
          <span>Python</span>
        </div>
        <div className={styles.outerNode} style={{ top: "64px", left: "234px" }}>
          <span className={styles.nodeIcon}>☕</span>
          <span>Java</span>
        </div>
        <div className={styles.outerNode} style={{ top: "184px", left: "234px" }}>
          <span className={styles.nodeIcon}>📦</span>
          <span>Docker</span>
        </div>
        <div className={styles.outerNode} style={{ top: "240px", left: "122px" }}>
          <span className={styles.nodeIcon}>⚡</span>
          <span>NodeJS</span>
        </div>
        <div className={styles.outerNode} style={{ top: "184px", left: "10px" }}>
          <span className={styles.nodeIcon}>☁️</span>
          <span>AWS Cloud</span>
        </div>
        <div className={styles.outerNode} style={{ top: "64px", left: "10px" }}>
          <span className={styles.nodeIcon}>🌐</span>
          <span>HTTP Codes</span>
        </div>
      </div>

      {/* Feature Rows (Mockup layouts matching main error resolution theme) */}
      <div className={styles.featuresWrapper}>
        {/* Feature 1: Main Product */}
        <div className={styles.featureRow}>
          <div className={styles.featureDescCol}>
            <div className={styles.featureFolderIcon}>📁</div>
            <h3 className={styles.featureTitle}>Instant Error Resolution</h3>
            <p className={styles.featureText}>
              Find precise diagnostic guides for compiler exceptions, dependency conflicts, and runtime faults. Search 220+ verified resolutions globally to get back to writing code.
            </p>
            <Link href="/wiki" className={styles.featureMetaLink}>
              Search database &rarr;
            </Link>
          </div>
          <div className={styles.mockupContainer}>
            <div style={{ padding: "8px 12px", border: "1px solid var(--border-dark)", borderRadius: "6px", backgroundColor: "var(--background)", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Search: NullPointerException</span>
              <span style={{ fontSize: "0.8rem", color: "#a1a1aa" }}>Ctrl + /</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ padding: "10px 14px", background: "#f0fdf4", borderRadius: "6px", fontSize: "0.85rem", border: "1px solid #bbf7d0", color: "#16a34a", fontWeight: 700 }}>
                ✓ Root Cause Identified: Attempting to invoke method on uninitialized reference
              </div>
              <div style={{ padding: "10px 14px", background: "var(--background)", borderRadius: "6px", fontSize: "0.85rem", border: "1px solid var(--border-dark)", display: "flex", justifyContent: "space-between" }}>
                <span>Fix: Initialize wrapper object before referencing properties</span>
                <span style={{ color: "var(--accent-orange)", fontWeight: 700 }}>Java</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Badges (Reverse) */}
        <div className={`${styles.featureRow} ${styles.reverse}`}>
          <div className={styles.mockupContainer} style={{ borderStyle: "dashed" }}>
            <div className={styles.mockupBadgesRow}>
              <span className={`${styles.mockupBadge} ${styles.highlight}`}>CPython v3.12</span>
              <span className={styles.mockupBadge}>AWS CLI v2</span>
              <span className={`${styles.mockupBadge} ${styles.highlight}`}>Docker v26</span>
              <span className={styles.mockupBadge}>GCC v13.2</span>
              <span className={styles.mockupBadge}>JDK 21</span>
              <span className={`${styles.mockupBadge} ${styles.highlight}`}>Kubectl v1.30</span>
            </div>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: "16px 0 0 0", fontStyle: "italic" }}>
              *All error resolutions compiled and checked against upstream compiler specifications.
            </p>
          </div>
          <div className={styles.featureDescCol}>
            <div className={styles.featureFolderIcon}>📁</div>
            <h3 className={styles.featureTitle}>Tested Environment Trust Badges</h3>
            <p className={styles.featureText}>
              Every solution guide is compiled and checked against upstream runtimes. We badge the exact software versions so you write patches that fit.
            </p>
            <Link href="/wiki" className={styles.featureMetaLink}>
              View tested runtimes &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Alphabetical Index Directory (Matches Cofounder) */}
      <div className={styles.directorySection}>
        <span className={styles.directoryLabel}>Search exceptions alphabetically</span>
        <div className={styles.directoryGrid}>
          {alphabet.map((letter) => (
            <Link key={letter} href={`/wiki?q=${letter.toLowerCase()}`} className={styles.directoryLetter}>
              {letter}
            </Link>
          ))}
        </div>
      </div>

      {/* Pixel Art Footer Call To Action */}
      <section className={styles.footerCtaSection}>
        <h2 className={styles.footerCtaTitle}>Write inherently resilient systems.</h2>
        <div className={styles.footerCtaCard}>
          <span className={styles.footerCardTitle}>Request exception walkthroughs</span>
          <p className={styles.footerCardText}>
            Stuck on an opaque compiler diagnostic or AWS policy block? Submit the code signature to our engineering queue, and our diagnostic compilers will trace it.
          </p>
          <Link href="/contact" className={styles.footerCardBtn}>
            Contact support &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
