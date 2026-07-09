"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function RegexTesterPage() {
  const [regexPattern, setRegexPattern] = useState("");
  const [flags, setFlags] = useState({
    g: true,
    i: true,
    m: false,
    s: false,
  });
  const [subjectText, setSubjectText] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleLoadSample = () => {
    setRegexPattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}");
    setFlags({ g: true, i: true, m: false, s: false });
    setSubjectText(
      "Please contact our Data Protection team at support@errorcrate.com or billing@errorcrate.com for invoice queries. Do not use test-user@gmail.co for production accounts."
    );
  };

  const faqItems = [
    {
      question: "Is my input text sent to any servers?",
      answer: "No. Our Regex Tester runs 100% locally in your web browser. All pattern evaluations and capture extractions are processed by JavaScript's built-in RegExp engine in your local memory."
    },
    {
      question: "What regex flavor does this tool use?",
      answer: "This tool uses the standard ECMAScript (JavaScript) regular expression flavor, which is highly compatible with V8 engines."
    },
    {
      question: "How do capture groups work?",
      answer: "Capture groups are defined by placing parenthesis (...) around portions of your regex pattern. The captured outputs will display in our captured indices table."
    },
    {
      question: "What does the 'dotAll' flag do?",
      answer: "The dotAll (s) flag allows the dot (.) character class wildcard to match newline characters (\\n) as well, which is useful when testing multi-line logs."
    }
  ];

  const handleClear = () => {
    setRegexPattern("");
    setSubjectText("");
    setError(null);
  };

  let compiledRegex: RegExp | null = null;
  let activeFlags = "";
  if (flags.g) activeFlags += "g";
  if (flags.i) activeFlags += "i";
  if (flags.m) activeFlags += "m";
  if (flags.s) activeFlags += "s";

  try {
    if (regexPattern) {
      compiledRegex = new RegExp(regexPattern, activeFlags);
    }
  } catch (err: any) {
    compiledRegex = null;
  }

  useEffect(() => {
    if (!regexPattern) {
      setError(null);
      return;
    }
    try {
      new RegExp(regexPattern, activeFlags);
      setError(null);
    } catch (err: any) {
      setError(err.message || "Invalid regular expression pattern.");
    }
  }, [regexPattern, activeFlags]);

  const getMatches = () => {
    if (!compiledRegex || !subjectText || !regexPattern || error) return [];
    
    try {
      let match;
      const list: any[] = [];
      compiledRegex.lastIndex = 0;

      if (compiledRegex.global) {
        while ((match = compiledRegex.exec(subjectText)) !== null) {
          if (match.index === compiledRegex.lastIndex) {
            compiledRegex.lastIndex++;
          }
          list.push({
            index: match.index,
            value: match[0],
            groups: match.slice(1),
          });
        }
      } else {
        match = compiledRegex.exec(subjectText);
        if (match) {
          list.push({
            index: match.index,
            value: match[0],
            groups: match.slice(1),
          });
        }
      }
      return list;
    } catch {
      return [];
    }
  };

  const matchesList = getMatches();

  const getHighlightedText = () => {
    if (!compiledRegex || !subjectText || !regexPattern || error || matchesList.length === 0) {
      return subjectText;
    }

    const segments: React.ReactNode[] = [];
    let lastIdx = 0;

    matchesList.forEach((m, idx) => {
      if (m.index > lastIdx) {
        segments.push(subjectText.substring(lastIdx, m.index));
      }
      segments.push(
        <span key={idx} className={styles.highlightMatch}>
          {m.value}
        </span>
      );
      lastIdx = m.index + m.value.length;
    });

    if (lastIdx < subjectText.length) {
      segments.push(subjectText.substring(lastIdx));
    }

    return segments;
  };

  const toggleFlag = (flagName: "g" | "i" | "m" | "s") => {
    setFlags((prev) => ({
      ...prev,
      [flagName]: !prev[flagName],
    }));
  };

  const relatedTools = [
    { name: "JSON Formatter", href: "/tools/json-formatter" },
    { name: "JWT Decoder", href: "/tools/jwt-decoder" },
    { name: "Regex Tester", href: "/tools/regex-tester", active: true },
    { name: "UUID Generator", href: "/tools/uuid-generator" },
    { name: "SQL Formatter", href: "/tools/sql-formatter" },
    { name: "YAML Validator", href: "/tools/yaml-validator" },
    { name: "Cron Builder", href: "/tools/cron-builder" },
    { name: "Timestamp Converter", href: "/tools/timestamp-converter" }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbs}>
        <Link href="/tools" style={{ color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-orange)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>Developer Utilities</Link>
        <span style={{ color: "var(--text-muted)", margin: "0 8px" }}>&gt;</span>
        <span className={styles.breadcrumbActive}>Parser</span>
      </div>
      
      <div className={styles.titleBlock}>
        <h1 className={styles.title}>Real-Time Regex Tester</h1>
        <p className={styles.subtitle}>
          Validate and test regular expression patterns against target subject strings. View captures, matches, and subgroups in real time.
        </p>
      </div>

      {/* Error Box */}
      {error && (
        <div className={styles.errorBox}>
          <span>❌</span>
          <div>
            <strong>Regex Syntax Compilation Error:</strong> {error}
          </div>
        </div>
      )}

      {/* Workspace */}
      <div className={styles.workspace}>
        {/* Pattern & Subject Input Column */}
        <div className={styles.editorPane}>
          {/* Pattern Inputs */}
          <div className={styles.inputGroup}>
            <span className={styles.groupLabel}>Regular Expression</span>
            <div className={styles.regexInputWrapper}>
              <span className={styles.regexSlash}>/</span>
              <input
                type="text"
                className={styles.regexInput}
                placeholder="Enter regex pattern here... e.g. [a-z]+"
                value={regexPattern}
                onChange={(e) => setRegexPattern(e.target.value)}
              />
              <span className={styles.regexSlash}>/{activeFlags}</span>
            </div>
            
            {/* Flags Row */}
            <div className={styles.flagsWrapper}>
              <label className={styles.flagCheckboxLabel}>
                <input
                  type="checkbox"
                  checked={flags.g}
                  onChange={() => toggleFlag("g")}
                />
                <span>global (g)</span>
              </label>
              <label className={styles.flagCheckboxLabel}>
                <input
                  type="checkbox"
                  checked={flags.i}
                  onChange={() => toggleFlag("i")}
                />
                <span>ignoreCase (i)</span>
              </label>
              <label className={styles.flagCheckboxLabel}>
                <input
                  type="checkbox"
                  checked={flags.m}
                  onChange={() => toggleFlag("m")}
                />
                <span>multiline (m)</span>
              </label>
              <label className={styles.flagCheckboxLabel}>
                <input
                  type="checkbox"
                  checked={flags.s}
                  onChange={() => toggleFlag("s")}
                />
                <span>dotAll (s)</span>
              </label>
            </div>
          </div>

          {/* Subject Text Input */}
          <div className={styles.inputGroup}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className={styles.groupLabel}>Test Subject Text</span>
              <div className={styles.paneActionRow}>
                <button onClick={handleLoadSample} className={styles.paneBtn}>
                  Load Sample
                </button>
                <button onClick={handleClear} className={styles.paneBtn}>
                  Clear
                </button>
              </div>
            </div>
            <textarea
              className={styles.subjectTextarea}
              placeholder="Enter text here to test against the regular expression pattern..."
              value={subjectText}
              onChange={(e) => setSubjectText(e.target.value)}
            />
          </div>
        </div>

        {/* Results Highlight Column */}
        <div className={styles.resultsPane}>
          {/* Visual Highlight Block */}
          <div className={styles.resultBlock}>
            <div className={styles.blockHeader}>
              <span className={styles.blockTitle}>Match Highlights</span>
              <span className={`${styles.blockBadge} ${styles.matches}`}>
                {matchesList.length} {matchesList.length === 1 ? "Match" : "Matches"}
              </span>
            </div>
            <div className={styles.highlightedArea}>
              {getHighlightedText() || (
                <span style={{ color: "#a1a1aa", fontStyle: "italic" }}>
                  Highlighted test results will display here...
                </span>
              )}
            </div>
          </div>

          {/* Subgroups Table Block */}
          <div className={styles.resultBlock}>
            <div className={styles.blockHeader}>
              <span className={styles.blockTitle}>Capture Groups &amp; Indices</span>
            </div>
            <div className={styles.tableWrapper}>
              {matchesList.length > 0 ? (
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th className={styles.th} style={{ width: "80px" }}>Index</th>
                      <th className={styles.th}>Match Value</th>
                      <th className={styles.th}>Captured Groups</th>
                    </tr>
                  </thead>
                  <tbody>
                    {matchesList.map((m, idx) => (
                      <tr key={idx} className={styles.tr}>
                        <td className={styles.td}>@ {m.index}</td>
                        <td className={styles.td} style={{ color: "var(--accent-orange)", fontWeight: 700 }}>
                          &quot;{m.value}&quot;
                        </td>
                        <td className={styles.td}>
                          {m.groups.length > 0
                            ? m.groups.map((g: string, gIdx: number) => (
                                <div key={gIdx} style={{ fontSize: "0.75rem", marginBottom: "2px" }}>
                                  <strong>{gIdx + 1}:</strong> {g !== undefined ? `"${g}"` : "null"}
                                </div>
                              ))
                            : "// None"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className={styles.emptyState}>
                  No active matches found. Capture groups will populate when patterns match.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Accordion FAQ Section */}
      <section className={styles.faqSection}>
        <h2 className={styles.faqHeading}>Frequently Asked Questions</h2>
        <div className={styles.faqContainer}>
          {faqItems.map((item, idx) => (
            <div key={idx} className={styles.faqItem}>
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className={styles.faqQuestion}
              >
                <span>{item.question}</span>
                <span className={`${styles.faqIcon} ${openFaq === idx ? styles.faqIconExpanded : ""}`}>
                  +
                </span>
              </button>
              {openFaq === idx && (
                <div className={styles.faqAnswer}>
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* AdSense SEO & Sidebar Columns */}
      <section className={styles.seoSection}>
        {/* Rich Explanatory Content */}
        <div className={styles.seoContent}>
          <h2 className={styles.seoHeading}>Regex Cheatsheet &amp; Syntax Reference</h2>
          <p className={styles.seoParagraph}>
            A Regular Expression (Regex) is a sequence of characters that forms a search pattern. It is used to validate strings (like checking email formats), search text blocks, and extract capturing subgroups.
          </p>

          <div className={styles.cheatsheetGrid}>
            {/* Quantifiers */}
            <div className={styles.cheatCard}>
              <span className={styles.cheatTitle}>Quantifiers</span>
              <div className={styles.cheatRow}>
                <span className={styles.cheatToken}>*</span>
                <span className={styles.cheatDesc}>0 or more times</span>
              </div>
              <div className={styles.cheatRow}>
                <span className={styles.cheatToken}>+</span>
                <span className={styles.cheatDesc}>1 or more times</span>
              </div>
              <div className={styles.cheatRow}>
                <span className={styles.cheatToken}>?</span>
                <span className={styles.cheatDesc}>0 or 1 time (optional)</span>
              </div>
              <div className={styles.cheatRow}>
                <span className={styles.cheatToken}>&#123;n,m&#125;</span>
                <span className={styles.cheatDesc}>Between n and m times</span>
              </div>
            </div>

            {/* Character Classes */}
            <div className={styles.cheatCard}>
              <span className={styles.cheatTitle}>Character Classes</span>
              <div className={styles.cheatRow}>
                <span className={styles.cheatToken}>[a-z]</span>
                <span className={styles.cheatDesc}>Lowercase letters</span>
              </div>
              <div className={styles.cheatRow}>
                <span className={styles.cheatToken}>\d</span>
                <span className={styles.cheatDesc}>Any digit (0-9)</span>
              </div>
              <div className={styles.cheatRow}>
                <span className={styles.cheatToken}>\w</span>
                <span className={styles.cheatDesc}>Word character (a-z, 0-9, _)</span>
              </div>
              <div className={styles.cheatRow}>
                <span className={styles.cheatToken}>\s</span>
                <span className={styles.cheatDesc}>Whitespace character</span>
              </div>
            </div>
          </div>

          <h3 className={styles.seoHeading} style={{ fontSize: "1.2rem", marginTop: "16px" }}>Regex Flags Explained</h3>
          <p className={styles.seoParagraph}>
            Flags modify the parsing behavior of regular expression engines:
          </p>
          <ul className={styles.seoList}>
            <li className={styles.seoListItem}>
              <strong>Global (g):</strong> Finds all matching patterns in the input text instead of stopping after the first match.
            </li>
            <li className={styles.seoListItem}>
              <strong>IgnoreCase (i):</strong> Ignores case specifications. E.g. <code>/[a-z]/i</code> matches lowercase and uppercase letters.
            </li>
            <li className={styles.seoListItem}>
              <strong>Multiline (m):</strong> Directs boundary anchors (<code>^</code> and <code>$</code>) to match start/end of lines instead of start/end of the entire string.
            </li>
            <li className={styles.seoListItem}>
              <strong>DotAll (s):</strong> Allows wildcard dots (<code>.</code>) to match newline characters as well.
            </li>
          </ul>
        </div>

        {/* Sidebar Navigation */}
        <div className={styles.sidebarCol}>
          <div className={styles.sidebarCard}>
            <h3 className={styles.sidebarTitle}>Developer Utilities</h3>
            <div className={styles.toolsList}>
              {relatedTools.map((tool) => (
                <Link
                  key={tool.name}
                  href={tool.href}
                  className={`${styles.toolLink} ${tool.active ? styles.activeToolLink : ""}`}
                >
                  <span>{tool.name}</span>
                  <span className={styles.toolLinkArrow}>&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
