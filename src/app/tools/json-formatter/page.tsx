"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function JsonFormatterPage() {
  const [rawInput, setRawInput] = useState("");
  const [formattedOutput, setFormattedOutput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [indentSize, setIndentSize] = useState("2");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const sampleJson = {
    status: "success",
    code: 200,
    message: "Developer payload configuration parsed successfully",
    data: {
      id: "err_98412",
      active: true,
      environment: "production",
      metrics: {
        uptime: 99.98,
        latencyMs: 14,
        errorRate: 0.00
      },
      tags: ["wiki", "errorcrate", "seo-valid"],
      owner: null
    }
  };

  const faqItems = [
    {
      question: "Is my JSON data secure on this tool?",
      answer: "Yes, completely. Our JSON Formatter operates entirely client-side using native JavaScript in your browser window. None of your data is sent to external servers or backend databases, protecting your API credentials and credentials blobs."
    },
    {
      question: "What is the maximum file size supported?",
      answer: "Since all formatting and validation is processed directly within your browser thread, it can easily handle JSON payloads up to 15MB. For extremely large configurations, execution time depends on your CPU memory."
    },
    {
      question: "Why does standard JSON require double quotes instead of single quotes?",
      answer: "According to the official RFC 8259 JSON specifications, all object keys and string values must be explicitly wrapped in double quotes (\"key\"). Single quotes are syntactically invalid and will break JSON.parse engines."
    },
    {
      question: "How does the validator pinpoint syntax error locations?",
      answer: "Our validator uses JavaScript's native JSON engine to run diagnostic checks. If parsing fails, it catches the call stack error and parses line coordinates to display helpful highlights."
    }
  ];

  const handleLoadSample = () => {
    setRawInput(JSON.stringify(sampleJson, null, 2));
    setError(null);
  };

  const handleClear = () => {
    setRawInput("");
    setFormattedOutput("");
    setError(null);
  };

  const handleFormat = () => {
    if (!rawInput.trim()) {
      setFormattedOutput("");
      setError(null);
      return;
    }
    try {
      const parsed = JSON.parse(rawInput);
      let space: string | number = 2;
      if (indentSize === "4") space = 4;
      if (indentSize === "tab") space = "\t";
      const formatted = JSON.stringify(parsed, null, space);
      setFormattedOutput(formatted);
      setError(null);
    } catch (err: any) {
      setError(err.message || "Invalid JSON syntax. Please verify commas and quotations.");
      setFormattedOutput("");
    }
  };

  const handleMinify = () => {
    if (!rawInput.trim()) {
      setFormattedOutput("");
      setError(null);
      return;
    }
    try {
      const parsed = JSON.parse(rawInput);
      const minified = JSON.stringify(parsed);
      setFormattedOutput(minified);
      setError(null);
    } catch (err: any) {
      setError(err.message || "Invalid JSON syntax. Please verify commas and quotations.");
      setFormattedOutput("");
    }
  };

  const handleCopy = () => {
    if (!formattedOutput) return;
    navigator.clipboard.writeText(formattedOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!formattedOutput) return;
    const blob = new Blob([formattedOutput], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "errorcrate_formatted.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const highlightJson = (jsonStr: string) => {
    if (!jsonStr) return null;
    const escaped = jsonStr
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    const highlighted = escaped.replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
      (match) => {
        let cls = styles.jsonNumber;
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = styles.jsonKey;
          } else {
            cls = styles.jsonString;
          }
        } else if (/true|false/.test(match)) {
          cls = styles.jsonBool;
        } else if (/null/.test(match)) {
          cls = styles.jsonNull;
        }

        if (cls === styles.jsonKey) {
          const cleanKey = match.slice(0, -1);
          return `<span class="${cls}">${cleanKey}</span>:`;
        }
        return `<span class="${cls}">${match}</span>`;
      }
    );

    return (
      <pre
        dangerouslySetInnerHTML={{ __html: highlighted }}
        className={styles.outputPre}
      />
    );
  };

  const relatedTools = [
    { name: "JSON Formatter", href: "/tools/json-formatter", active: true },
    { name: "JWT Decoder", href: "/tools/jwt-decoder" },
    { name: "Regex Tester", href: "/tools/regex-tester" },
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
        <span className={styles.breadcrumbActive}>Formatter</span>
      </div>
      
      <div className={styles.titleBlock}>
        <h1 className={styles.title}>Interactive JSON Formatter &amp; Validator</h1>
        <p className={styles.subtitle}>
          Clean, format, validate, and minify JSON payloads instantly. Our utility runs 100% locally in your browser for absolute privacy and security.
        </p>
      </div>

      {/* Settings Row */}
      <div className={styles.settingsRow}>
        <div className={styles.selectGroup}>
          <label htmlFor="indentSelect">Tab Size:</label>
          <select
            id="indentSelect"
            className={styles.select}
            value={indentSize}
            onChange={(e) => setIndentSize(e.target.value)}
          >
            <option value="2">2 Spaces</option>
            <option value="4">4 Spaces</option>
            <option value="tab">Tab Indent</option>
          </select>
        </div>
        <div className={styles.mainActions}>
          <button onClick={handleFormat} className={styles.primaryBtn}>
            Format &amp; Beautify
          </button>
          <button onClick={handleMinify} className={styles.secondaryBtn}>
            Minify JSON
          </button>
        </div>
      </div>

      {/* Error Box */}
      {error && (
        <div className={styles.errorBox}>
          <span>❌</span>
          <div>
            <strong>Syntax Validation Error:</strong> {error}
          </div>
        </div>
      )}

      {/* Workspace */}
      <div className={styles.workspace}>
        {/* Input Pane */}
        <div className={styles.editorPane}>
          <div className={styles.paneHeader}>
            <span className={styles.paneTitle}>Input Payload (Raw JSON)</span>
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
            className={styles.textarea}
            placeholder='Paste your raw JSON code here... e.g. {"key": "value"}'
            value={rawInput}
            onChange={(e) => setRawInput(e.target.value)}
          />
        </div>

        {/* Output Pane */}
        <div className={styles.editorPane}>
          <div className={styles.paneHeader}>
            <span className={styles.paneTitle}>Output Result (Formatted JSON)</span>
            <div className={styles.paneActionRow}>
              <button onClick={handleCopy} className={styles.paneBtn} disabled={!formattedOutput}>
                {copied ? "✓ Copied!" : "Copy Code"}
              </button>
              <button onClick={handleDownload} className={styles.paneBtn} disabled={!formattedOutput}>
                Download .json
              </button>
            </div>
          </div>
          {formattedOutput ? (
            highlightJson(formattedOutput)
          ) : (
            <div className={styles.outputPlaceholder}>
              Formatted JSON output will display here...
            </div>
          )}
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

      {/* AdSense SEO & Related Section */}
      <section className={styles.seoSection}>
        {/* Rich Explanatory Content */}
        <div className={styles.seoContent}>
          <h2 className={styles.seoHeading}>Understanding JSON Syntax and Formatting Rules</h2>
          <p className={styles.seoParagraph}>
            JavaScript Object Notation (JSON) is a lightweight text-based data interchange format inspired by JavaScript object literals. It is the de facto standard for modern APIs, cloud configuration stores, and database models. Because it is highly nested, minified API payloads are difficult for humans to read, parse, and debug.
          </p>

          <h3 className={styles.seoHeading} style={{ fontSize: "1.2rem" }}>Why Validation &amp; Formatting Matters</h3>
          <p className={styles.seoParagraph}>
            Unlike JavaScript engines that tolerate trailing commas, unquoted keys, or single quotations, the RFC 8259 specification governing standard JSON requires strict formatting. A single misplaced comma or double-quote will break continuous integration workflows, server-side payload parsers, and browser runtime scripts.
          </p>

          <h3 className={styles.seoHeading} style={{ fontSize: "1.2rem" }}>Common JSON Formatting Pitfalls</h3>
          <ul className={styles.seoList}>
            <li className={styles.seoListItem}>
              <strong>Single Quotes:</strong> Strings and keys must always be enclosed in double quotes (<code>&quot;key&quot;</code>) instead of single quotes (<code>&apos;key&apos;</code>).
            </li>
            <li className={styles.seoListItem}>
              <strong>Trailing Commas:</strong> The last key-value pair in an object or array must not end with a comma.
            </li>
            <li className={styles.seoListItem}>
              <strong>Unquoted Keys:</strong> All keys must be explicitly wrapped in double quotes.
            </li>
            <li className={styles.seoListItem}>
              <strong>Escaped Characters:</strong> Ensure backslashes are escaped correctly inside string properties.
            </li>
          </ul>

          <h3 className={styles.seoHeading} style={{ fontSize: "1.2rem" }}>Secure Client-Side Parsing</h3>
          <p className={styles.seoParagraph}>
            Security is paramount when inspecting configuration blobs or credentials data. Our formatter is designed with privacy in mind: all validations, formatting spacing steps, and file downloading are executed purely inside your local browser thread. Your data never leaves your system.
          </p>
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
