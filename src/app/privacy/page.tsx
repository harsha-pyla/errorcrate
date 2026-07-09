import React from "react";
import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy — Data Protection & User Privacy Commitments",
  description:
    "Read the ErrorCrate Privacy Policy. Understand how we collect, process, and safeguard developer diagnostic data, browser analytics, and platform interaction metadata.",
  keywords: [
    "errorcrate privacy policy",
    "developer data protection",
    "website privacy",
    "diagnostic data handling",
    "GDPR compliance",
    "cookie consent",
  ],
  alternates: {
    canonical: "https://www.errorcrate.com/privacy",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy — Data Protection & User Privacy Commitments | ErrorCrate",
    description: "Understand how ErrorCrate collects, processes, and safeguards developer diagnostic data and platform interaction metadata.",
    url: "https://www.errorcrate.com/privacy",
    type: "website",
    siteName: "ErrorCrate",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy — ErrorCrate",
    description: "Read the ErrorCrate Privacy Policy on data protection, analytics collection, and user privacy commitments.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.badge}>Legal Document</span>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.effectiveDate}>Effective Date: July 1, 2026 &middot; Last Updated: July 1, 2026</p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>1. Introduction & Scope</h2>
        <p className={styles.text}>
          ErrorCrate (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the errorcrate.com website and developer documentation platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our platform, submit error diagnostic requests, browse our troubleshooting wiki, or interact with any feature of the ErrorCrate service.
        </p>
        <p className={styles.text}>
          By accessing or using ErrorCrate, you acknowledge that you have read, understood, and agree to be bound by the terms of this Privacy Policy. If you do not agree with the terms of this policy, please discontinue use of our platform immediately.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
        <p className={styles.text}>
          We collect information to improve the quality, relevance, and accuracy of our developer documentation platform. The categories of data we process include:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Usage Analytics:</strong> Pages visited, search queries entered, error categories browsed, time spent on diagnostic guides, and navigation patterns across the platform.
          </li>
          <li className={styles.listItem}>
            <strong>Technical Device Data:</strong> Browser type and version, operating system, screen resolution, device type (desktop, mobile, tablet), IP address, and referring URL.
          </li>
          <li className={styles.listItem}>
            <strong>User-Submitted Content:</strong> Error messages, stack traces, code snippets, and diagnostic descriptions voluntarily submitted through our Request Error and Paste & Diagnose features.
          </li>
          <li className={styles.listItem}>
            <strong>Cookie Identifiers:</strong> Session tokens, preference cookies, and analytics tracking identifiers used to maintain browsing state and measure aggregate platform performance.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>3. How We Use Your Information</h2>
        <p className={styles.text}>
          The information we collect serves the following operational and quality assurance purposes:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Platform Improvement:</strong> Analyzing search query patterns to identify undocumented errors and prioritize new troubleshooting guide creation.
          </li>
          <li className={styles.listItem}>
            <strong>Content Personalization:</strong> Adapting category recommendations and related error suggestions based on browsing behavior and technology stack preferences.
          </li>
          <li className={styles.listItem}>
            <strong>Security & Fraud Prevention:</strong> Monitoring for automated scraping, abuse of submission endpoints, and anomalous traffic patterns that may indicate malicious activity.
          </li>
          <li className={styles.listItem}>
            <strong>Advertising & Monetization:</strong> Serving contextually relevant advertisements through third-party advertising networks, including Google AdSense, to sustain the free availability of our documentation platform.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>4. Third-Party Services & Advertising</h2>
        <p className={styles.text}>
          ErrorCrate partners with third-party advertising networks and analytics providers to deliver relevant advertisements and measure platform engagement. These partners may use cookies and similar tracking technologies to collect information about your interactions with our platform and other websites.
        </p>
        <div className={styles.highlight}>
          <strong>Google AdSense:</strong> We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to ErrorCrate and other websites. You may opt out of personalized advertising by visiting <strong>Google Ads Settings</strong> or the <strong>Network Advertising Initiative opt-out page</strong>.
        </div>
        <p className={styles.text}>
          We do not sell, rent, or trade your personally identifiable information to third parties for their independent marketing purposes. Data shared with advertising partners is limited to anonymized usage metrics and cookie identifiers necessary for ad delivery and performance measurement.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>5. Data Retention & Security</h2>
        <p className={styles.text}>
          We retain usage analytics and session data for a maximum of 26 months from the date of collection, after which it is automatically purged from our systems. User-submitted error reports and diagnostic content are retained indefinitely to maintain the integrity and completeness of our public documentation repository.
        </p>
        <p className={styles.text}>
          We implement industry-standard security measures including TLS encryption for all data in transit, encrypted storage for sensitive metadata, regular vulnerability assessments, and access controls restricting data processing to authorized engineering personnel.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>6. Your Rights & Choices</h2>
        <p className={styles.text}>
          Depending on your jurisdiction, you may have the following rights regarding your personal data:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}><strong>Right of Access:</strong> Request a copy of the personal data we hold about you.</li>
          <li className={styles.listItem}><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete personal data.</li>
          <li className={styles.listItem}><strong>Right to Erasure:</strong> Request deletion of your personal data, subject to legal retention obligations.</li>
          <li className={styles.listItem}><strong>Right to Object:</strong> Object to processing of your data for direct marketing or profiling purposes.</li>
          <li className={styles.listItem}><strong>Cookie Preferences:</strong> Manage your cookie consent settings through our dedicated Cookies Settings page.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>7. Children&apos;s Privacy</h2>
        <p className={styles.text}>
          ErrorCrate is not directed at individuals under the age of 13. We do not knowingly collect personal information from children. If we become aware that a child under 13 has provided us with personal data, we will take steps to delete such information from our servers promptly.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>8. Changes to This Policy</h2>
        <p className={styles.text}>
          We reserve the right to update this Privacy Policy at any time. When we make material changes, we will update the &quot;Last Updated&quot; date at the top of this document and, where appropriate, provide additional notice on our platform. Your continued use of ErrorCrate after any modifications constitutes acceptance of the updated policy.
        </p>
      </section>

      <div className={styles.contactBox}>
        <h3 className={styles.contactTitle}>Privacy Inquiries</h3>
        <p className={styles.contactText}>
          If you have questions about this Privacy Policy or wish to exercise your data rights, please contact our Data Protection team via our <a href="/contact" style={{ color: "#0074cc", textDecoration: "underline" }}>Contact Support</a> page.
        </p>
      </div>
    </div>
  );
}
