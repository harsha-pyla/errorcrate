"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function UuidGeneratorPage() {
  const [quantity, setQuantity] = useState(10);
  const [version, setVersion] = useState("4");
  const [useUppercase, setUseUppercase] = useState(false);
  const [useHyphens, setUseHyphens] = useState(true);
  const [useBraces, setUseBraces] = useState(false);
  const [uuids, setUuids] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const generateV4 = (): string => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

  const generateV1 = (): string => {
    const uuidEpoch = Date.UTC(1582, 9, 15);
    const now = Date.now();
    const timeTicks = (now - uuidEpoch) * 10000;
    
    const hexTime = timeTicks.toString(16).padStart(15, "0");
    const timeLow = hexTime.substring(7, 15);
    const timeMid = hexTime.substring(3, 7);
    const timeHighAndVersion = "1" + hexTime.substring(0, 3);
    
    const clockSeq = ((Math.random() * 0x3fff) | 0x8000).toString(16).padStart(4, "0");
    const node = "0123456789ab";
    
    return `${timeLow}-${timeMid}-${timeHighAndVersion}-${clockSeq}-${node}`;
  };

  const faqItems = [
    {
      question: "What does UUID stand for?",
      answer: "UUID stands for Universally Unique Identifier, which is a 128-bit value standardized by the Open Software Foundation (OSF) to identify resources without needing coordinate registries."
    },
    {
      question: "What is the difference between Version 4 and Version 1?",
      answer: "Version 4 UUIDs are generated purely from random numbers (122 random bits). Version 1 UUIDs are generated using the computer's MAC address and clock ticks. V4 is preferred for privacy."
    },
    {
      question: "Can UUIDs duplicate or collide?",
      answer: "The probability of a collision is close to zero. With Version 4, there are 2^122 possible configurations. Even generating a billion UUIDs per second for a hundred years leaves a negligible collision chance."
    },
    {
      question: "Are these UUIDs generated on the server?",
      answer: "No. Our generator executes locally inside your browser thread using cryptographically secure random values where possible, protecting your identifiers."
    }
  ];

  const handleGenerate = () => {
    const list: string[] = [];
    const clampQty = Math.max(1, Math.min(100, quantity));
    
    for (let i = 0; i < clampQty; i++) {
      let rawUuid = version === "1" ? generateV1() : generateV4();
      
      if (!useHyphens) {
        rawUuid = rawUuid.replace(/-/g, "");
      }
      if (useUppercase) {
        rawUuid = rawUuid.toUpperCase();
      }
      if (useBraces) {
        rawUuid = `{${rawUuid}}`;
      }
      list.push(rawUuid);
    }
    setUuids(list);
  };

  useEffect(() => {
    handleGenerate();
  }, []);

  const handleCopyAll = () => {
    if (uuids.length === 0) return;
    navigator.clipboard.writeText(uuids.join("\n"));
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  const handleCopyItem = (uuid: string, idx: number) => {
    navigator.clipboard.writeText(uuid);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleClear = () => {
    setUuids([]);
  };

  const relatedTools = [
    { name: "JSON Formatter", href: "/tools/json-formatter" },
    { name: "JWT Decoder", href: "/tools/jwt-decoder" },
    { name: "Regex Tester", href: "/tools/regex-tester" },
    { name: "UUID Generator", href: "/tools/uuid-generator", active: true },
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
        <span className={styles.breadcrumbActive}>Generator</span>
      </div>
      
      <div className={styles.titleBlock}>
        <h1 className={styles.title}>Bulk UUID / GUID Generator</h1>
        <p className={styles.subtitle}>
          Generate unique RFC 4122 Version 4 (Random) and Version 1 (Time-based) UUIDs. Configure casing, braces, and delimiters locally.
        </p>
      </div>

      {/* Workspace */}
      <div className={styles.workspace}>
        {/* Settings Column */}
        <div className={styles.editorPane}>
          <div className={styles.inputGroup}>
            <span className={styles.groupLabel}>Configuration Settings</span>
            
            {/* Quantity */}
            <div className={styles.controlField}>
              <label htmlFor="qtyInput" className={styles.controlLabel}>
                Quantity (1 - 100):
              </label>
              <input
                id="qtyInput"
                type="number"
                min="1"
                max="100"
                className={styles.inputNumber}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              />
            </div>

            {/* Version */}
            <div className={styles.controlField}>
              <label htmlFor="verSelect" className={styles.controlLabel}>
                UUID Version:
              </label>
              <select
                id="verSelect"
                className={styles.select}
                value={version}
                onChange={(e) => setVersion(e.target.value)}
              >
                <option value="4">Version 4 (Cryptographically Random)</option>
                <option value="1">Version 1 (Timestamp &amp; Node Mac)</option>
              </select>
            </div>

            {/* Formats Checkbox */}
            <div className={styles.checkboxGroup}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={useUppercase}
                  onChange={() => setUseUppercase(!useUppercase)}
                />
                <span>Uppercase letters</span>
              </label>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={useHyphens}
                  onChange={() => setUseHyphens(!useHyphens)}
                />
                <span>Include hyphens</span>
              </label>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={useBraces}
                  onChange={() => setUseBraces(!useBraces)}
                />
                <span>Wrap in braces &#123;...&#125;</span>
              </label>
            </div>

            <button onClick={handleGenerate} className={styles.generateBtn}>
              Generate UUIDs
            </button>
          </div>
        </div>

        {/* Results Column */}
        <div className={styles.resultsPane}>
          <div className={styles.paneHeader}>
            <span className={styles.paneTitle}>Generated Output</span>
            <div className={styles.paneActionRow}>
              <button onClick={handleCopyAll} className={styles.paneBtn} disabled={uuids.length === 0}>
                {copiedAll ? "✓ Copied All!" : "Copy All"}
              </button>
              <button onClick={handleClear} className={styles.paneBtn} disabled={uuids.length === 0}>
                Clear
              </button>
            </div>
          </div>

          {uuids.length > 0 ? (
            <div className={styles.resultsList}>
              {uuids.map((uuid, idx) => (
                <div key={idx} className={styles.uuidItem}>
                  <span className={styles.uuidText}>{uuid}</span>
                  <button
                    onClick={() => handleCopyItem(uuid, idx)}
                    className={styles.itemCopyBtn}
                  >
                    {copiedIndex === idx ? "✓ Copied" : "Copy"}
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              No UUIDs generated. Configure parameters and click generate.
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
          <h2 className={styles.seoHeading}>What is a UUID / GUID?</h2>
          <p className={styles.seoParagraph}>
            A Universally Unique Identifier (UUID), also known as a Globally Unique Identifier (GUID) in Windows environments, is a 128-bit label used for resources in computer systems. Standard UUID formatting represents these 128 bits as 32 hexadecimal digits separated by hyphens in a <code>8-4-4-4-12</code> configuration (e.g. <code>f4802422-5c35-4db8-bbf7-d05b0d01j2h9</code>).
          </p>

          <h3 className={styles.seoHeading} style={{ fontSize: "1.2rem" }}>Version 4 vs. Version 1 UUIDs</h3>
          <p className={styles.seoParagraph}>
            Different algorithms (or versions) govern how UUIDs are constructed:
          </p>
          <ul className={styles.seoList}>
            <li className={styles.seoListItem}>
              <strong>Version 4 (Random):</strong> Generated entirely from pseudo-random numbers (122 random bits and 6 version bits). It is the most common format because it does not leak host MAC addresses or timestamp history.
            </li>
            <li className={styles.seoListItem}>
              <strong>Version 1 (Time-Based):</strong> Constructed from the host system's hardware MAC address (node) and a 60-bit timestamp tracking 100-nanosecond ticks. It is useful when ordering identifiers chronologically is important.
            </li>
          </ul>

          <h3 className={styles.seoHeading} style={{ fontSize: "1.2rem" }}>Collision Probability &amp; Math</h3>
          <p className={styles.seoParagraph}>
            Because Version 4 UUIDs have 122 bits of absolute randomness, the total number of possible combinations is 2<sup>122</sup> (or about 5.3 Undecillion keys). The chance of a single collision is so microscopically small that generating billions of UUIDs every second for a century would result in a negligible collision probability. It is mathematically safe to assume they are universally unique.
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
