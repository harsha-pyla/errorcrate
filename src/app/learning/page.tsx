import React, { Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Learning Crate — Master Core Coding Concepts | ErrorCrate",
  description:
    "Understand the mechanical root causes behind compiler errors, memory leaks, and distributed exceptions. Master core development concepts instead of just patching code.",
  alternates: {
    canonical: "https://errorcrate.com/learning",
  },
  openGraph: {
    title: "Learning Crate — Master Core Coding Concepts | ErrorCrate",
    description:
      "Understand the mechanical root causes behind compiler errors, memory leaks, and distributed exceptions. Master core development concepts instead of just patching code.",
    url: "https://errorcrate.com/learning",
    type: "website",
    siteName: "ErrorCrate",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learning Crate — Master Core Coding Concepts | ErrorCrate",
    description:
      "Master the underlying systems concepts of programming errors. Understand compiler pipelines, memory pools, and distributed networking mechanics.",
  },
};

import LearningClient from "./LearningClient";

export default function LearningPage() {
  return (
    <Suspense fallback={<div style={{ padding: "32px", textAlign: "center", color: "var(--text-muted)" }}>Loading...</div>}>
      <LearningClient />
    </Suspense>
  );
}
