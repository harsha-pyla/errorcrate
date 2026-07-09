"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function CronBuilderPage() {
  const [minute, setMinute] = useState("*");
  const [hour, setHour] = useState("*");
  const [day, setDay] = useState("*");
  const [month, setMonth] = useState("*");
  const [dayOfWeek, setDayOfWeek] = useState("*");
  const [cronInput, setCronInput] = useState("* * * * *");
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    {
      question: "What is a crontab file?",
      answer: "A crontab (cron table) is a text file containing list commands to run on schedules. Each line defines a unique job pattern and execution task."
    },
    {
      question: "What do the 5 values in a cron expression mean?",
      answer: "The fields, from left to right, represent: Minute (0-59), Hour (0-23), Day of Month (1-31), Month (1-12), and Day of Week (0-6, with Sunday as 0)."
    },
    {
      question: "How do step values work?",
      answer: "Step values are written using the forward slash symbol (/). For example, */15 in the minutes field specifies execution at every 15-minute interval."
    },
    {
      question: "Are cron expressions evaluated server-side?",
      answer: "No. All translations and expression compilations run locally in your browser thread using pure JavaScript, keeping your automation settings completely private."
    }
  ];

  const syncSelectsToInput = (m: string, h: string, d: string, mo: string, w: string) => {
    const expr = `${m} ${h} ${d} ${mo} ${w}`;
    setCronInput(expr);
    setError(null);
  };

  const handleSelectChange = (field: string, val: string) => {
    let nextMin = minute;
    let nextHour = hour;
    let nextDay = day;
    let nextMonth = month;
    let nextWk = dayOfWeek;

    if (field === "minute") { setMinute(val); nextMin = val; }
    if (field === "hour") { setHour(val); nextHour = val; }
    if (field === "day") { setDay(val); nextDay = val; }
    if (field === "month") { setMonth(val); nextMonth = val; }
    if (field === "dayOfWeek") { setDayOfWeek(val); nextWk = val; }

    syncSelectsToInput(nextMin, nextHour, nextDay, nextMonth, nextWk);
  };

  const handleInputChange = (val: string) => {
    setCronInput(val);
    const parts = val.trim().split(/\s+/);
    
    if (parts.length !== 5) {
      setError("Expression must consist of exactly 5 elements separated by spaces.");
      return;
    }

    const cronRegex = /^[0-9*,/\-?]+$/;
    for (let i = 0; i < 5; i++) {
      if (!cronRegex.test(parts[i])) {
        setError(`Illegal characters detected in field ${i + 1}.`);
        return;
      }
    }

    setError(null);
    setMinute(parts[0]);
    setHour(parts[1]);
    setDay(parts[2]);
    setMonth(parts[3]);
    setDayOfWeek(parts[4]);
  };

  const handlePreset = (presetExpr: string) => {
    setCronInput(presetExpr);
    setError(null);
    const parts = presetExpr.split(" ");
    setMinute(parts[0]);
    setHour(parts[1]);
    setDay(parts[2]);
    setMonth(parts[3]);
    setDayOfWeek(parts[4]);
  };

  const handleCopy = () => {
    if (error) return;
    navigator.clipboard.writeText(cronInput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const translateCronExpression = (expression: string): string => {
    const parts = expression.trim().split(/\s+/);
    if (parts.length !== 5) {
      return "Expression must be 5 fields: Minute Hour Day Month Weekday.";
    }

    const [min, hr, dy, mo, wk] = parts;

    const translateMinute = (m: string) => {
      if (m === "*") return "every minute";
      if (m.startsWith("*/")) return `every ${m.substring(2)} minutes`;
      return `at minute ${m}`;
    };

    const translateHour = (h: string) => {
      if (h === "*") return "every hour";
      if (h.startsWith("*/")) return `every ${h.substring(2)} hours`;
      return `at hour ${h}:00`;
    };

    const translateDay = (d: string) => {
      if (d === "*") return "every day of the month";
      return `on day ${d} of the month`;
    };

    const translateMonth = (m: string) => {
      if (m === "*") return "every month";
      const months: any = {
        "1": "January", "2": "February", "3": "March", "4": "April", "5": "May", "6": "June",
        "7": "July", "8": "August", "9": "September", "10": "October", "11": "November", "12": "December"
      };
      return `in ${months[m] || "month " + m}`;
    };

    const translateWeekday = (w: string) => {
      if (w === "*") return "every day of the week";
      if (w === "1-5") return "Monday through Friday";
      if (w === "6,0" || w === "0,6") return "weekends (Saturday & Sunday)";
      const days: any = {
        "0": "Sunday", "1": "Monday", "2": "Tuesday", "3": "Wednesday", "4": "Thursday", "5": "Friday", "6": "Saturday"
      };
      return `on ${days[w] || "day " + w}`;
    };

    return `Runs ${translateMinute(min)} of ${translateHour(hr)}, ${translateDay(dy)}, ${translateMonth(mo)}, ${translateWeekday(wk)}.`;
  };

  const explanation = error ? null : translateCronExpression(cronInput);

  const relatedTools = [
    { name: "JSON Formatter", href: "/tools/json-formatter" },
    { name: "JWT Decoder", href: "/tools/jwt-decoder" },
    { name: "Regex Tester", href: "/tools/regex-tester" },
    { name: "UUID Generator", href: "/tools/uuid-generator" },
    { name: "SQL Formatter", href: "/tools/sql-formatter" },
    { name: "YAML Validator", href: "/tools/yaml-validator" },
    { name: "Cron Builder", href: "/tools/cron-builder", active: true },
    { name: "Timestamp Converter", href: "/tools/timestamp-converter" }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbs}>
        <Link href="/tools" style={{ color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-orange)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>Developer Utilities</Link>
        <span style={{ color: "var(--text-muted)", margin: "0 8px" }}>&gt;</span>
        <span className={styles.breadcrumbActive}>Scheduler</span>
      </div>
      
      <div className={styles.titleBlock}>
        <h1 className={styles.title}>Cron Expression Builder &amp; Translator</h1>
        <p className={styles.subtitle}>
          Visually build cron schedules, translate crontab files back to English, and configure trigger intervals.
        </p>
      </div>

      {/* Error Box */}
      {error && (
        <div className={styles.errorBox}>
          <span>❌</span>
          <div>
            <strong>Syntax Parsing Error:</strong> {error}
          </div>
        </div>
      )}

      {/* Workspace */}
      <div className={styles.workspace}>
        {/* Settings & Forms Column */}
        <div className={styles.editorPane}>
          {/* Selections Group */}
          <div className={styles.inputGroup}>
            <span className={styles.groupLabel}>Visual Schedule Configuration</span>
            
            <div className={styles.formRow}>
              {/* Minute */}
              <div className={styles.fieldWrapper}>
                <label htmlFor="minSelect" className={styles.fieldLabel}>Minute:</label>
                <select
                  id="minSelect"
                  className={styles.select}
                  value={minute}
                  onChange={(e) => handleSelectChange("minute", e.target.value)}
                >
                  <option value="*">Every Minute (*)</option>
                  <option value="*/5">Every 5 Minutes (*/5)</option>
                  <option value="*/15">Every 15 Minutes (*/15)</option>
                  <option value="*/30">Every 30 Minutes (*/30)</option>
                  <option value="0">Top of Hour (0)</option>
                </select>
              </div>

              {/* Hour */}
              <div className={styles.fieldWrapper}>
                <label htmlFor="hourSelect" className={styles.fieldLabel}>Hour:</label>
                <select
                  id="hourSelect"
                  className={styles.select}
                  value={hour}
                  onChange={(e) => handleSelectChange("hour", e.target.value)}
                >
                  <option value="*">Every Hour (*)</option>
                  <option value="*/2">Every 2 Hours (*/2)</option>
                  <option value="*/6">Every 6 Hours (*/6)</option>
                  <option value="0">Midnight (0)</option>
                  <option value="12">Noon (12)</option>
                </select>
              </div>
            </div>

            <div className={styles.formRow}>
              {/* Day */}
              <div className={styles.fieldWrapper}>
                <label htmlFor="daySelect" className={styles.fieldLabel}>Day of Month:</label>
                <select
                  id="daySelect"
                  className={styles.select}
                  value={day}
                  onChange={(e) => handleSelectChange("day", e.target.value)}
                >
                  <option value="*">Every Day (*)</option>
                  <option value="1">1st of Month (1)</option>
                  <option value="15">15th of Month (15)</option>
                </select>
              </div>

              {/* Month */}
              <div className={styles.fieldWrapper}>
                <label htmlFor="monthSelect" className={styles.fieldLabel}>Month:</label>
                <select
                  id="monthSelect"
                  className={styles.select}
                  value={month}
                  onChange={(e) => handleSelectChange("month", e.target.value)}
                >
                  <option value="*">Every Month (*)</option>
                  <option value="1">January (1)</option>
                  <option value="6">June (6)</option>
                </select>
              </div>
            </div>

            <div className={styles.formRow}>
              {/* Weekday */}
              <div className={styles.fieldWrapper}>
                <label htmlFor="wkSelect" className={styles.fieldLabel}>Day of Week:</label>
                <select
                  id="wkSelect"
                  className={styles.select}
                  value={dayOfWeek}
                  onChange={(e) => handleSelectChange("dayOfWeek", e.target.value)}
                >
                  <option value="*">Every Day (*)</option>
                  <option value="1-5">Weekdays Only (1-5)</option>
                  <option value="6,0">Weekends Only (6,0)</option>
                  <option value="0">Sunday Only (0)</option>
                </select>
              </div>

              {/* Manual input translation syncing */}
              <div className={styles.fieldWrapper}>
                <label htmlFor="cronInput" className={styles.fieldLabel}>Manual Expression:</label>
                <input
                  id="cronInput"
                  type="text"
                  className={styles.inputField}
                  value={cronInput}
                  onChange={(e) => handleInputChange(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Quick Presets Block */}
          <div className={styles.presetsCard}>
            <span className={styles.groupLabel}>Common Schedule Presets</span>
            <div className={styles.presetsGrid}>
              <button onClick={() => handlePreset("* * * * *")} className={styles.presetBtn}>
                Every Minute
              </button>
              <button onClick={() => handlePreset("*/5 * * * *")} className={styles.presetBtn}>
                Every 5 Minutes
              </button>
              <button onClick={() => handlePreset("0 * * * *")} className={styles.presetBtn}>
                Hourly
              </button>
              <button onClick={() => handlePreset("0 0 * * *")} className={styles.presetBtn}>
                Daily (Midnight)
              </button>
              <button onClick={() => handlePreset("0 0 * * 0")} className={styles.presetBtn}>
                Weekly (Sundays)
              </button>
              <button onClick={() => handlePreset("0 0 1 * *")} className={styles.presetBtn}>
                Monthly (1st)
              </button>
            </div>
          </div>
        </div>

        {/* Generated Output Column */}
        <div className={styles.resultsPane}>
          <div className={styles.resultBlock}>
            <div className={styles.expressionWrapper}>
              <span className={styles.expressionLabel}>Crontab Expression</span>
              <div className={styles.expressionText}>{cronInput}</div>
            </div>

            {explanation && (
              <div className={styles.explanationBox}>
                <span className={styles.explanationTitle}>Human Translation</span>
                <div className={styles.explanationText}>{explanation}</div>
              </div>
            )}

            <button onClick={handleCopy} className={styles.copyBtn} disabled={!!error}>
              {copied ? "✓ Copied!" : "Copy Cron Expression"}
            </button>
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
          <h2 className={styles.seoHeading}>Understanding Cron Job Schedules</h2>
          <p className={styles.seoParagraph}>
            A cron job is a Unix/Linux background scheduler command triggered at specified time intervals. These schedules are defined using crontab strings consisting of 5 columns separated by spaces.
          </p>

          <div className={styles.cheatsheetGrid}>
            {/* Columns definition */}
            <div className={styles.cheatCard}>
              <span className={styles.cheatTitle}>Crontab Columns Order</span>
              <div className={styles.cheatRow}>
                <span className={styles.cheatToken}>1st</span>
                <span className={styles.cheatDesc}>Minute (0 - 59)</span>
              </div>
              <div className={styles.cheatRow}>
                <span className={styles.cheatToken}>2nd</span>
                <span className={styles.cheatDesc}>Hour (0 - 23)</span>
              </div>
              <div className={styles.cheatRow}>
                <span className={styles.cheatToken}>3rd</span>
                <span className={styles.cheatDesc}>Day of Month (1 - 31)</span>
              </div>
              <div className={styles.cheatRow}>
                <span className={styles.cheatToken}>4th</span>
                <span className={styles.cheatDesc}>Month (1 - 12)</span>
              </div>
              <div className={styles.cheatRow}>
                <span className={styles.cheatToken}>5th</span>
                <span className={styles.cheatDesc}>Day of Week (0 - 6, Sun=0)</span>
              </div>
            </div>

            {/* Special chars */}
            <div className={styles.cheatCard}>
              <span className={styles.cheatTitle}>Special Operators</span>
              <div className={styles.cheatRow}>
                <span className={styles.cheatToken}>*</span>
                <span className={styles.cheatDesc}>Any value / wildcard</span>
              </div>
              <div className={styles.cheatRow}>
                <span className={styles.cheatToken}>,</span>
                <span className={styles.cheatDesc}>List separator (e.g. 1,3,5)</span>
              </div>
              <div className={styles.cheatRow}>
                <span className={styles.cheatToken}>-</span>
                <span className={styles.cheatDesc}>Range operator (e.g. 1-5)</span>
              </div>
              <div className={styles.cheatRow}>
                <span className={styles.cheatToken}>/</span>
                <span className={styles.cheatDesc}>Interval increments (e.g. */10)</span>
              </div>
            </div>
          </div>

          <h3 className={styles.seoHeading} style={{ fontSize: "1.2rem", marginTop: "16px" }}>Common Crontab Syntax Pitfalls</h3>
          <ul className={styles.seoList}>
            <li className={styles.seoListItem}>
              <strong>Day conflict:</strong> If both Day of Month and Day of Week are explicitly specified, the job triggers if *either* condition evaluates to true.
            </li>
            <li className={styles.seoListItem}>
              <strong>Step divisors:</strong> <code>*/5</code> translates to every 5 minutes (triggered on minutes divisible by 5: 0, 5, 10, etc.).
            </li>
            <li className={styles.seoListItem}>
              <strong>Server clock sync:</strong> Remember that cron schedules run on your server's local clock time (typically set to Coordinated Universal Time - UTC), not necessarily your user browser timezone.
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
