import React from "react";
import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Changelog & Release Notes — ErrorCrate Engineering Updates",
  description:
    "Review the chronological release history of ErrorCrate. Discover new developer debugging guides, AI stack trace analyzer upgrades, SEO enhancements, and architecture benchmarks.",
  keywords: [
    "errorcrate changelog",
    "developer release notes",
    "software debugging updates",
    "stack trace diagnostic engine",
    "compiler resolution repository",
    "engineering releases",
  ],
  alternates: {
    canonical: "https://www.errorcrate.com/changelog",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Changelog & Release Notes — ErrorCrate Engineering Updates",
    description:
      "Review official engineering release notes, diagnostic improvements, and database expansions for ErrorCrate.",
    url: "https://www.errorcrate.com/changelog",
    type: "website",
    siteName: "ErrorCrate",
  },
  twitter: {
    card: "summary",
    title: "Changelog & Release Notes — ErrorCrate Engineering Updates",
    description:
      "Review official engineering release notes, diagnostic improvements, and database expansions for ErrorCrate.",
  },
};

export default function ChangelogPage() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <span className={styles.badge}>System Architecture Updates</span>
        <h1 className={styles.title}>ErrorCrate Engineering Changelog</h1>
        <p className={styles.subtitle}>
          Explore the evolution of the ErrorCrate diagnostic platform. We practice transparent software engineering by documenting every infrastructure upgrade, compiler compatibility update, automated verification pipeline enhancement, and repository expansion.
        </p>
      </header>

      {/* Engineering Policy Box */}
      <div className={styles.introBox}>
        <div className={styles.introTitle}>
          <span>🚀</span> Continuous Release & Verification Methodology
        </div>
        <p>
          Our engineering team deploys continuous updates to keep pace with evolving language standards. Every entry added to our knowledge repository undergoes automated verification. When upstream frameworks release breaking changes, we update our solutions, ensuring developers always receive accurate, deterministic debugging remediation.
        </p>
      </div>

      {/* Release Timeline */}
      <div className={styles.timeline}>
        {/* Release v1.1.0 */}
        <article className={styles.releaseCard}>
          <div className={styles.releaseHeader}>
            <div className={styles.versionGroup}>
              <span className={styles.versionTag}>v1.1.0</span>
              <span className={styles.latestBadge}>Current Release</span>
            </div>
            <span className={styles.releaseDate}>July 9, 2026</span>
          </div>
          <p className={styles.releaseSummary}>
            Major release introducing the full-width SaaS landing About page, alphabetical index search directory lookups, responsive mockup highlights, and mobile alignment improvements.
          </p>

          <div className={styles.changeSection}>
            <div className={`${styles.changeHeading} ${styles.added}`}>
              <span>✨</span> New Features & Additions
            </div>
            <ul className={styles.changeList}>
              <li className={styles.changeItem}>
                <strong>SaaS About Page Redesign:</strong> Completely overhauled the About page to replicate the high-end pixel-art backdrop look of cofounder.co with interactive circular connection diagrams and visual CSS mockup boxes.
              </li>
              <li className={styles.changeItem}>
                <strong>Alphabetical Directory Index:</strong> Integrated a full A-Z directory lookup grid on the About page to navigate straight to search filters in the Error resolution database.
              </li>
              <li className={styles.changeItem}>
                <strong>Unified Full-Width Mode:</strong> Disabled the left sidebar on the About route to let the SaaS landing layout span the entire browser viewport width.
              </li>
            </ul>
          </div>

          <div className={styles.changeSection}>
            <div className={`${styles.changeHeading} ${styles.improved}`}>
              <span>⚡</span> Performance, Security & Layout Improvements
            </div>
            <ul className={styles.changeList}>
              <li className={styles.changeItem}>
                <strong>Privacy Email Redirection:</strong> Removed raw mailto strings from Privacy, Terms, Cookies, and About pages, replacing them with contact form links.
              </li>
              <li className={styles.changeItem}>
                <strong>Sitemap & Footer Cleanups:</strong> Optimized sitemap generation indices and footer link groups to focus strictly on the wiki error resolution entries.
              </li>
              <li className={styles.changeItem}>
                <strong>Mobile Navbar Center Alignment:</strong> Realigned the mobile hamburger icon, logo warning triangle, and search container onto a unified vertical centerline.
              </li>
            </ul>
          </div>

          <div className={styles.changeSection}>
            <div className={`${styles.changeHeading} ${styles.fixed}`}>
              <span>🛠️</span> Visual Polish & Divider Layouts
            </div>
            <ul className={styles.changeList}>
              <li className={styles.changeItem}>
                <strong>Borderless Horizontal Divider Grid:</strong> Removed the card box borders, shadows, and backgrounds around lobby questions lists, replacing them with clean separator lines.
              </li>
              <li className={styles.changeItem}>
                <strong>Viewport Containment:</strong> Added code execution horizontal scrolls to ensure preformatted text fits correctly on compact mobile screens.
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
}
