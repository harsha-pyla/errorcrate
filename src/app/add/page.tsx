"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import styles from "./add.module.css";

export default function AddErrorPage() {
  const { categories, addError } = useApp();
  const router = useRouter();

  // Form states
  const [name, setName] = useState("");
  const [category, setCategory] = useState(categories[0]?.id || "");
  const [badgesText, setBadgesText] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [meanDescription, setMeanDescription] = useState("");
  const [causesText, setCausesText] = useState("");
  const [solutionsText, setSolutionsText] = useState("");
  const [exampleTitle, setExampleTitle] = useState("");
  const [exampleLanguage, setExampleLanguage] = useState("javascript");
  const [exampleCode, setExampleCode] = useState("");

  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!name.trim()) {
      setErrorMsg("Error name is required.");
      return;
    }
    if (!shortDescription.trim()) {
      setErrorMsg("Short description is required.");
      return;
    }
    if (!meanDescription.trim()) {
      setErrorMsg("What does it mean? detailed explanation is required.");
      return;
    }

    // Process list texts
    const badges = badgesText.trim()
      ? badgesText.split(",").map((s) => s.trim())
      : ["Common"];
    
    // Always insert category name as the first badge
    const catObject = categories.find((c) => c.id === category);
    const catName = catObject ? catObject.name.replace(" Errors", "") : "General";
    const finalBadges = [catName, ...badges];

    const causes = causesText.trim()
      ? causesText.split("\n").map((s) => s.trim()).filter(Boolean)
      : ["Unknown root cause."];

    const solutions = solutionsText.trim()
      ? solutionsText.split("\n").map((s) => s.trim()).filter(Boolean)
      : ["Restart service and inspect logs."];

    const example = {
      title: exampleTitle.trim() || `${name} example`,
      language: exampleLanguage,
      code: exampleCode.trim() || "// No code block provided.",
    };

    // Add error to context and get the newly formatted ID
    const newId = addError({
      name: name.trim(),
      category,
      badges: finalBadges,
      shortDescription: shortDescription.trim(),
      meanDescription: meanDescription.trim(),
      causes,
      solutions,
      example,
      helpfulResources: [],
    });

    router.push(`/${category}/${newId}`);
  };

  return (
    <div className={`${styles.addPage} animated-fade`}>
      <h1 className={styles.title}>Document a public error</h1>

      {/* Info Callout Box */}
      <div className={styles.infoBox}>
        <h2 className={styles.infoTitle}>How to write a helpful resolution guide</h2>
        <p className={styles.infoText}>
          You are contributing to a community-indexed reference wiki. To ensure your guide is helpful to other developers:
        </p>
        <ul className={styles.infoList}>
          <li>Provide a clear, exact error string in the name field (e.g. ECONNRESET).</li>
          <li>Give a brief 1-sentence summary of when and why the error occurs.</li>
          <li>Outline the core root causes and concrete, actionable resolution steps.</li>
          <li>Attach a clean, working code block demonstrating the fix or error handler.</li>
        </ul>
      </div>

      {errorMsg && (
        <div
          className="badge badge-danger"
          style={{ width: "100%", padding: "10px", marginBottom: "20px", borderRadius: "3px", fontSize: "0.85rem" }}
        >
          ⚠️ {errorMsg}
        </div>
      )}

      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Card 1: Title */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Error Name</h3>
          <p className={styles.cardSubtitle}>
            Be specific and enter the exact compiler or runtime error code.
          </p>
          <input
            type="text"
            className={styles.input}
            placeholder="e.g. ECONNRESET, exit-137, TypeError"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Card 2: Classification */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Classification</h3>
          <p className={styles.cardSubtitle}>
            Select the matching runtime language/infrastructure category and add descriptive badges.
          </p>
          <div className={styles.groupRow}>
            <div>
              <label style={{ fontSize: "0.8rem", fontWeight: 600 }}>Category</label>
              <select
                className={styles.select}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label style={{ fontSize: "0.8rem", fontWeight: 600 }}>Badges (comma separated)</label>
              <input
                type="text"
                className={styles.input}
                placeholder="e.g. Network, Memory, Critical"
                value={badgesText}
                onChange={(e) => setBadgesText(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Card 3: Explanations */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Explanations</h3>
          <p className={styles.cardSubtitle}>
            Summarize the issue briefly, then explain what is happening under the hood.
          </p>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ fontSize: "0.8rem", fontWeight: 600 }}>Short Summary</label>
            <input
              type="text"
              className={styles.input}
              placeholder="e.g. Occurs when a TCP socket connection is closed abruptly by the peer."
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label style={{ fontSize: "0.8rem", fontWeight: 600 }}>What does it mean? (Detailed explanation)</label>
            <textarea
              className={styles.textarea}
              placeholder="Provide a detailed breakdown of the runtime socket state, memory boundary, or engine execution stack."
              value={meanDescription}
              onChange={(e) => setMeanDescription(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Card 4: Troubleshooting */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Troubleshooting</h3>
          <p className={styles.cardSubtitle}>
            Add list elements for causes and solutions. Type one item per line.
          </p>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ fontSize: "0.8rem", fontWeight: 600 }}>Common Causes (One per line)</label>
            <textarea
              className={styles.textarea}
              placeholder="e.g. Server processes crashed unexpectedly&#10;Idle connection dropped by firewall resets"
              value={causesText}
              onChange={(e) => setCausesText(e.target.value)}
            />
          </div>
          <div>
            <label style={{ fontSize: "0.8rem", fontWeight: 600 }}>Solution Steps (One per line)</label>
            <textarea
              className={styles.textarea}
              placeholder="e.g. Increase client timeout parameters&#10;Attach global uncaught exception handlers"
              value={solutionsText}
              onChange={(e) => setSolutionsText(e.target.value)}
            />
          </div>
        </div>

        {/* Card 5: Code Example */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Code Example</h3>
          <p className={styles.cardSubtitle}>
            Attach a brief coding snippet demonstrating how to solve or catch this error.
          </p>
          <div className={styles.groupRow} style={{ marginBottom: "16px" }}>
            <div>
              <label style={{ fontSize: "0.8rem", fontWeight: 600 }}>Snippet Title</label>
              <input
                type="text"
                className={styles.input}
                placeholder="e.g. Safe http request listener"
                value={exampleTitle}
                onChange={(e) => setExampleTitle(e.target.value)}
              />
            </div>
            <div>
              <label style={{ fontSize: "0.8rem", fontWeight: 600 }}>Language</label>
              <select
                className={styles.select}
                value={exampleLanguage}
                onChange={(e) => setExampleLanguage(e.target.value)}
              >
                <option value="javascript">JavaScript</option>
                <option value="typescript">TypeScript</option>
                <option value="python">Python</option>
                <option value="bash">Bash / Shell</option>
                <option value="sql">SQL</option>
                <option value="yaml">YAML</option>
              </select>
            </div>
          </div>
          <div>
            <label style={{ fontSize: "0.8rem", fontWeight: 600 }}>Code Block</label>
            <textarea
              className={`${styles.textarea} ${styles.codeArea}`}
              placeholder="// Write clean code blocks showing how to avoid or handle the exception"
              value={exampleCode}
              onChange={(e) => setExampleCode(e.target.value)}
            />
          </div>
        </div>

        {/* Actions */}
        <div className={styles.submitRow}>
          <button type="submit" className="btn-primary" style={{ padding: "10px 16px" }}>
            Post Error Guide
          </button>
          <Link href="/" className={styles.cancelLink}>
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
