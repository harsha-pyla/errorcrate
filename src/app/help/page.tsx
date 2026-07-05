import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Help Center & Documentation Support — ErrorCrate Support Hub",
  description:
    "Need help troubleshooting a developer error? Visit the ErrorCrate Help Center for guides on search operators, error diagnosis, documentation contributions, and platform support.",
  keywords: [
    "errorcrate help center",
    "developer support",
    "troubleshooting help",
    "compiler diagnostics guide",
    "search documentation",
    "API crash resolution support",
  ],
  alternates: {
    canonical: "https://www.errorcrate.com/help",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Help Center & Documentation Support — ErrorCrate Support Hub",
    description:
      "Find guides, search tips, and support documentation to resolve compiler warnings, runtime exceptions, and deployment failures.",
    url: "https://www.errorcrate.com/help",
    type: "website",
    siteName: "ErrorCrate",
  },
  twitter: {
    card: "summary",
    title: "Help Center & Documentation Support — ErrorCrate Support Hub",
    description:
      "Resolve programming errors faster. Get search guides and platform support on the ErrorCrate Help Center.",
  },
};

export default function HelpCenterPage() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <span className={styles.badge}>Knowledge Portal</span>
        <h1 className={styles.title}>ErrorCrate Help Center</h1>
        <p className={styles.subtitle}>
          Get support, learn advanced search methodologies, and understand how to navigate the ErrorCrate developer documentation platform.
        </p>
      </header>

      {/* Hero Banner */}
      <div className={styles.searchHero}>
        <h2 className={styles.heroTitle}>How can we assist you today?</h2>
        <p className={styles.heroSubtitle}>
          Browse our structured documentation guides below to resolve platform usage issues, discover contribution guidelines, or contact developer support.
        </p>
      </div>

      {/* Help Topic Cards */}
      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>🔍</div>
          <h3 className={styles.cardTitle}>Searching Guides Effectively</h3>
          <div className={styles.cardContent}>
            <p>
              Learn how to utilize keyword modifiers, exact-match phrase identifiers, and category filters to locate specific compiler warnings, trace outputs, or package dependencies quickly.
            </p>
            <p>
              Our search indexing uses fuzzy-string matching algorithms optimized for raw stack trace snippets, database query syntax, and command-line execution outputs.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>📝</div>
          <h3 className={styles.cardTitle}>Submission Guidelines</h3>
          <div className={styles.cardContent}>
            <p>
              Want to contribute a new error resolution? Our editorial team reviews community-submitted runtime errors, compiler bugs, and deployment failures for code correctness.
            </p>
            <p>
              Ensure your submissions contain minimal reproducible examples (MREs), absolute software version requirements, and step-by-step diagnostics to satisfy QA verification.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>🛡️</div>
          <h3 className={styles.cardTitle}>Privacy & Quality Assurance</h3>
          <div className={styles.cardContent}>
            <p>
              All code snippets, terminal commands, and configuration scripts uploaded to our knowledge repository undergo validation to ensure they are safe, free of malicious code, and performant.
            </p>
            <p>
              We enforce strict compliance policies regarding credential sanitization; never upload raw production environment variables, database passwords, or private API keys.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions (FAQ)</h2>
        <div className={styles.faqList}>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>What is ErrorCrate?</h3>
            <p className={styles.faqAnswer}>
              ErrorCrate is a developer-centric wiki and encyclopedia designed to provide precise, tested, and reliable troubleshooting guides for programming exceptions, system crashes, and compiler errors. Inspired by clean Stack Overflow aesthetics, we focus on high-quality explanations, root cause analysis, and defensive engineering practices.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>Are the code solutions updated for modern framework versions?</h3>
            <p className={styles.faqAnswer}>
              Yes. Our verification engine continuously runs automated checks against major runtime versions, including Node.js v20+, Python 3.12+, React 19, and Kubernetes 1.30+. When a breaking change in an upstream package is detected, our contributors receive alerts to update the corresponding guides.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>Can I integrate ErrorCrate diagnostics into my IDE or build tools?</h3>
            <p className={styles.faqAnswer}>
              We are currently designing webhooks and API interfaces to allow developer tools to query our error database directly from command-line terminals and continuous integration pipelines. Look for announcements on our Changelog page as we release public API keys.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>How do I report outdated or incorrect documentation?</h3>
            <p className={styles.faqAnswer}>
              If you identify an outdated snippet, command, or package version, you can click the "Request Error" portal to submit corrections or use our direct support contact channel to alert the editorial team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <div className={styles.contactBanner}>
        <h2 className={styles.contactTitle}>Still need assistance?</h2>
        <p className={styles.contactText}>
          Can't find the specific error resolution guide in our repository? Get in touch with our support team or submit a diagnostics request.
        </p>
        <Link href="/request" className={styles.contactBtn}>
          Submit Diagnostic Request
        </Link>
      </div>
    </div>
  );
}
