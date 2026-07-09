"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function SqlFormatterPage() {
  const [rawInput, setRawInput] = useState("");
  const [formattedOutput, setFormattedOutput] = useState("");
  const [casing, setCasing] = useState("upper");
  const [indentSize, setIndentSize] = useState("2");
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const sampleSql =
    "SELECT u.id, u.username, p.title, p.likes, c.comment_text FROM users u INNER JOIN posts p ON u.id = p.user_id LEFT JOIN comments c ON p.id = c.post_id WHERE p.status = 'published' AND (p.likes > 50 OR c.flagged = 0) ORDER BY p.created_at DESC LIMIT 25;";

  const faqItems = [
    {
      question: "Is my SQL query safe from database leak exposure?",
      answer: "Yes, absolutely. The formatter runs 100% locally in your browser. Your query structure never leaves your machine."
    },
    {
      question: "What SQL dialects are supported?",
      answer: "The keyword casing and line breaks support standard SQL dialects including PostgreSQL, MySQL, SQLite, Oracle, Microsoft SQL Server, and MariaDB."
    },
    {
      question: "What does minifying a query do?",
      answer: "Minifying removes all newlines, tab spaces, and excess padding around punctuation, converting your SQL script into a single compressed line suitable for system integrations."
    },
    {
      question: "Does this tool run active queries on a database?",
      answer: "No. This tool is strictly a static text beautifier and syntax validator. It does not connect to any databases or execute queries."
    }
  ];

  const handleLoadSample = () => {
    setRawInput(sampleSql);
  };

  const handleClear = () => {
    setRawInput("");
    setFormattedOutput("");
  };

  const formatSql = (sql: string, indent: string, caseMode: string): string => {
    let cleaned = sql
      .replace(/\s+/g, " ") // Collapse spaces
      .trim();

    const breakKeywords = [
      "SELECT",
      "FROM",
      "WHERE",
      "LEFT JOIN",
      "RIGHT JOIN",
      "INNER JOIN",
      "OUTER JOIN",
      "JOIN",
      "GROUP BY",
      "ORDER BY",
      "HAVING",
      "LIMIT",
      "INSERT INTO",
      "VALUES",
      "UPDATE",
      "SET",
      "DELETE FROM"
    ];

    breakKeywords.forEach((kw) => {
      const regex = new RegExp("\\b" + kw + "\\b", "gi");
      cleaned = cleaned.replace(regex, "\n" + kw);
    });

    const lines = cleaned.split("\n");
    const formattedLines: string[] = [];

    let indentStr = "  ";
    if (indent === "4") indentStr = "    ";
    if (indent === "tab") indentStr = "\t";

    lines.forEach((line) => {
      let trimmed = line.trim();
      if (!trimmed) return;

      if (caseMode === "upper") {
        trimmed = trimmed.replace(
          /\b(select|from|where|join|left|right|inner|outer|on|group|order|by|having|limit|and|or|in|is|null|as|insert|into|values|update|set|delete)\b/gi,
          (m) => m.toUpperCase()
        );
      } else if (caseMode === "lower") {
        trimmed = trimmed.replace(
          /\b(select|from|where|join|left|right|inner|outer|on|group|order|by|having|limit|and|or|in|is|null|as|insert|into|values|update|set|delete)\b/gi,
          (m) => m.toLowerCase()
        );
      }

      const firstWord = trimmed.split(" ")[0].toUpperCase();
      let currentIndent = "";

      if (["AND", "OR", "ON"].includes(firstWord)) {
        currentIndent = indentStr;
      }

      formattedLines.push(currentIndent + trimmed);
    });

    return formattedLines.join("\n").trim();
  };

  const handleFormat = () => {
    if (!rawInput.trim()) {
      setFormattedOutput("");
      return;
    }
    const formatted = formatSql(rawInput, indentSize, casing);
    setFormattedOutput(formatted);
  };

  const handleMinify = () => {
    if (!rawInput.trim()) {
      setFormattedOutput("");
      return;
    }
    const minified = rawInput
      .replace(/\s+/g, " ")
      .replace(/\s*([,()=<>])\s*/g, "$1")
      .trim();
    setFormattedOutput(minified);
  };

  const handleCopy = () => {
    if (!formattedOutput) return;
    navigator.clipboard.writeText(formattedOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightSql = (sqlStr: string) => {
    if (!sqlStr) return null;
    
    const escaped = sqlStr
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    const keywords = /\b(SELECT|INSERT|UPDATE|DELETE|FROM|WHERE|JOIN|LEFT|RIGHT|INNER|OUTER|ON|GROUP BY|ORDER BY|HAVING|LIMIT|AND|OR|NOT|IN|IS|NULL|AS|CREATE|TABLE|ALTER|DROP|INDEX|KEY|PRIMARY|FOREIGN|VALUES|INTO|SET)\b/gi;
    const strings = /(["'`])(.*?)\1/g;
    const numbers = /\b\d+\b/g;
    const comments = /(--.*|#.*|\/\*[\s\S]*?\*\/)/g;

    let highlighted = escaped;
    highlighted = highlighted.replace(strings, `<span class="${styles.sqlString}">$&</span>`);
    highlighted = highlighted.replace(keywords, (match) => `<span class="${styles.sqlKeyword}">${match}</span>`);
    highlighted = highlighted.replace(numbers, `<span class="${styles.sqlNumber}">$&</span>`);
    highlighted = highlighted.replace(comments, `<span class="${styles.sqlComment}">$&</span>`);

    return (
      <pre
        dangerouslySetInnerHTML={{ __html: highlighted }}
        className={styles.outputPre}
      />
    );
  };

  const relatedTools = [
    { name: "JSON Formatter", href: "/tools/json-formatter" },
    { name: "JWT Decoder", href: "/tools/jwt-decoder" },
    { name: "Regex Tester", href: "/tools/regex-tester" },
    { name: "UUID Generator", href: "/tools/uuid-generator" },
    { name: "SQL Formatter", href: "/tools/sql-formatter", active: true },
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
        <h1 className={styles.title}>SQL Query Formatter &amp; Beautifier</h1>
        <p className={styles.subtitle}>
          Clean, format, and organize raw SQL query code blocks. Convert keywords casing, configure alignments, and beautify indices.
        </p>
      </div>

      {/* Settings Row */}
      <div className={styles.settingsRow}>
        <div className={styles.selectGroup}>
          <div className={styles.selectWrapper}>
            <label htmlFor="caseSelect">Keyword Case:</label>
            <select
              id="caseSelect"
              className={styles.select}
              value={casing}
              onChange={(e) => setCasing(e.target.value)}
            >
              <option value="upper">UPPERCASE</option>
              <option value="lower">lowercase</option>
              <option value="preserve">Preserve Case</option>
            </select>
          </div>
          <div className={styles.selectWrapper}>
            <label htmlFor="indentSelect">Indentation:</label>
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
        </div>
        
        <div className={styles.mainActions}>
          <button onClick={handleFormat} className={styles.primaryBtn}>
            Format SQL
          </button>
          <button onClick={handleMinify} className={styles.secondaryBtn}>
            Minify SQL
          </button>
        </div>
      </div>

      {/* Workspace */}
      <div className={styles.workspace}>
        {/* Input Pane */}
        <div className={styles.editorPane}>
          <div className={styles.paneHeader}>
            <span className={styles.paneTitle}>Input SQL Query</span>
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
            placeholder="Paste your raw SQL query here... e.g. SELECT * FROM users WHERE active = 1"
            value={rawInput}
            onChange={(e) => setRawInput(e.target.value)}
          />
        </div>

        {/* Output Pane */}
        <div className={styles.editorPane}>
          <div className={styles.paneHeader}>
            <span className={styles.paneTitle}>Formatted Output</span>
            <div className={styles.paneActionRow}>
              <button onClick={handleCopy} className={styles.paneBtn} disabled={!formattedOutput}>
                {copied ? "✓ Copied!" : "Copy SQL"}
              </button>
            </div>
          </div>
          {formattedOutput ? (
            highlightSql(formattedOutput)
          ) : (
            <div className={styles.outputPlaceholder}>
              Formatted SQL query result will display here...
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

      {/* AdSense SEO & Sidebar Columns */}
      <section className={styles.seoSection}>
        {/* Rich Explanatory Content */}
        <div className={styles.seoContent}>
          <h2 className={styles.seoHeading}>What is SQL Formatting &amp; Why Use It?</h2>
          <p className={styles.seoParagraph}>
            Structured Query Language (SQL) is the standard programming language used to manage relational databases (like PostgreSQL, MySQL, SQL Server, and Oracle). As database applications grow, queries can expand into massive, nested blocks containing joins, subqueries, group by, and window functions. Without consistent indentation and keyword casing conventions, understanding these queries becomes extremely difficult.
          </p>

          <h3 className={styles.seoHeading} style={{ fontSize: "1.2rem" }}>SQL Query Formatting Best Practices</h3>
          <p className={styles.seoParagraph}>
            Consistently formatted SQL code is crucial for database administrators (DBAs) and developers. Follow these standard rules to improve readability:
          </p>
          <ul className={styles.seoList}>
            <li className={styles.seoListItem}>
              <strong>Keyword Capitalization:</strong> Reserve uppercase letters for standard SQL instructions (e.g. <code>SELECT</code>, <code>FROM</code>, <code>JOIN</code>) and lowercase letters for database tables, column variables, and aliases.
            </li>
            <li className={styles.seoListItem}>
              <strong>New Line Delimiters:</strong> Begin major logical clauses (like <code>FROM</code>, <code>WHERE</code>, and <code>ORDER BY</code>) on new lines.
            </li>
            <li className={styles.seoListItem}>
              <strong>Indented Subclauses:</strong> Indent join conditions (<code>ON</code>) and query filters (<code>AND</code>, <code>OR</code>) to clarify execution dependencies.
            </li>
            <li className={styles.seoListItem}>
              <strong>Subquery Nesting:</strong> Always align subqueries cleanly inside parenthesis wrappers with their own indented blocks.
            </li>
          </ul>

          <h3 className={styles.seoHeading} style={{ fontSize: "1.2rem" }}>Security &amp; Local Verification</h3>
          <p className={styles.seoParagraph}>
            Formatting SQL scripts containing sensitive database schemes requires absolute data privacy. Our formatter parses and prints your code 100% locally in your browser. No data is transmitted over the web, keeping your table architecture details fully secure.
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
