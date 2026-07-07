import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import Navbar from "@/components/Navbar";
import PageContainer from "@/components/PageContainer";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://errorcrate.com"),
  title: "ErrorCrate - Developer Error Wiki & Resolution Guide",
  description:
    "Troubleshoot programming errors with verified solutions, causes, and code examples. Search common issues across AWS, Docker, Node.js, Git, and HTTP Status Codes.",
  keywords: [
    "developer errors",
    "ECONNRESET",
    "404 Not Found",
    "Exit Code 137",
    "TypeError",
    "programming wiki",
    "troubleshooting",
    "debugging guides",
  ],
  authors: [{ name: "ErrorCrate Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body data-theme="light">
        <AppProvider>
          <Navbar />
          
          {/* Centered Page Layout */}
          <PageContainer>
            <MainLayoutWrapper>{children}</MainLayoutWrapper>
          </PageContainer>

          {/* SaaS Styled Bottom Footer */}
          <footer className={styles.footer}>
            <div className={styles.footerContainer}>
              <div className={styles.footerTop}>
                {/* Brand Column */}
                 <div className={styles.brandCol}>
                  <div className={styles.footerLogo}>
                    <span className={styles.logoIcon}>
                      <svg width="34" height="38" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Hollow Crate Bottom */}
                        <polygon points="4,14 16,8 28,14 16,20" fill="#EAEAEA" stroke="#BCBBBB" strokeWidth="2" strokeLinejoin="round" />
                        <polygon points="4,14 16,20 16,30 4,24" fill="#B6B5B5" stroke="#9A9898" strokeWidth="1.5" strokeLinejoin="round" />
                        <polygon points="16,20 28,14 28,24 16,30" fill="#D2D1D1" stroke="#B8B7B7" strokeWidth="1.5" strokeLinejoin="round" />
                        <line x1="4" y1="19" x2="16" y2="25" stroke="#8A8888" strokeWidth="1.5" />
                        <line x1="16" y1="25" x2="28" y2="19" stroke="#9E9C9C" strokeWidth="1.5" />

                        {/* Floating Warning Triangle (Error) */}
                        <polygon points="16,2 8,15 24,15" fill="#F48024" stroke="#E0731B" strokeWidth="1" strokeLinejoin="round" />
                        <line x1="16" y1="6" x2="16" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="16" cy="13" r="1" fill="white" />
                      </svg>
                    </span>
                    <span style={{ fontWeight: 800 }}>ErrorCrate</span>
                  </div>
                  <p className={styles.brandDesc}>
                    ErrorCrate empowers developer teams to troubleshoot, document, and resolve common compiler errors and runtime warnings. Discover root causes and fix issues faster.
                  </p>
                  
                  {/* Social Buttons */}
                  <div className={styles.socialRow}>
                    {/* X (Twitter) */}
                    <a
                      href="https://x.com/Harsha0129"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialIcon}
                      title="X / Twitter"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/errorcrate?igsh=NjR6M3JzMmF2eHd2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialIcon}
                      title="Instagram"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Column 1 */}
                <div className={styles.footerCol}>
                  <span className={styles.colTitle}>Product</span>
                  <ul className={styles.linkList}>
                    <li className={styles.linkItem}>
                      <Link href="/wiki" style={{ color: "inherit", textDecoration: "none" }}>Errors Wiki</Link>
                    </li>
                    <li className={styles.linkItem}>
                      <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Categories</Link>
                    </li>
                    <li className={styles.linkItem}>
                      <Link href="/request" style={{ color: "inherit", textDecoration: "none" }}>Request Error</Link>
                    </li>
                    <li className={styles.linkItem}>
                      <Link href="/changelog" style={{ color: "inherit", textDecoration: "none" }}>Changelog</Link>
                    </li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div className={styles.footerCol}>
                  <span className={styles.colTitle}>Resources</span>
                  <ul className={styles.linkList}>
                    <li className={styles.linkItem}>
                      <Link href="/help" style={{ color: "inherit", textDecoration: "none" }}>Help Center</Link>
                    </li>
                    <li className={styles.linkItem}>
                      <Link href="/blog" style={{ color: "inherit", textDecoration: "none" }}>Dev Blog</Link>
                    </li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div className={styles.footerCol}>
                  <span className={styles.colTitle}>Company</span>
                  <ul className={styles.linkList}>
                    <li className={styles.linkItem}>
                      <Link href="/about" style={{ color: "inherit", textDecoration: "none" }}>About Us</Link>
                    </li>
                    <li className={styles.linkItem}>
                      <Link href="/contact" style={{ color: "inherit", textDecoration: "none" }}>Contact Support</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Footer Bottom Row */}
              <div className={styles.footerBottom}>
                <div>
                  © {new Date().getFullYear()} ErrorCrate. All rights reserved.
                </div>
                <div className={styles.footerBottomLinks}>
                  <Link href="/privacy" className={styles.bottomLink} style={{ color: "inherit", textDecoration: "none" }}>Privacy Policy</Link>
                  <Link href="/terms" className={styles.bottomLink} style={{ color: "inherit", textDecoration: "none" }}>Terms of Service</Link>
                  <Link href="/cookies" className={styles.bottomLink} style={{ color: "inherit", textDecoration: "none" }}>Cookies Settings</Link>
                </div>
              </div>
            </div>

            {/* Faint Background Watermark Text */}
            <div className={styles.watermarkText}>ErrorCrate</div>
          </footer>
        </AppProvider>
      </body>
    </html>
  );
}
