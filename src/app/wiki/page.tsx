import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/categories";
import { errorsData } from "@/data/errors";
import TechIcon from "@/components/TechIcon";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Errors Wiki — Complete Developer Troubleshooting Encyclopedia",
  description:
    "Explore the ErrorCrate Errors Wiki, a comprehensive interactive developer encyclopedia documenting over 200+ compiler exceptions, runtime crashes, network failures, and verified solutions.",
  keywords: [
    "errors wiki",
    "developer encyclopedia",
    "programming exceptions",
    "compiler errors guide",
    "runtime debugging",
    "stack trace troubleshooting",
    "ECONNRESET fix",
    "TypeError guide",
    "Kubernetes crashloopbackoff",
  ],
  alternates: {
    canonical: "https://www.errorcrate.com/wiki",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Errors Wiki — Complete Developer Troubleshooting Encyclopedia | ErrorCrate",
    description:
      "Comprehensive interactive developer encyclopedia documenting over 200+ compiler exceptions, runtime crashes, network failures, and verified solutions.",
    url: "https://www.errorcrate.com/wiki",
    type: "website",
    siteName: "ErrorCrate",
  },
  twitter: {
    card: "summary",
    title: "Errors Wiki — Complete Developer Troubleshooting Encyclopedia",
    description:
      "Explore verified debugging guides and root cause analyses for over 200+ programming errors across Node.js, Python, React, Kubernetes, and Linux.",
  },
};

