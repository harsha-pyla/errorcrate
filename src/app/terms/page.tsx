import React from "react";
import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Terms of Service — Platform Usage Agreement & Conditions",
  description:
    "Read the ErrorCrate Terms of Service. Understand the conditions governing access to our developer debugging wiki, content submission, intellectual property rights, and acceptable use policies.",
  keywords: [
    "errorcrate terms of service",
    "platform usage agreement",
    "developer wiki terms",
    "content submission policy",
    "intellectual property",
    "acceptable use policy",
  ],
  alternates: {
    canonical: "https://www.errorcrate.com/terms",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Terms of Service — Platform Usage Agreement & Conditions | ErrorCrate",
    description: "Understand the conditions governing access to ErrorCrate, content submission, intellectual property rights, and acceptable use policies.",
    url: "https://www.errorcrate.com/terms",
    type: "website",
    siteName: "ErrorCrate",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service — ErrorCrate",
    description: "Read the ErrorCrate Terms of Service governing platform access, content licensing, and acceptable use.",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.badge}>Legal Document</span>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.effectiveDate}>Effective Date: July 1, 2026 &middot; Last Updated: July 1, 2026</p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
        <p className={styles.text}>
          By accessing or using the ErrorCrate platform (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). These Terms constitute a legally binding agreement between you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and ErrorCrate (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). If you do not agree to these Terms, you must immediately discontinue use of the Service.
        </p>
        <p className={styles.text}>
          We reserve the right to modify these Terms at any time. Material changes will be communicated through prominent notice on the platform. Your continued use of the Service after such modifications constitutes acceptance of the updated Terms.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>2. Description of Service</h2>
        <p className={styles.text}>
          ErrorCrate is a free, publicly accessible developer documentation platform that provides structured troubleshooting guides, root cause analyses, and verified code remediation patterns for programming errors, compiler exceptions, runtime warnings, and infrastructure failures.
        </p>
        <p className={styles.text}>
          The Service includes, but is not limited to: browsing the error knowledge repository, searching the diagnostic database, submitting error reports through our Request Error portal, and utilizing our Paste & Diagnose fuzzy-matching engine.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>3. User Conduct & Acceptable Use</h2>
        <p className={styles.text}>
          You agree to use the Service only for lawful purposes and in accordance with these Terms. You are prohibited from:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Malicious Submissions:</strong> Uploading code snippets containing malware, backdoors, credential harvesting scripts, or intentionally destructive commands designed to harm other users&apos; systems.
          </li>
          <li className={styles.listItem}>
            <strong>Automated Scraping:</strong> Using bots, crawlers, or automated tools to systematically download, replicate, or redistribute substantial portions of our documentation database without prior written authorization.
          </li>
          <li className={styles.listItem}>
            <strong>Credential Exposure:</strong> Submitting error reports or stack traces containing unredacted production credentials, API keys, database passwords, private SSH keys, or authentication tokens.
          </li>
          <li className={styles.listItem}>
            <strong>Service Disruption:</strong> Attempting to overload, disrupt, or interfere with the normal operation of our servers, networks, or infrastructure through denial-of-service attacks, excessive API requests, or exploit attempts.
          </li>
          <li className={styles.listItem}>
            <strong>Misrepresentation:</strong> Impersonating other users, organizations, or ErrorCrate staff members, or falsely claiming affiliation with our editorial team.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>4. Intellectual Property & Content Licensing</h2>
        <p className={styles.text}>
          All original editorial content, documentation structure, visual design elements, brand assets, and platform source code are the exclusive intellectual property of ErrorCrate and are protected by applicable copyright, trademark, and intellectual property laws.
        </p>
        <div className={styles.highlight}>
          <strong>User Submissions:</strong> When you submit error reports, stack traces, or code snippets through our platform, you grant ErrorCrate a non-exclusive, royalty-free, worldwide, perpetual license to use, modify, publish, and distribute the submitted content for the purpose of maintaining and improving our public documentation repository.
        </div>
        <p className={styles.text}>
          You retain ownership of your original submissions but acknowledge that published content will be made publicly accessible as part of our community knowledge base. You represent and warrant that you have the right to submit all content and that your submissions do not infringe upon any third-party intellectual property rights.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>5. Disclaimer of Warranties</h2>
        <p className={styles.text}>
          The Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
        </p>
        <p className={styles.text}>
          While we strive to ensure the accuracy and reliability of all documented solutions, we do not guarantee that code snippets, configuration examples, or troubleshooting instructions will resolve every instance of a given error in every environment. Production deployment of any solution found on ErrorCrate should be preceded by thorough testing in staging environments.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>6. Limitation of Liability</h2>
        <p className={styles.text}>
          To the maximum extent permitted by applicable law, ErrorCrate and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service, including but not limited to data loss, system downtime, revenue loss, or damages resulting from the application of code solutions obtained from our platform.
        </p>
        <p className={styles.text}>
          Our total cumulative liability for any claims arising from or related to the Service shall not exceed the amount you have paid to ErrorCrate, if any, in the twelve (12) months preceding the claim.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>7. Third-Party Links & Integrations</h2>
        <p className={styles.text}>
          The Service may contain links to third-party websites, documentation portals, package registries, or external developer tools. These links are provided for convenience and informational purposes only. ErrorCrate does not endorse, control, or assume responsibility for the content, privacy policies, or practices of any third-party services.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>8. Termination</h2>
        <p className={styles.text}>
          We reserve the right to suspend or terminate your access to the Service at our sole discretion, without prior notice, for conduct that violates these Terms, is harmful to other users, or is otherwise objectionable. Upon termination, your right to use the Service will immediately cease.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>9. Governing Law</h2>
        <p className={styles.text}>
          These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts.
        </p>
      </section>

      <div className={styles.contactBox}>
        <h3 className={styles.contactTitle}>Legal Inquiries</h3>
        <p className={styles.contactText}>
          For questions about these Terms of Service, please contact our legal team at <strong>harsha1029p@gmail.com</strong>.
        </p>
      </div>
    </div>
  );
}
