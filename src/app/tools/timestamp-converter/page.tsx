"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function TimestampConverterPage() {
  const [currentUnixSec, setCurrentUnixSec] = useState(0);
  const [currentUnixMs, setCurrentUnixMs] = useState(0);
  const [currentLocalDate, setCurrentLocalDate] = useState("");

  const [unixInput, setUnixInput] = useState("");
  const [epochResults, setEpochResults] = useState({
    local: "",
    utc: "",
    iso: "",
    relative: "",
  });

  const [year, setYear] = useState("2026");
  const [month, setMonth] = useState("07");
  const [day, setDay] = useState("09");
  const [hour, setHour] = useState("12");
  const [minute, setMinute] = useState("00");
  const [second, setSecond] = useState("00");
  const [dateResults, setDateResults] = useState({
    seconds: "",
    milliseconds: "",
  });

  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    {
      question: "What does epoch timestamp mean?",
      answer: "Unix epoch time is a system for measuring time by counting seconds elapsed since Thursday, January 1, 1970 00:00:00 UTC."
    },
    {
      question: "How does this tool detect milliseconds?",
      answer: "Unix timestamps in seconds contain 10 digits (e.g. 1720512000), while JavaScript timestamps in milliseconds contain 13 digits (e.g. 1720512000000). Our tool detects this length automatically to convert accordingly."
    },
    {
      question: "What is the Year 2038 Problem?",
      answer: "On January 19, 2038, systems using signed 32-bit integers to store Unix time will experience an overflow and wrap timestamps back to 1901. Transitioning systems to 64-bit integers solves this issue."
    },
    {
      question: "Does this tool track my timezone data?",
      answer: "No. All conversions run locally in your browser. The tool extracts your local timezone offsets using native JavaScript Date APIs to display relative and local dates privately."
    }
  ];

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const ms = now.getTime();
      const sec = Math.floor(ms / 1000);
      setCurrentUnixSec(sec);
      setCurrentUnixMs(ms);
      setCurrentLocalDate(now.toLocaleString());
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);

    const initDate = new Date();
    setUnixInput(Math.floor(initDate.getTime() / 1000).toString());
    setYear(initDate.getFullYear().toString());
    setMonth((initDate.getMonth() + 1).toString().padStart(2, "0"));
    setDay(initDate.getDate().toString().padStart(2, "0"));
    setHour(initDate.getHours().toString().padStart(2, "0"));
    setMinute(initDate.getMinutes().toString().padStart(2, "0"));
    setSecond(initDate.getSeconds().toString().padStart(2, "0"));

    return () => clearInterval(interval);
  }, []);

  const convertEpoch = (inputVal: string) => {
    const trimmed = inputVal.trim();
    if (!trimmed || isNaN(Number(trimmed))) {
      setEpochResults({ local: "Invalid input", utc: "Invalid input", iso: "Invalid input", relative: "Invalid input" });
      return;
    }

    const val = Number(trimmed);
    const isMs = trimmed.length > 10;
    const date = new Date(isMs ? val : val * 1000);

    if (isNaN(date.getTime())) {
      setEpochResults({ local: "Invalid Date", utc: "Invalid Date", iso: "Invalid Date", relative: "Invalid Date" });
      return;
    }

    const now = Date.now();
    const diffMs = date.getTime() - now;
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHr = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHr / 24);

    let relativeStr = "";
    if (Math.abs(diffSec) < 60) {
      relativeStr = diffSec >= 0 ? "in a few seconds" : "a few seconds ago";
    } else if (Math.abs(diffMin) < 60) {
      relativeStr = diffMin >= 0 ? `in ${diffMin} minutes` : `${Math.abs(diffMin)} minutes ago`;
    } else if (Math.abs(diffHr) < 24) {
      relativeStr = diffHr >= 0 ? `in ${diffHr} hours` : `${Math.abs(diffHr)} hours ago`;
    } else {
      relativeStr = diffDay >= 0 ? `in ${diffDay} days` : `${Math.abs(diffDay)} days ago`;
    }

    setEpochResults({
      local: date.toLocaleString(),
      utc: date.toUTCString(),
      iso: date.toISOString(),
      relative: relativeStr,
    });
  };

  const convertDate = () => {
    const y = parseInt(year);
    const m = parseInt(month) - 1;
    const d = parseInt(day);
    const hr = parseInt(hour);
    const min = parseInt(minute);
    const sec = parseInt(second);

    const date = new Date(y, m, d, hr, min, sec);
    const ms = date.getTime();
    const s = Math.floor(ms / 1000);

    if (isNaN(ms)) {
      setDateResults({ seconds: "Invalid parameters", milliseconds: "Invalid parameters" });
    } else {
      setDateResults({
        seconds: s.toString(),
        milliseconds: ms.toString(),
      });
    }
  };

  useEffect(() => {
    if (unixInput) {
      convertEpoch(unixInput);
    }
  }, [unixInput]);

  useEffect(() => {
    convertDate();
  }, [year, month, day, hour, minute, second]);

  const handleCopy = (value: string, key: string) => {
    if (!value || value.includes("Invalid")) return;
    navigator.clipboard.writeText(value);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSetCurrentInput = () => {
    setUnixInput(currentUnixSec.toString());
  };

  const relatedTools = [
    { name: "JSON Formatter", href: "/tools/json-formatter" },
    { name: "JWT Decoder", href: "/tools/jwt-decoder" },
    { name: "Regex Tester", href: "/tools/regex-tester" },
    { name: "UUID Generator", href: "/tools/uuid-generator" },
    { name: "SQL Formatter", href: "/tools/sql-formatter" },
    { name: "YAML Validator", href: "/tools/yaml-validator" },
    { name: "Cron Builder", href: "/tools/cron-builder" },
    { name: "Timestamp Converter", href: "/tools/timestamp-converter", active: true }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbs}>
        <Link href="/tools" style={{ color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-orange)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>Developer Utilities</Link>
        <span style={{ color: "var(--text-muted)", margin: "0 8px" }}>&gt;</span>
        <span className={styles.breadcrumbActive}>Converter</span>
      </div>
      
      <div className={styles.titleBlock}>
        <h1 className={styles.title}>Unix Epoch Timestamp Converter</h1>
        <p className={styles.subtitle}>
          Translate Unix epoch integer timestamps into local dates, UTC date strings, and ISO 8601 formatting, or calculate time values from calendar parts.
        </p>
      </div>

      {/* Live Current Ticker */}
      <div className={styles.currentTickerCard}>
        <div className={styles.tickerLabelGroup}>
          <span className={styles.tickerTitle}>Current Unix Epoch Time</span>
          <div className={styles.tickerTime}>{currentUnixSec}</div>
          <div className={styles.tickerDate}>Local Date: {currentLocalDate}</div>
        </div>
        <button onClick={handleSetCurrentInput} className={styles.refreshBtn}>
          Copy to Input &crarr;
        </button>
      </div>

      {/* Workspace */}
      <div className={styles.workspace}>
        {/* Epoch to Date Pane */}
        <div className={styles.editorPane}>
          <div className={styles.paneHeader}>
            <span className={styles.paneTitle}>Unix Epoch to Date String</span>
          </div>
          <div className={styles.paneContent}>
            <div className={styles.inputGroup}>
              <label htmlFor="unixInput" className={styles.inputLabel}>Unix Timestamp (seconds or ms):</label>
              <input
                id="unixInput"
                type="text"
                className={styles.inputField}
                value={unixInput}
                onChange={(e) => setUnixInput(e.target.value)}
              />
            </div>

            <div className={styles.resultsList}>
              {/* Local */}
              <div className={styles.resultRow}>
                <div className={styles.resultMeta}>
                  <span className={styles.resultName}>Your Timezone</span>
                  <span className={styles.resultVal}>{epochResults.local}</span>
                </div>
                <button
                  onClick={() => handleCopy(epochResults.local, "local")}
                  className={styles.copyBtn}
                >
                  {copiedKey === "local" ? "✓ Copied" : "Copy"}
                </button>
              </div>

              {/* UTC */}
              <div className={styles.resultRow}>
                <div className={styles.resultMeta}>
                  <span className={styles.resultName}>UTC Timezone</span>
                  <span className={styles.resultVal}>{epochResults.utc}</span>
                </div>
                <button
                  onClick={() => handleCopy(epochResults.utc, "utc")}
                  className={styles.copyBtn}
                >
                  {copiedKey === "utc" ? "✓ Copied" : "Copy"}
                </button>
              </div>

              {/* ISO 8601 */}
              <div className={styles.resultRow}>
                <div className={styles.resultMeta}>
                  <span className={styles.resultName}>ISO 8601 String</span>
                  <span className={styles.resultVal}>{epochResults.iso}</span>
                </div>
                <button
                  onClick={() => handleCopy(epochResults.iso, "iso")}
                  className={styles.copyBtn}
                >
                  {copiedKey === "iso" ? "✓ Copied" : "Copy"}
                </button>
              </div>

              {/* Relative */}
              <div className={styles.resultRow}>
                <div className={styles.resultMeta}>
                  <span className={styles.resultName}>Relative Age</span>
                  <span className={styles.resultVal}>{epochResults.relative}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Date to Epoch Pane */}
        <div className={styles.editorPane}>
          <div className={styles.paneHeader}>
            <span className={styles.paneTitle}>Calendar Date to Unix Epoch</span>
          </div>
          <div className={styles.paneContent}>
            {/* Date Grid */}
            <div className={styles.dateGrid}>
              <div className={styles.inputGroup}>
                <label htmlFor="yearInput" className={styles.inputLabel}>Year:</label>
                <input
                  id="yearInput"
                  type="number"
                  className={styles.inputField}
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="monthInput" className={styles.inputLabel}>Month (1-12):</label>
                <input
                  id="monthInput"
                  type="number"
                  min="1"
                  max="12"
                  className={styles.inputField}
                  value={month}
                  onChange={(e) => setMonth(e.target.value.padStart(2, "0"))}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="dayInput" className={styles.inputLabel}>Day:</label>
                <input
                  id="dayInput"
                  type="number"
                  min="1"
                  max="31"
                  className={styles.inputField}
                  value={day}
                  onChange={(e) => setDay(e.target.value.padStart(2, "0"))}
                />
              </div>
            </div>

            {/* Time Grid */}
            <div className={styles.dateGrid}>
              <div className={styles.inputGroup}>
                <label htmlFor="hourInput" className={styles.inputLabel}>Hour (0-23):</label>
                <input
                  id="hourInput"
                  type="number"
                  min="0"
                  max="23"
                  className={styles.inputField}
                  value={hour}
                  onChange={(e) => setHour(e.target.value.padStart(2, "0"))}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="minInput" className={styles.inputLabel}>Minute:</label>
                <input
                  id="minInput"
                  type="number"
                  min="0"
                  max="59"
                  className={styles.inputField}
                  value={minute}
                  onChange={(e) => setMinute(e.target.value.padStart(2, "0"))}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="secInput" className={styles.inputLabel}>Second:</label>
                <input
                  id="secInput"
                  type="number"
                  min="0"
                  max="59"
                  className={styles.inputField}
                  value={second}
                  onChange={(e) => setSecond(e.target.value.padStart(2, "0"))}
                />
              </div>
            </div>

            <div className={styles.resultsList} style={{ marginTop: "16px" }}>
              {/* Epoch seconds */}
              <div className={styles.resultRow}>
                <div className={styles.resultMeta}>
                  <span className={styles.resultName}>Unix Epoch Seconds</span>
                  <span className={styles.resultVal}>{dateResults.seconds}</span>
                </div>
                <button
                  onClick={() => handleCopy(dateResults.seconds, "seconds")}
                  className={styles.copyBtn}
                >
                  {copiedKey === "seconds" ? "✓ Copied" : "Copy"}
                </button>
              </div>

              {/* Epoch milliseconds */}
              <div className={styles.resultRow}>
                <div className={styles.resultMeta}>
                  <span className={styles.resultName}>Unix Epoch Milliseconds</span>
                  <span className={styles.resultVal}>{dateResults.milliseconds}</span>
                </div>
                <button
                  onClick={() => handleCopy(dateResults.milliseconds, "milliseconds")}
                  className={styles.copyBtn}
                >
                  {copiedKey === "milliseconds" ? "✓ Copied" : "Copy"}
                </button>
              </div>
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
          <h2 className={styles.seoHeading}>What is Unix Epoch Time?</h2>
          <p className={styles.seoParagraph}>
            Unix time (also known as Epoch time or POSIX time) is a system for describing points in time, defined as the total number of seconds that have elapsed since the <strong>Unix Epoch</strong>: Thursday, January 1, 1970 at 00:00:00 Coordinated Universal Time (UTC), minus leap seconds. Because it is simple to store as a single integer, it is standard in databases, log streams, and file metadata.
          </p>

          <h3 className={styles.seoHeading} style={{ fontSize: "1.2rem" }}>Seconds vs. Milliseconds</h3>
          <p className={styles.seoParagraph}>
            Different programming ecosystems represent time values in different decimal bases:
          </p>
          <ul className={styles.seoList}>
            <li className={styles.seoListItem}>
              <strong>Unix Seconds (10 digits):</strong> The standard output of Unix shell commands (e.g. <code>date +%s</code>) and backend databases like PostgreSQL or MySQL.
            </li>
            <li className={styles.seoListItem}>
              <strong>JavaScript Milliseconds (13 digits):</strong> Used by Javascript engines (e.g. <code>Date.now()</code>) and Java APIs. Milliseconds offer sub-second resolution for network tracing and debugging.
            </li>
          </ul>

          <h3 className={styles.seoHeading} style={{ fontSize: "1.2rem" }}>The Year 2038 Problem (Y2K38)</h3>
          <p className={styles.seoParagraph}>
            Many legacy database columns and systems store Unix time as a 32-bit signed integer. The maximum integer value represented in a signed 32-bit block is 2,147,483,647. On <strong>January 19, 2038 at 03:14:07 UTC</strong>, the timestamp counter will overflow and wrap around as a negative integer, resetting clocks back to 1901. Modern platforms resolve this problem by transitioning timestamp variables to 64-bit integer values, pushing the overflow limit out by billions of years.
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
