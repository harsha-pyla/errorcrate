import React from "react";
import { Metadata } from "next";
import ContactFormClient from "./ContactFormClient";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact Support — Reach the ErrorCrate Engineering Team",
  description:
    "Get in touch with the ErrorCrate support team. Submit bug reports, request new error documentation, report incorrect solutions, or share feedback about our developer debugging platform.",
  keywords: [
    "contact errorcrate",
    "developer support",
    "report bug",
    "request documentation",
    "feedback",
    "error correction",
    "technical support",
  ],
  alternates: {
    canonical: "https://www.errorcrate.com/contact",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Contact Support — Reach the ErrorCrate Engineering Team",
    description: "Submit bug reports, request documentation, or share feedback with the ErrorCrate team.",
    url: "https://www.errorcrate.com/contact",
    type: "website",
    siteName: "ErrorCrate",
  },
  twitter: {
    card: "summary",
    title: "Contact Support — ErrorCrate",
    description: "Reach the ErrorCrate engineering team for support, bug reports, and documentation requests.",
  },
};

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.badge}>Support & Feedback</span>
        <h1 className={styles.title}>Contact Support</h1>
        <p className={styles.subtitle}>
          Have a question, found an incorrect solution, or want to request documentation for an undocumented error? Our engineering support team is here to help.
        </p>
      </header>

      {/* Support Categories */}
      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>🐛</div>
          <h3 className={styles.cardTitle}>Report a Bug</h3>
          <p className={styles.cardText}>
            Found a broken link, rendering issue, or incorrect code snippet on the platform? Let us know so our engineering team can investigate and deploy a fix promptly. Please include the specific error page URL and a description of the issue.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>📝</div>
          <h3 className={styles.cardTitle}>Request New Documentation</h3>
          <p className={styles.cardText}>
            Encountered an error that is not yet documented in our repository? Submit the raw stack trace, compiler output, or error message through our contact form and our editorial review board will prioritize it for publication.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>✏️</div>
          <h3 className={styles.cardTitle}>Correction Requests</h3>
          <p className={styles.cardText}>
            If you discover an outdated code fix, deprecated API reference, or inaccurate root cause explanation in any of our 220+ guides, please submit a correction request. We take solution accuracy extremely seriously.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>💬</div>
          <h3 className={styles.cardTitle}>General Feedback</h3>
          <p className={styles.cardText}>
            We welcome feedback about the platform experience, design improvements, feature suggestions, or partnership inquiries. Your input directly shapes the development roadmap of ErrorCrate.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <section className={styles.formSection}>
        <h2 className={styles.formTitle}>Send Us a Message</h2>
        <p className={styles.formSubtitle}>
          Fill out the form below and our support team will respond within 24–48 business hours.
        </p>
        <ContactFormClient />
      </section>

      {/* Direct Contact */}
      <div className={styles.directBox}>
        <h3 className={styles.directTitle}>Prefer Email?</h3>
        <p className={styles.directText}>
          You can reach us directly at:
        </p>
        <a href="mailto:harsha1029p@gmail.com" className={styles.emailLink}>
          harsha1029p@gmail.com
        </a>
      </div>
    </div>
  );
}
