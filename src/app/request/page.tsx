"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { supabase } from "@/lib/supabase";
import styles from "./request.module.css";

function RequestForm() {
  const { categories, addRequest } = useApp();
  const searchParams = useSearchParams();
  
  // Form states
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(categories[0]?.id || "nodejs");
  const [traceback, setTraceback] = useState("");
  const [context, setContext] = useState("");
  const [email, setEmail] = useState("");
  
  // Flow states
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Auto-populate error title from query parameters
  useEffect(() => {
    const errorParam = searchParams.get("error");
    if (errorParam) {
      setTitle(errorParam);
    }
  }, [searchParams]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!title.trim()) {
      newErrors.title = "Error title/name is required.";
    }
    if (!context.trim()) {
      newErrors.context = "Please provide some context about what you were doing.";
    }
    if (email.trim() && !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const { error } = await supabase.from("error_requests").insert([
        {
          title: title.trim(),
          category,
          traceback: traceback.trim(),
          context: context.trim(),
          email: email.trim() || null
        }
      ]);
      if (error) {
        console.error("Supabase request error:", error.message);
        setErrors({ submit: `Error submitting request: ${error.message}` });
      } else {
        addRequest({
          title: title.trim(),
          category,
          traceback: traceback.trim(),
          context: context.trim(),
          email: email.trim() || undefined,
        });
        setSubmitted(true);
      }
    } catch (err: any) {
      console.error(err);
      setErrors({ submit: "Connection to database failed. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className={styles.successCard}>
        <div className={styles.successIcon}>✓</div>
        <h2 className={styles.successTitle}>Request Submitted Successfully!</h2>
        <p className={styles.successDesc}>
          Thank you for requesting this error guide. Our expert technical writers will research the root causes, document code examples, and compile verified solutions.
        </p>
        <div className={styles.successNotice}>
          ⏰ This error guide will be researched and published on ErrorCrate within 24 to 48 hours.
        </div>
        {email && (
          <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "-8px" }}>
            We will email you at <strong>{email}</strong> the moment the resolution guide is live!
          </p>
        )}
        <Link href="/" className="btn-primary styles.successBtn">
          Return to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formCard}>
      {/* Title */}
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="title">
          Error Name / Title <span style={{ color: "#d03939" }}>*</span>
        </label>
        <span className={styles.labelDesc}>
          Provide the name or short summary of the error (e.g. "TypeError: Cannot read properties of undefined (reading 'map')").
        </span>
        <input
          id="title"
          type="text"
          className={styles.input}
          placeholder="e.g. ECONNRESET or IndentationError"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (errors.title) setErrors((prev) => ({ ...prev, title: "" }));
          }}
        />
        {errors.title && <span className={styles.errorMsg}>{errors.title}</span>}
      </div>

      {/* Category */}
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="category">
          Technology / Tag
        </label>
        <span className={styles.labelDesc}>
          Select which programming language, environment, or tool category this error belongs to.
        </span>
        <select
          id="category"
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

      {/* Traceback / Logs */}
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="traceback">
          Error Logs / Traceback / Code Snippet (Optional)
        </label>
        <span className={styles.labelDesc}>
          Paste the terminal traceback logs, command output, or block of code that triggers this error.
        </span>
        <textarea
          id="traceback"
          className={`${styles.textarea} ${styles.codeTextarea}`}
          placeholder="Paste logs here (monospaced styling will be applied)..."
          value={traceback}
          onChange={(e) => setTraceback(e.target.value)}
        />
      </div>

      {/* Context */}
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="context">
          Context / Actions Taken <span style={{ color: "#d03939" }}>*</span>
        </label>
        <span className={styles.labelDesc}>
          What were you trying to do when this error occurred? Did you try any solutions? (e.g., "I was upgrading package X to version Y and running npm run build").
        </span>
        <textarea
          id="context"
          className={styles.textarea}
          placeholder="Explain what steps led to this error..."
          value={context}
          onChange={(e) => {
            setContext(e.target.value);
            if (errors.context) setErrors((prev) => ({ ...prev, context: "" }));
          }}
        />
        {errors.context && <span className={styles.errorMsg}>{errors.context}</span>}
      </div>

      {/* User Email */}
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="email">
          Your Email Address (Optional)
        </label>
        <span className={styles.labelDesc}>
          Enter your email if you would like to be notified as soon as our team publishes the verified resolution guide!
        </span>
        <input
          id="email"
          type="email"
          className={styles.input}
          placeholder="yourname@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
          }}
        />
        {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
      </div>

      {errors.submit && (
        <div style={{ color: "#d03939", fontSize: "0.875rem", padding: "10px", backgroundColor: "#faf0f0", borderLeft: "4px solid #d03939", borderRadius: "4px", marginBottom: "16px" }}>
          {errors.submit}
        </div>
      )}

      {/* Form Actions */}
      <div className={styles.actions}>
        <Link href="/" className="btn-secondary" style={{ padding: "8px 16px" }}>
          Cancel
        </Link>
        <button type="submit" className="btn-primary" style={{ padding: "8px 16px" }} disabled={submitting}>
          {submitting ? "Submitting..." : "Submit Request"}
        </button>
      </div>
    </form>
  );
}

export default function RequestErrorPage() {
  return (
    <div className={styles.requestContainer}>
      {/* Header */}
      <div className={styles.headerBlock}>
        <h1 className={styles.title}>Request an Error Guide</h1>
        <p className={styles.subtitle}>
          Encountered an error or warning you couldn't resolve? Request a guide, and our experts will document it with clear solutions.
        </p>
      </div>

      {/* Blue Informational Box */}
      <div className={styles.infoCallout}>
        <div className={styles.calloutTitle}>
          <span>ℹ️</span> How ErrorCrate Requests Work
        </div>
        <div className={styles.calloutDesc}>
          Submit the exact name and traceback logs of the error. We will research the root cause, compile verified step-by-step solutions, and publish a complete Stack Overflow-style resolution guide in this wiki within <strong>24 to 48 hours</strong>.
        </div>
      </div>

      <Suspense fallback={<div className={styles.formCard}>Loading form...</div>}>
        <RequestForm />
      </Suspense>
    </div>
  );
}
