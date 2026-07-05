import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About ErrorCrate — Developer Debugging Knowledge Platform",
  description:
    "Learn about the ErrorCrate mission, engineering methodology, and the team behind the developer debugging encyclopedia. Discover how we build verified troubleshooting guides for 220+ programming errors.",
  keywords: [
    "about errorcrate",
    "developer debugging platform",
    "programming error wiki",
    "engineering team",
    "developer tools",
    "open source documentation",
  ],
  alternates: {
    canonical: "https://www.errorcrate.com/about",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "About ErrorCrate — Developer Debugging Knowledge Platform",
    description: "Learn about the ErrorCrate mission and the team behind the developer debugging encyclopedia.",
    url: "https://www.errorcrate.com/about",
    type: "website",
    siteName: "ErrorCrate",
  },
  twitter: {
    card: "summary",
    title: "About ErrorCrate — Developer Debugging Knowledge Platform",
    description: "Learn about the mission, methodology, and team behind ErrorCrate.",
  },
};

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.badge}>Our Story</span>
        <h1 className={styles.title}>About ErrorCrate</h1>
        <p className={styles.subtitle}>
          ErrorCrate is a free, open developer documentation platform built to eliminate hours of frustrating debugging by providing verified, structured, and rigorously tested troubleshooting guides for real-world programming errors.
        </p>
      </header>

      {/* Mission */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <span>🎯</span> Our Mission
        </h2>
        <p className={styles.text}>
          Every developer has experienced the frustration of encountering an opaque compiler error, a cryptic runtime exception, or a baffling infrastructure failure at 2 AM with a production deadline looming. Traditional search results often yield outdated forum posts, untested workarounds, and fragmented advice scattered across dozens of websites.
        </p>
        <p className={styles.text}>
          ErrorCrate was built to solve this problem. Our mission is to create the most comprehensive, accurate, and developer-friendly error resolution encyclopedia on the internet. We believe that every programming error deserves a dedicated, well-researched guide that explains the root cause, provides a verified fix, and teaches defensive patterns to prevent recurrence.
        </p>
      </section>

      {/* Platform Stats */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <span>📊</span> Platform at a Glance
        </h2>
        <p className={styles.text}>
          Since our launch, ErrorCrate has grown into a substantial knowledge repository serving developers across the globe.
        </p>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>220+</span>
            <span className={styles.statLabel}>Documented Errors</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>10+</span>
            <span className={styles.statLabel}>Technology Categories</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>Verified Solutions</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>Free</span>
            <span className={styles.statLabel}>Always & Forever</span>
          </div>
        </div>
      </section>

      {/* Engineering Methodology */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <span>⚙️</span> Engineering Methodology
        </h2>
        <p className={styles.text}>
          Unlike conventional developer forums where answers are crowd-sourced with varying quality, ErrorCrate enforces a rigorous four-stage editorial pipeline for every error entry in our database:
        </p>
        <p className={styles.text}>
          <strong>Stage 1 — Trace Isolation:</strong> We dissect stack traces to identify the exact abstraction layer where the failure originates, whether it is a lexical parsing error, heap memory exhaustion, socket timeout, or container orchestration fault.
        </p>
        <p className={styles.text}>
          <strong>Stage 2 — Deterministic Reproduction:</strong> Every error is reproduced inside isolated container environments using minimal reproducible examples (MREs) to confirm the exact trigger conditions and eliminate environmental variables.
        </p>
        <p className={styles.text}>
          <strong>Stage 3 — Architectural Remediation:</strong> We provide drop-in code solutions alongside detailed architectural explanations comparing the broken implementation pattern with the resilient alternative.
        </p>
        <p className={styles.text}>
          <strong>Stage 4 — Defensive Safeguards:</strong> Each guide includes prevention strategies such as linting rules, CI/CD assertion patterns, and runtime monitoring configurations to prevent regression in production environments.
        </p>
      </section>

      {/* Core Values */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <span>💡</span> Core Values
        </h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🔍</div>
            <h3 className={styles.valueTitle}>Accuracy First</h3>
            <p className={styles.valueText}>
              Every code solution is tested against live compiler runtimes. We never publish untested workarounds or speculative fixes.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>📖</div>
            <h3 className={styles.valueTitle}>Clarity Over Brevity</h3>
            <p className={styles.valueText}>
              We prioritize thorough explanations of root causes over quick one-liner fixes. Understanding why an error occurs is as important as resolving it.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🌐</div>
            <h3 className={styles.valueTitle}>Open & Free</h3>
            <p className={styles.valueText}>
              ErrorCrate is and will always remain free for every developer. No paywalls, no premium tiers, no gated content.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🔄</div>
            <h3 className={styles.valueTitle}>Continuously Updated</h3>
            <p className={styles.valueText}>
              Our automated pipelines revalidate solutions against new framework releases weekly to ensure backward and forward compatibility.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <span>🛠️</span> Our Architecture
        </h2>
        <p className={styles.text}>
          ErrorCrate is engineered using modern web architectures optimized for speed, search visibility, and ease of reading. The platform leverages static pre-rendering, ensuring every troubleshooting guide loads instantly with zero server lag, maximizing performance scores.
        </p>
        <p className={styles.text}>
          Our error database is structured as typed compiler-validated data modules, enabling validation of all error entries, category relationships, and metadata fields. This architecture ensures that every guide published on the platform passes both runtime and static analysis verification.
        </p>
      </section>

      {/* Contact */}
      <div className={styles.contactBox}>
        <h3 className={styles.contactTitle}>Get in Touch</h3>
        <p className={styles.contactText}>
          Have questions, feedback, or want to contribute to ErrorCrate? Reach out to us at <strong>harsha1029p@gmail.com</strong> or visit our <Link href="/contact" style={{ color: "var(--accent-orange)", fontWeight: 600 }}>Contact Support</Link> page.
        </p>
      </div>
    </div>
  );
}
