"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import styles from "./page.module.css";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Auto-populate from query parameters
  useEffect(() => {
    const subjectParam = searchParams.get("subject");
    if (subjectParam) {
      setSubject(subjectParam);
      setCategory("correction"); // Auto-select correction/docs for error page clicks
    }
  }, [searchParams]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Full name is required.";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Valid email is required.";
    if (!subject.trim()) newErrors.subject = "Subject is required.";
    if (!category) newErrors.category = "Please select a category.";
    if (!message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const { error } = await supabase.from("contact_messages").insert([
        {
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim(),
          category: category,
          message: message.trim()
        }
      ]);
      if (error) {
        console.error("Supabase error:", error.message);
        setErrors({ submit: `Error submitting to database: ${error.message}` });
      } else {
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
      <div style={{ textAlign: "center", padding: "20px 0" }}>
        <div style={{ fontSize: "2.5rem", color: "#2e7d32", marginBottom: "16px" }}>✓</div>
        <h3 className={styles.formTitle}>Thank You! Message Received.</h3>
        <p className={styles.formSubtitle} style={{ maxWidth: "500px", margin: "8px auto 0 auto" }}>
          We have received your request regarding <strong>{subject}</strong>. Our engineering support team will review your report and get back to you at <strong>{email}</strong> within 24 to 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formGrid}>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="contact-name">Full Name</label>
        <input
          id="contact-name"
          className={styles.input}
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (errors.name) setErrors(prev => ({ ...prev, name: "" }));
          }}
        />
        {errors.name && <span style={{ color: "#d03939", fontSize: "0.75rem", marginTop: "2px" }}>{errors.name}</span>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="contact-email">Email Address</label>
        <input
          id="contact-email"
          className={styles.input}
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors(prev => ({ ...prev, email: "" }));
          }}
        />
        {errors.email && <span style={{ color: "#d03939", fontSize: "0.75rem", marginTop: "2px" }}>{errors.email}</span>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="contact-subject">Subject</label>
        <input
          id="contact-subject"
          className={styles.input}
          type="text"
          placeholder="Bug Report / Documentation Request / Feedback"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
            if (errors.subject) setErrors(prev => ({ ...prev, subject: "" }));
          }}
        />
        {errors.subject && <span style={{ color: "#d03939", fontSize: "0.75rem", marginTop: "2px" }}>{errors.subject}</span>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="contact-category">Category</label>
        <select
          id="contact-category"
          className={styles.input}
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            if (errors.category) setErrors(prev => ({ ...prev, category: "" }));
          }}
        >
          <option value="" disabled>Select a category</option>
          <option value="bug">Bug Report</option>
          <option value="docs">Documentation Request</option>
          <option value="correction">Correction Request</option>
          <option value="feedback">General Feedback</option>
          <option value="partnership">Partnership Inquiry</option>
        </select>
        {errors.category && <span style={{ color: "#d03939", fontSize: "0.75rem", marginTop: "2px" }}>{errors.category}</span>}
      </div>

      <div className={styles.formGroupFull}>
        <label className={styles.label} htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          className={styles.textarea}
          placeholder="Describe your issue, request, or feedback in detail. Include error page URLs and stack traces if applicable."
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (errors.message) setErrors(prev => ({ ...prev, message: "" }));
          }}
        />
        {errors.message && <span style={{ color: "#d03939", fontSize: "0.75rem", marginTop: "2px" }}>{errors.message}</span>}
      </div>

      {errors.submit && (
        <div style={{ gridColumn: "1 / -1", color: "#d03939", fontSize: "0.875rem", padding: "8px", backgroundColor: "#faf0f0", borderLeft: "4px solid #d03939", borderRadius: "4px" }}>
          {errors.submit}
        </div>
      )}

      <button type="submit" className={styles.submitBtn} disabled={submitting}>
        {submitting ? "Submitting..." : "Submit Request"}
      </button>
    </form>
  );
}

export default function ContactFormClient() {
  return (
    <Suspense fallback={<div>Loading form...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
