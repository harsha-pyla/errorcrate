"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ErrorInfo, Category } from "@/types";
import { supabase } from "@/lib/supabase";
import styles from "./error.module.css";

interface ErrorPageClientProps {
  error: ErrorInfo;
  category?: Category;
}

export default function ErrorPageClient({ error, category }: ErrorPageClientProps) {
  const getTestedOnPlatforms = (catId: string): string[] => {
    switch (catId) {
      case "aws":
        return ["AWS CLI v2", "Amazon S3", "June 2026"];
      case "kubernetes":
        return ["Kubectl v1.30", "Minikube v1.32", "Helm v3.14", "June 2026"];
      case "docker":
        return ["Docker Engine v26.0", "Docker Compose v2.24", "June 2026"];
      case "git":
        return ["Git CLI v2.44", "GitHub API", "June 2026"];
      case "linux":
        return ["Ubuntu 22.04 LTS", "Bash Shell v5.1", "June 2026"];
      case "python":
        return ["CPython v3.12", "PIP v24.0", "June 2026"];
      case "react":
        return ["React v19.0", "Next.js 16", "June 2026"];
      case "nodejs":
        return ["Node.js v20 LTS", "NPM v10.2", "June 2026"];
      case "javascript":
        return ["V8 Engine v11.3", "ECMAScript 2023", "June 2026"];
      case "http-status":
      default:
        return ["Google Chrome", "Node.js v20 LTS", "June 2026"];
    }
  };

  // Active sub-tab selections for framework and server code examples
  const [selectedFramework, setSelectedFramework] = useState(0);
  const [selectedServer, setSelectedServer] = useState(0);

  const frameworkExample = error.frameworkExamples && error.frameworkExamples.length > 0
    ? error.frameworkExamples[selectedFramework]
    : null;

  const serverExample = error.serverExamples && error.serverExamples.length > 0
    ? error.serverExamples[selectedServer]
    : null;

  // States for copy feedback indicators
  const [copiedReq, setCopiedReq] = useState(false);
  const [copiedRes, setCopiedRes] = useState(false);
  const [copiedSingle, setCopiedSingle] = useState(false);
  const [copiedFramework, setCopiedFramework] = useState(false);
  const [copiedServer, setCopiedServer] = useState(false);
  const [improvementDone, setImprovementDone] = useState(false);
  const [solvedDone, setSolvedDone] = useState(false);
  const [unsolvedDone, setUnsolvedDone] = useState(false);
  const [userVote, setUserVote] = useState<'solved' | 'unsolved' | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`error_vote_${error.id}`);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.pageLastUpdated === error.updatedAt) {
          setUserVote(parsed.type);
        } else {
          localStorage.removeItem(`error_vote_${error.id}`);
        }
      }
    } catch (e) {
      console.error("Failed to load vote:", e);
    }
  }, [error.id, error.updatedAt]);

  // Scroll spy active tab indicator
  const [activeTab, setActiveTab] = useState("overview");

  // State hooks for Syntax Error Finder
  const [code, setCode] = useState(`function test() {\n  console.log("Hello"\n}`);
  const [parseError, setParseError] = useState<string | null>("missing ) after argument list");

  const checkSyntax = (val: string) => {
    setCode(val);
    try {
      new Function(val);
      setParseError(null);
    } catch (err: any) {
      setParseError(err.message);
    }
  };

  // Copy code handlers
  const handleCopyRequest = async () => {
    if (!error.exampleRequest) return;
    try {
      await navigator.clipboard.writeText(error.exampleRequest.code);
      setCopiedReq(true);
      setTimeout(() => setCopiedReq(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCopyResponse = async () => {
    if (!error.exampleResponse) return;
    try {
      await navigator.clipboard.writeText(error.exampleResponse.code);
      setCopiedRes(true);
      setTimeout(() => setCopiedRes(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCopySingle = async () => {
    try {
      await navigator.clipboard.writeText(error.example.code);
      setCopiedSingle(true);
      setTimeout(() => setCopiedSingle(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCopyFramework = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedFramework(true);
      setTimeout(() => setCopiedFramework(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCopyServer = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedServer(true);
      setTimeout(() => setCopiedServer(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  // Scroll navigation handler
  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Dynamic color helper for metadata tag capsules
  const getBadgeClass = (badge: string) => {
    const b = badge.toLowerCase();
    if (b.includes("node.js error") || b.includes("success")) {
      return styles.badgeGreen;
    }
    if (b.includes("client error") || b.includes("4xx") || b.includes("5xx") || b.includes("server error") || b.includes("critical")) {
      return styles.badgeRed;
    }
    if (b.includes("runtime error") || b.includes("common") || b.includes("http")) {
      return styles.badgeBlue;
    }
    if (b.includes("medium") || b.includes("rarer")) {
      return styles.badgeOrange;
    }
    return styles.badgeGrey;
  };

  const isHttpStatus = error.category === "http-status";

  return (
    <div className={`${styles.wikiPage} animated-fade`}>
      {/* 1. Breadcrumbs */}
      <nav className={styles.breadcrumbs}>
        <Link href="/" className={styles.breadcrumbLink}>
          Home
        </Link>
        <span className={styles.breadcrumbSeparator}>›</span>
        {category && (
          <Link href={`/${category.id}`} className={styles.breadcrumbLink}>
            {category.name}
          </Link>
        )}
        <span className={styles.breadcrumbSeparator}>›</span>
        <span className={styles.breadcrumbActive}>{error.name}</span>
      </nav>

      {/* 2. Main Title */}
      <h1 className={styles.title}>{error.name}</h1>

      {/* 3. Badges Row */}
      <div className={styles.metaRow}>
        {error.badges.map((badge, idx) => (
          <span key={idx} className={`${styles.metaBadge} ${getBadgeClass(badge)}`}>
            {badge}
          </span>
        ))}

        {isHttpStatus && (
          <span className={styles.metaItem}>
            Status Code: <strong>{error.name.split(" ")[0]}</strong>
          </span>
        )}

        <span className={styles.metaItem}>
          Last updated: <strong>{error.updatedAt}</strong>
        </span>

        <span className={styles.metaItem}>
          Tested on:
          {getTestedOnPlatforms(error.category).map((plat, idx) => (
            <span key={idx} className={styles.testBadge}>
              {plat}
            </span>
          ))}
        </span>
      </div>

      {/* 4. Short Description */}
      <p className={styles.shortDesc}>{error.shortDescription}</p>

      {/* Quick Fix Box */}
      {error.quickFix && (
        <div className={styles.quickFixBox}>
          <div className={styles.quickFixHeader}>
            <span className={styles.quickFixTitle}>❌ {error.name} Quick Fix</span>
            <span className={styles.quickFixTime}>⏱️ Est. Fix Time: {error.quickFix.estimatedTime}</span>
          </div>
          <div className={styles.quickFixGrid}>
            <div>
              <h4 className={styles.quickFixSub}>Usually happens because:</h4>
              <ul className={styles.quickFixList}>
                {error.quickFix.causes.map((cause, idx) => (
                  <li key={idx} className={styles.quickFixItem}>
                    <span className={styles.quickFixCheckIcon}>☑</span> {cause}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className={styles.quickFixSub}>🔍 Quick Checklist:</h4>
              <ul className={styles.quickFixChecklist}>
                {error.quickFix.checklist.map((item, idx) => (
                  <li key={idx} className={styles.quickFixCheckItem}>
                    <label className={styles.quickFixLabel}>
                      <input type="checkbox" className={styles.quickFixCheckbox} />
                      <span>{item}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Common Occurrence Breakdown */}
      {error.commonOccurrence && error.commonOccurrence.length > 0 && (
        <div className={styles.occurrenceBox}>
          <h4 className={styles.occurrenceTitle}>📊 Where this usually happens (estimated occurrence)</h4>
          <div className={styles.occurrenceList}>
            {error.commonOccurrence.map((item, idx) => (
              <div key={idx} className={styles.occurrenceItem}>
                <div className={styles.occurrenceLabelRow}>
                  <span className={styles.occurrenceLabel}>{item.scenario}</span>
                  <span className={styles.occurrenceValue}>{item.frequency}</span>
                </div>
                <div className={styles.occurrenceBarTrack}>
                  <div 
                    className={styles.occurrenceBarFill} 
                    style={{ width: item.frequency }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Syntax Error Finder (Only for SyntaxError page) */}
      {error.id === "syntaxerror" && (
        <div className={styles.syntaxFinderBox}>
          <h4 className={styles.syntaxFinderTitle}>🛠️ Live Syntax Error Finder</h4>
          <p className={styles.syntaxFinderDesc}>Paste your JavaScript code below to analyze unmatched parentheses, brackets, or invalid grammar formats instantly.</p>
          <textarea
            className={styles.syntaxFinderTextarea}
            value={code}
            onChange={(e) => checkSyntax(e.target.value)}
            placeholder="Paste your JS code here..."
          />
          {parseError ? (
            <div className={styles.syntaxFinderAlertError}>
              <strong>❌ Syntax Error Detected:</strong>
              <p>{parseError}</p>
            </div>
          ) : (
            <div className={styles.syntaxFinderAlertSuccess}>
              <strong>✅ Syntax Valid!</strong> The JavaScript engine successfully parsed the code layout.
            </div>
          )}
        </div>
      )}

      {/* 5. Document Navigation Tabs */}
      <nav className={styles.tabBar}>
        <button
          className={`${styles.tab} ${activeTab === "overview" ? styles.tabActive : ""}`}
          onClick={() => scrollToSection("overview")}
        >
          Overview
        </button>
        <button
          className={`${styles.tab} ${activeTab === "causes" ? styles.tabActive : ""}`}
          onClick={() => scrollToSection("causes")}
        >
          Causes
        </button>
        <button
          className={`${styles.tab} ${activeTab === "solutions" ? styles.tabActive : ""}`}
          onClick={() => scrollToSection("solutions")}
        >
          How to Fix
        </button>
        <button
          className={`${styles.tab} ${activeTab === "examples" ? styles.tabActive : ""}`}
          onClick={() => scrollToSection("examples")}
        >
          Examples
        </button>
        {error.prevention && error.prevention.length > 0 && (
          <button
            className={`${styles.tab} ${activeTab === "prevention" ? styles.tabActive : ""}`}
            onClick={() => scrollToSection("prevention")}
          >
            {isHttpStatus ? "Prevention" : "Best Practices"}
          </button>
        )}
        {error.faq && error.faq.length > 0 && (
          <button
            className={`${styles.tab} ${activeTab === "faq" ? styles.tabActive : ""}`}
            onClick={() => scrollToSection("faq")}
          >
            FAQ
          </button>
        )}
      </nav>

      {/* 6. Main Document Content */}
      <div className={styles.contentBody}>
        
        {/* SECTION 1: Overview */}
        <section id="overview" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            {isHttpStatus ? "Meaning" : `What is ${error.name}?`}
          </h2>
          <p className={styles.bodyText}>{error.meanDescription}</p>
        </section>

        {/* SECTION 2: Causes */}
        <section id="causes" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            {isHttpStatus ? "Root Causes" : "Common Causes"}
          </h2>
          <ul className={styles.bulletList} style={{ marginBottom: "24px" }}>
            {error.causes.map((cause, idx) => (
              <li key={idx} className={styles.bulletItem}>
                {cause}
              </li>
            ))}
          </ul>

          {error.causesTable && error.causesTable.length > 0 && (
            <div className={styles.causesTableContainer}>
              <table className={styles.causesTable}>
                <thead>
                  <tr>
                    <th>Cause</th>
                    <th>Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {error.causesTable.map((row, idx) => (
                    <tr key={idx}>
                      <td>{row.cause}</td>
                      <td className={styles.starsCell}>{row.frequency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {error.commonMistakes && error.commonMistakes.length > 0 && (
            <>
              <h3 className={styles.sectionTitle} style={{ fontSize: "1.15rem", marginTop: "24px" }}>Common Mistakes</h3>
              <ul className={styles.bulletList}>
                {error.commonMistakes.map((mistake, idx) => (
                  <li key={idx} className={styles.bulletItem} style={{ color: "#d03939" }}>
                    {mistake}
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>

        {/* SECTION 3: Solutions (How to Fix) */}
        <section id="solutions" className={styles.section}>
          <h2 className={styles.sectionTitle}>How to Fix</h2>
          <div className={styles.solutionsList}>
            {error.solutions.map((solution, idx) => (
              <div key={idx} className={styles.solutionStep}>
                <span className={styles.stepNumber}>{idx + 1}</span>
                <span className={styles.stepText}>{solution}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: Examples (Framework & Server setups) */}
        <section id="examples" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            {error.category === "docker" || error.category === "git" || error.category === "linux" || error.category === "python" || error.category === "kubernetes" || error.category === "aws"
              ? `${error.category === "docker" ? "Docker" : error.category === "git" ? "Git" : error.category === "linux" ? "Linux" : error.category === "python" ? "Python" : error.category === "kubernetes" ? "Kubernetes" : "AWS"} Operations & Verification`
              : "Framework-Specific Examples"}
          </h2>
          {error.frameworkExamples && error.frameworkExamples.length > 0 && frameworkExample ? (
            <div className={styles.nestedCodeSelector}>
              <div className={styles.selectorTabBar}>
                {error.frameworkExamples.map((ex, idx) => (
                  <button
                    key={idx}
                    className={`${styles.selectorTab} ${selectedFramework === idx ? styles.selectorTabActive : ""}`}
                    onClick={() => setSelectedFramework(idx)}
                  >
                    {ex.name}
                  </button>
                ))}
              </div>
              <div className={styles.selectorContent}>
                <p className={styles.exampleDesc}>{frameworkExample.description}</p>
                <div className={styles.codeContainer}>
                  <div className={styles.codeHeader}>
                    <span className={styles.codeTitle}>
                      {frameworkExample.name} Example
                    </span>
                    <button
                      className={styles.copyBtn}
                      onClick={() => handleCopyFramework(frameworkExample.code)}
                    >
                      {copiedFramework ? "copied!" : "Copy Code"}
                    </button>
                  </div>
                  <pre className={styles.codeBody}>
                    <code className={styles.codePre}>
                      {frameworkExample.code}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          ) : (
            <p className={styles.bodyText} style={{ fontStyle: "italic", color: "var(--text-muted)" }}>
              No framework examples required for this informational status.
            </p>
          )}

          {error.serverExamples && error.serverExamples.length > 0 && serverExample && (
            <>
              <h2 className={styles.sectionTitle} style={{ marginTop: "28px" }}>
                {error.category === "docker" || error.category === "git" || error.category === "linux" || error.category === "python" || error.category === "kubernetes" || error.category === "aws" ? "Platform Specific Fixes" : "Server Configuration Examples"}
              </h2>
              <div className={styles.nestedCodeSelector}>
                <div className={styles.selectorTabBar}>
                  {error.serverExamples.map((ex, idx) => (
                    <button
                      key={idx}
                      className={`${styles.selectorTab} ${selectedServer === idx ? styles.selectorTabActive : ""}`}
                      onClick={() => setSelectedServer(idx)}
                    >
                      {ex.name}
                    </button>
                  ))}
                </div>
                <div className={styles.selectorContent}>
                  <p className={styles.exampleDesc}>{serverExample.description}</p>
                  <div className={styles.codeContainer}>
                    <div className={styles.codeHeader}>
                      <span className={styles.codeTitle}>
                        {serverExample.name} Config
                      </span>
                      <button
                        className={styles.copyBtn}
                        onClick={() => handleCopyServer(serverExample.code)}
                      >
                        {copiedServer ? "copied!" : "Copy Code"}
                      </button>
                    </div>
                    <pre className={styles.codeBody}>
                      <code className={styles.codePre}>
                        {serverExample.code}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Fallback to dual or single code headers */}
          {(!error.frameworkExamples || error.frameworkExamples.length === 0) && (
            <div style={{ marginTop: "24px" }}>
              {error.exampleRequest && error.exampleResponse ? (
                <div className={styles.dualCodeGrid}>
                  <div className={styles.codeCol}>
                    <h4 className={styles.codeBlockLabel}>{error.exampleRequest.title}</h4>
                    <div className={styles.codeContainer}>
                      <div className={styles.codeHeader}>
                        <span className={styles.codeTitle}>HTTP Request</span>
                        <button className={styles.copyBtn} onClick={handleCopyRequest}>
                          {copiedReq ? "copied!" : "Copy"}
                        </button>
                      </div>
                      <pre className={styles.codeBody}>
                        <code className={styles.codePre}>{error.exampleRequest.code}</code>
                      </pre>
                    </div>
                  </div>
                  <div className={styles.codeCol}>
                    <h4 className={styles.codeBlockLabel}>{error.exampleResponse.title}</h4>
                    <div className={styles.codeContainer}>
                      <div className={styles.codeHeader}>
                        <span className={styles.codeTitle}>HTTP Response</span>
                        <button className={styles.copyBtn} onClick={handleCopyResponse}>
                          {copiedRes ? "copied!" : "Copy"}
                        </button>
                      </div>
                      <pre className={styles.codeBody}>
                        <code className={styles.codePre}>{error.exampleResponse.code}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={styles.codeContainer}>
                  <div className={styles.codeHeader}>
                    <span className={styles.codeTitle}>
                      {error.example.title} (.{error.example.language})
                    </span>
                    <button className={styles.copyBtn} onClick={handleCopySingle}>
                      {copiedSingle ? "copied!" : "Copy Code"}
                    </button>
                  </div>
                  <pre className={styles.codeBody}>
                    <code className={styles.codePre}>{error.example.code}</code>
                  </pre>
                </div>
              )}
            </div>
          )}
        </section>

        {/* SECTION 5: Prevention / Best Practices */}
        {error.prevention && error.prevention.length > 0 && (
          <section id="prevention" className={styles.section}>
            <h2 className={styles.sectionTitle}>
              {isHttpStatus ? "Prevention" : "Best Practices"}
            </h2>
            <ul className={styles.bulletList}>
              {error.prevention.map((prev, idx) => (
                <li key={idx} className={styles.bulletItem} style={{ color: "#2e7d32" }}>
                  {prev}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* SECTION 7: FAQ */}
        {error.faq && error.faq.length > 0 && (
          <section id="faq" className={styles.section} style={{ borderBottom: "none", paddingBottom: 0 }}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions (FAQ)</h2>
            <div className={styles.faqList} style={{ marginBottom: "28px" }}>
              {error.faq.map((item, idx) => (
                <div key={idx} className={styles.faqItem} style={{ marginBottom: "20px" }}>
                  <h4 className={styles.faqQuestion} style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text-dark)", marginBottom: "6px" }}>
                    Q: {item.question}
                  </h4>
                  <p className={styles.faqAnswer} style={{ fontSize: "0.925rem", color: "#3b4045", lineHeight: 1.5, paddingLeft: "18px" }}>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
      {/* 7. Still having this problem CTA Section */}
      <div className={styles.optionsContainer}>
        <h3 className={styles.optionsTitle}>Still having this problem?</h3>
        <p className={styles.optionsSubtitle}>Didn&apos;t solve your problem?</p>
        
        <div className={styles.optionsGrid}>
          {/* Improvment */}
          <button
            onClick={async () => {
              if (improvementDone) return;
              setImprovementDone(true);
              setTimeout(() => setImprovementDone(false), 3000);
              try {
                await supabase.from("improvements").insert([
                  { error_id: error.id, error_name: error.name }
                ]);
              } catch (err) {
                console.error(err);
              }
            }}
            className={`${styles.optionBox} ${improvementDone ? styles.optionBoxSuccess : ""}`}
          >
            {improvementDone ? (
              <span className={styles.optionSuccessText}>✓ Done!</span>
            ) : (
              <span>Improvment</span>
            )}
          </button>

          {/* Suggest */}
          <Link
            href={`/contact?subject=${encodeURIComponent(`Suggestion: ${error.name}`)}`}
            className={styles.optionBox}
          >
            Suggest
          </Link>

          {/* Request Error */}
          <Link
            href={`/request?error=${encodeURIComponent(error.name)}`}
            className={styles.optionBox}
          >
            Request Error
          </Link>

          {/* 👍 Solved */}
          <button
            onClick={async () => {
              if (userVote) return;
              setUserVote("solved");
              setSolvedDone(true);
              setTimeout(() => setSolvedDone(false), 3000);
              try {
                localStorage.setItem(`error_vote_${error.id}`, JSON.stringify({
                  type: "solved",
                  timestamp: new Date().toISOString(),
                  pageLastUpdated: error.updatedAt
                }));
              } catch (e) {
                console.error(e);
              }
              try {
                await supabase.from("error_votes").insert([
                  { error_id: error.id, error_name: error.name, vote_type: "solved" }
                ]);
              } catch (err) {
                console.error(err);
              }
            }}
            disabled={userVote !== null}
            className={`${styles.optionBox} ${
              userVote === "solved" || solvedDone ? styles.optionBoxSolved : ""
            } ${userVote !== null ? styles.optionBoxDisabled : ""}`}
          >
            {userVote === "solved" || solvedDone ? (
              <span className={styles.optionSuccessText}>✓ Solved!</span>
            ) : (
              <span>👍 Solved</span>
            )}
          </button>

          {/* 👎 Unsolved */}
          <button
            onClick={async () => {
              if (userVote) return;
              setUserVote("unsolved");
              setUnsolvedDone(true);
              setTimeout(() => setUnsolvedDone(false), 3000);
              try {
                localStorage.setItem(`error_vote_${error.id}`, JSON.stringify({
                  type: "unsolved",
                  timestamp: new Date().toISOString(),
                  pageLastUpdated: error.updatedAt
                }));
              } catch (e) {
                console.error(e);
              }
              try {
                await supabase.from("error_votes").insert([
                  { error_id: error.id, error_name: error.name, vote_type: "unsolved" }
                ]);
              } catch (err) {
                console.error(err);
              }
            }}
            disabled={userVote !== null}
            className={`${styles.optionBox} ${
              userVote === "unsolved" || unsolvedDone ? styles.optionBoxUnsolved : ""
            } ${userVote !== null ? styles.optionBoxDisabled : ""}`}
          >
            {userVote === "unsolved" || unsolvedDone ? (
              <span className={styles.optionSuccessText}>✓ Logged!</span>
            ) : (
              <span>👎 Unsolved</span>
            )}
          </button>
        </div>
      </div>

    </div>
  );
}
