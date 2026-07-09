import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Developer Utilities Hub - Secure Client-Side Tools | ErrorCrate",
  description: "Explore our collection of high-performance developer utilities. Format, validate, inspect, and convert JSON, JWT, SQL, YAML, Cron, and timestamps 100% locally.",
};

export default function ToolsIndexPage() {
  const tools = [
    {
      title: "JSON Formatter & Validator",
      desc: "Beautify, minify, validate, and syntax highlight JSON payloads client-side.",
      href: "/tools/json-formatter",
      icon: "⚡"
    },
    {
      title: "Secure JWT Decoder",
      desc: "Decode base64url JSON Web Tokens, inspect claims, and evaluate expiration timestamps.",
      href: "/tools/jwt-decoder",
      icon: "🔑"
    },
    {
      title: "Real-Time Regex Tester",
      desc: "Validate regex patterns, highlight match positions, and inspect capture groups.",
      href: "/tools/regex-tester",
      icon: "🔍"
    },
    {
      title: "Bulk UUID Generator",
      desc: "Generate random Version 4 and time-based Version 1 UUIDs/GUIDs in bulk.",
      href: "/tools/uuid-generator",
      icon: "🆔"
    },
    {
      title: "SQL Query Formatter",
      desc: "Format SQL statements with customizable indentations and keyword casings.",
      href: "/tools/sql-formatter",
      icon: "💾"
    },
    {
      title: "YAML Syntax Validator",
      desc: "Check YAML structures, find tab/spacing formatting issues, and convert to JSON.",
      href: "/tools/yaml-validator",
      icon: "📋"
    },
    {
      title: "Cron Expression Builder",
      desc: "Visually construct cron expressions and translate crontabs into plain English.",
      href: "/tools/cron-builder",
      icon: "⏰"
    },
    {
      title: "Unix Timestamp Converter",
      desc: "Convert Unix epoch integers into local/UTC dates, and calculate dates back to timestamps.",
      href: "/tools/timestamp-converter",
      icon: "⏳"
    }
  ];

  return (
    <div className={styles.container}>
      <span className={styles.breadcrumbs}>
        <span className={styles.breadcrumbActive}>Developer Utilities</span>
      </span>

      <div className={styles.titleBlock}>
        <h1 className={styles.title}>Developer Utilities Hub</h1>
        <p className={styles.subtitle}>
          A curated suite of high-performance developer tools. Our utilities run 100% locally in your browser for absolute privacy and security.
        </p>
      </div>

      <div className={styles.grid}>
        {tools.map((tool) => (
          <Link key={tool.title} href={tool.href} className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.iconWrapper}>{tool.icon}</div>
              <h2 className={styles.cardTitle}>{tool.title}</h2>
              <p className={styles.cardDesc}>{tool.desc}</p>
            </div>
            <div className={styles.cardLink}>
              <span>Open Tool</span>
              <span className={styles.arrow}>&rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
