import React from "react";
import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Cookie Settings — Cookie Usage, Consent & Management",
  description:
    "Understand how ErrorCrate uses cookies, session storage, and browser tracking technologies. Learn about essential, analytics, and advertising cookies and how to manage your preferences.",
  keywords: [
    "errorcrate cookies",
    "cookie policy",
    "cookie settings",
    "browser tracking",
    "analytics cookies",
    "advertising cookies",
    "GDPR cookie consent",
  ],
  alternates: {
    canonical: "https://www.errorcrate.com/cookies",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Cookie Settings — Cookie Usage, Consent & Management | ErrorCrate",
    description: "Understand how ErrorCrate uses cookies, session storage, and browser tracking technologies. Manage your cookie preferences.",
    url: "https://www.errorcrate.com/cookies",
    type: "website",
    siteName: "ErrorCrate",
  },
  twitter: {
    card: "summary",
    title: "Cookie Settings — ErrorCrate",
    description: "Learn how ErrorCrate uses cookies and manage your browser tracking preferences.",
  },
};

export default function CookiesSettingsPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.badge}>Legal Document</span>
        <h1 className={styles.title}>Cookie Settings & Policy</h1>
        <p className={styles.effectiveDate}>Effective Date: July 1, 2026 &middot; Last Updated: July 1, 2026</p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>1. What Are Cookies?</h2>
        <p className={styles.text}>
          Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work efficiently, provide reporting information to site operators, and enable various functional and analytical capabilities.
        </p>
        <p className={styles.text}>
          ErrorCrate uses cookies and similar technologies (including local storage and session storage) to enhance your browsing experience, remember your preferences, analyze platform usage patterns, and deliver contextually relevant advertising through third-party networks.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>2. Categories of Cookies We Use</h2>
        <p className={styles.text}>
          We classify the cookies used on our platform into the following categories based on their purpose and functionality:
        </p>

        <table className={styles.cookieTable}>
          <thead>
            <tr>
              <th>Category</th>
              <th>Purpose</th>
              <th>Duration</th>
              <th>Required</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Essential</strong></td>
              <td>Core platform functionality including session management, navigation state, theme preferences, and CSRF protection tokens.</td>
              <td>Session / 30 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><strong>Analytics</strong></td>
              <td>Aggregate usage metrics including page views, search queries, bounce rates, session duration, and navigation flow analysis for platform improvement.</td>
              <td>Up to 26 months</td>
              <td>No</td>
            </tr>
            <tr>
              <td><strong>Functional</strong></td>
              <td>User preference storage including selected theme (light/dark mode), recently viewed error categories, and search history for auto-suggestions.</td>
              <td>12 months</td>
              <td>No</td>
            </tr>
            <tr>
              <td><strong>Advertising</strong></td>
              <td>Third-party advertising cookies from Google AdSense and partner networks used to serve contextually relevant ads and measure advertising campaign performance.</td>
              <td>Up to 13 months</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>3. Essential Cookies (Strictly Necessary)</h2>
        <p className={styles.text}>
          Essential cookies are required for the basic operation of the ErrorCrate platform. Without these cookies, core features such as page navigation, user session persistence, and security protections cannot function properly. These cookies do not collect personally identifiable information and cannot be disabled through our cookie management interface.
        </p>
        <div className={styles.highlight}>
          <strong>Examples:</strong> Session identifiers that maintain your browsing state across page navigations, cross-site request forgery (CSRF) tokens that protect form submissions, and theme preference flags that persist your light or dark mode selection.
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>4. Analytics & Performance Cookies</h2>
        <p className={styles.text}>
          Analytics cookies help us understand how visitors interact with our platform by collecting and reporting information anonymously. This data enables our engineering team to identify the most frequently searched errors, measure the effectiveness of our diagnostic guides, and prioritize documentation improvements.
        </p>
        <p className={styles.text}>
          We use analytics services that process aggregate data including page view counts, average session durations, geographic distribution of visitors (country-level only), device type breakdowns, and search query frequencies. Individual user behavior is never tracked or correlated with personally identifiable information.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>5. Advertising Cookies</h2>
        <p className={styles.text}>
          ErrorCrate displays contextual advertisements through Google AdSense and affiliated advertising networks to sustain the free availability of our documentation platform. Advertising cookies enable these networks to serve relevant ads based on your browsing behavior across the web.
        </p>
        <p className={styles.text}>
          You may opt out of personalized advertising by visiting <strong>Google Ads Settings</strong> (adssettings.google.com), the <strong>Digital Advertising Alliance opt-out page</strong> (optout.aboutads.info), or the <strong>Network Advertising Initiative opt-out page</strong> (optout.networkadvertising.org). Opting out does not remove advertisements entirely; it replaces personalized ads with non-personalized alternatives.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>6. Managing Your Cookie Preferences</h2>
        <p className={styles.text}>
          You have multiple options to control and manage cookies on your device:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Browser Settings:</strong> Most modern browsers allow you to view, manage, and delete cookies through their privacy or security settings. You can configure your browser to block all cookies, accept only first-party cookies, or prompt you before accepting each cookie.
          </li>
          <li className={styles.listItem}>
            <strong>Google Chrome:</strong> Navigate to Settings → Privacy and Security → Cookies and other site data to manage cookie permissions and clear stored cookies.
          </li>
          <li className={styles.listItem}>
            <strong>Mozilla Firefox:</strong> Navigate to Settings → Privacy & Security → Cookies and Site Data to configure cookie handling and clear browsing data.
          </li>
          <li className={styles.listItem}>
            <strong>Safari:</strong> Navigate to Preferences → Privacy → Manage Website Data to review and remove stored cookies from specific websites.
          </li>
          <li className={styles.listItem}>
            <strong>Microsoft Edge:</strong> Navigate to Settings → Cookies and site permissions → Manage and delete cookies and site data.
          </li>
        </ul>
        <div className={styles.highlight}>
          <strong>Important:</strong> Disabling essential cookies may prevent certain features of the ErrorCrate platform from functioning correctly, including session management, theme persistence, and form submissions. We recommend keeping essential cookies enabled for the best browsing experience.
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>7. Third-Party Cookies</h2>
        <p className={styles.text}>
          In addition to our own cookies, third-party services integrated into ErrorCrate may place cookies on your device. These third parties operate under their own privacy policies, and we encourage you to review them:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}><strong>Google AdSense:</strong> Advertising delivery and performance measurement.</li>
          <li className={styles.listItem}><strong>Google Analytics:</strong> Aggregate usage analytics and traffic reporting.</li>
        </ul>
        <p className={styles.text}>
          We do not control the cookies placed by third-party services and are not responsible for their data collection practices. Please refer to the respective privacy policies of these services for detailed information about their cookie usage.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>8. Updates to This Cookie Policy</h2>
        <p className={styles.text}>
          We may update this Cookie Policy periodically to reflect changes in our cookie practices, new regulatory requirements, or updates to the third-party services we integrate. When we make material changes, we will update the &quot;Last Updated&quot; date at the top of this document. We encourage you to review this page regularly to stay informed about our cookie usage.
        </p>
      </section>

      <div className={styles.contactBox}>
        <h3 className={styles.contactTitle}>Cookie & Privacy Inquiries</h3>
        <p className={styles.contactText}>
          If you have questions about our cookie practices or wish to exercise your data rights, please contact our Data Protection team at <strong>harsha1029p@gmail.com</strong>.
        </p>
      </div>
    </div>
  );
}