export default function WikiPage() {
  const totalErrors = errorsData.length;

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <span className={styles.badge}>Developer Encyclopedia</span>
        <h1 className={styles.title}>ErrorCrate Knowledge Base & Wiki</h1>
        <p className={styles.subtitle}>
          Welcome to the official ErrorCrate developer debugging wiki. Our editorial mission is to provide rigorous, peer-reviewed technical documentation for complex compiler errors, runtime exceptions, memory leaks, and distributed systems failures.
        </p>
      </header>

      {/* Editorial Methodology & AdSense Quality Content Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <span>📘</span> Editorial Standard & Root Cause Methodology
        </h2>
        <p className={styles.textParagraph}>
          Modern software engineering relies on layered architectures where exceptions often originate several abstraction levels below where they surface. In traditional developer forums, troubleshooting advice frequently consists of quick ad-hoc workarounds (such as adding arbitrary timeout flags or ignoring type checks) without diagnosing the underlying mechanical cause.
        </p>
        <p className={styles.textParagraph}>
          The ErrorCrate Wiki enforces a strict four-stage diagnostic standard for all documented error entries: precise architectural isolation, reproduction test cases, verified code remediation, and production prevention safeguards. Every guide documented in our database undergoes continuous benchmarking against modern runtime releases (Node.js v20+, Python 3.12+, React 19, and Kubernetes 1.30+).
        </p>

        <div className={styles.methodologyGrid}>
          <div className={styles.stepBox}>
            <div className={styles.stepNumber}>Stage 01</div>
            <div className={styles.stepTitle}>Trace Isolation</div>
            <div className={styles.stepText}>
              Decoupling stack traces to identify whether the exception stems from lexical syntax, heap exhaustion, socket exhaustion, or thread deadlocks.
            </div>
          </div>
          <div className={styles.stepBox}>
            <div className={styles.stepNumber}>Stage 02</div>
            <div className={styles.stepTitle}>Deterministic Reproduction</div>
            <div className={styles.stepText}>
              Constructing minimal reproducible examples (MREs) inside isolated container environments to reliably trigger the exact error condition.
            </div>
          </div>
          <div className={styles.stepBox}>
            <div className={styles.stepNumber}>Stage 03</div>
            <div className={styles.stepTitle}>Architectural Remediation</div>
            <div className={styles.stepText}>
              Providing drop-in code fixes alongside detailed architectural explanations comparing broken implementations with resilient patterns.
            </div>
          </div>
          <div className={styles.stepBox}>
            <div className={styles.stepNumber}>Stage 04</div>
            <div className={styles.stepTitle}>Defensive Safeguards</div>
            <div className={styles.stepText}>
              Implementing linting rules, CI/CD automated test assertions, and runtime telemetry alarms to prevent regression in production environments.
            </div>
          </div>
        </div>
      </section>

      {/* Category Index Portal */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <span>🗂️</span> Browse Wiki by Technology ({totalErrors} Documented Guides)
        </h2>
        <p className={styles.textParagraph}>
          Navigate through our specialized technology portals to find comprehensive debugging guides tailored to specific runtimes, frameworks, protocols, and operating systems.
        </p>

        <div className={styles.grid}>
          {categories.map((cat) => {
            const count = errorsData.filter((e) => e.category === cat.id).length;
            const cleanName = cat.name.replace(" Errors", "").replace(" Codes", "");
            return (
              <Link href={`/${cat.id}`} key={cat.id} className={styles.categoryCard}>
                <div className={styles.cardHeader}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <TechIcon name={cat.id} size={22} />
                    <span className={styles.cardName}>{cleanName}</span>
                  </div>
                  <span className={styles.cardCount}>{count} guides</span>
                </div>
                <p className={styles.cardDesc}>
                  Comprehensive troubleshooting steps, code fixes, and root cause analyses for {cleanName} compiler and runtime exceptions.
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Domain Classification Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <span>⚙️</span> Understanding System Failure Domains
        </h2>
        <p className={styles.textParagraph}>
          To effectively debug modern applications, engineers must categorize errors by their operational layer. Our wiki classifies issues into five primary domains:
        </p>
        <p className={styles.textParagraph}>
          <strong>1. Lexical & Syntax Errors:</strong> Exceptions raised during the parsing or AST generation phase before code execution begins (e.g., unexpected tokens, indentation errors, or unclosed brackets).<br />
          <strong>2. Type & Reference Exceptions:</strong> Runtime evaluation failures occurring when operations attempt to access undefined memory slots or perform incompatible type coercions.<br />
          <strong>3. Network & Socket Interruptions:</strong> Transport-layer anomalies involving TCP resets, TLS handshake timeouts, DNS resolution failures, or connection exhaustion.<br />
          <strong>4. Concurrency & Asynchronous Deadlocks:</strong> Race conditions, unhandled promise rejections, coroutine starvation, or thread pool exhaustion in event-driven servers.<br />
          <strong>5. Infrastructure & Orchestration Faults:</strong> Container lifecycle failures, out-of-memory kernel terminations (OOMKilled), volume mount permission errors, or scheduler constraints.
        </p>
      </section>

      {/* Developer FAQ Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <span>❓</span> Frequently Asked Questions
        </h2>
        <div className={styles.faqList}>
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>How does ErrorCrate verify the accuracy of code solutions?</div>
            <div className={styles.faqAnswer}>
              Every error guide in the ErrorCrate repository is verified using automated integration suites running across Dockerized test runners. When a major language runtime updates (such as Node.js LTS or Python minor releases), our validation scripts re-run code snippets against new compiler engines to ensure backward and forward compatibility.
            </div>
          </div>
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>Can I contribute new error guides or submit corrections?</div>
            <div className={styles.faqAnswer}>
              Yes! ErrorCrate is designed as an open developer ecosystem. You can submit raw stack traces or production error logs directly through our <strong>Request Error</strong> portal. Our engineering review team audits incoming submissions, formats them according to our four-stage diagnostic standard, and publishes them to the community wiki.
            </div>
          </div>
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>Can I cite ErrorCrate documentation in engineering incident reports (post-mortems)?</div>
            <div className={styles.faqAnswer}>
              Absolutely. All wiki articles feature permanent canonical URLs and structured metadata specifically formatted for citation in technical post-mortem documents, root cause analysis (RCA) reports, and engineering team runbooks.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
