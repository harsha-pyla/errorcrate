"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { learningQuestions } from "@/data/learning";
import Visualizer from "./Visualizer";
import styles from "./page.module.css";

export default function LearningClient() {
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const topics = ["All", "Python", "Java", "C", "C++"];
  const itemsPerPage = 10;

  const searchParams = useSearchParams();
  const tabParam = searchParams ? searchParams.get("tab") : null;

  // Sync activeTab with URL query parameter on change
  useEffect(() => {
    if (tabParam) {
      const normalizedParam = tabParam.toLowerCase() === "cpp" ? "c++" : tabParam.toLowerCase();
      const matched = topics.find((t) => t.toLowerCase() === normalizedParam);
      if (matched) {
        setActiveTab(matched);
      }
    }
  }, [tabParam]);

  // Reset page number on tab change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  // Dynamically update page title & meta descriptions for SEO when tab changes
  useEffect(() => {
    let title = "Learning Crate — Master Core Coding Concepts | ErrorCrate";
    let desc = "Understand the mechanical root causes behind compiler errors, memory leaks, and distributed exceptions. Master core development concepts instead of just patching code.";

    const tabLower = activeTab.toLowerCase();
    if (tabLower === "python") {
      title = "Python Coding Questions, Solutions & Visual Explanations | ErrorCrate";
      desc = "Learn Python by solving real coding questions with beginner-friendly explanations, visual execution, dry runs, built-in functions, interview tips, optimized solutions, and complexity analysis.";
    } else if (tabLower === "java") {
      title = "Java Coding Questions, Solutions & Visual Explanations | ErrorCrate";
      desc = "Learn Java by solving real coding questions with beginner-friendly explanations, visual execution, dry runs, OOP examples, interview tips, optimized solutions, and complexity analysis.";
    } else if (tabLower === "c") {
      title = "C Coding Questions, Solutions & Visual Explanations | ErrorCrate";
      desc = "Learn C by solving real coding questions with beginner-friendly explanations, visual execution, dry runs, pointer diagrams, interview tips, optimized solutions, and complexity analysis.";
    } else if (tabLower === "c++") {
      title = "C++ Coding Questions, Solutions & Visual Explanations | ErrorCrate";
      desc = "Learn C++ by solving real coding questions with beginner-friendly explanations, visual execution, dry runs, STL examples, interview tips, optimized solutions, and complexity analysis.";
    }

    // Apply title
    document.title = title;

    // Apply meta descriptions
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", desc);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", desc);

    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", title);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", desc);
  }, [activeTab]);

  // Filter questions based on active tab
  const filteredQuestions = learningQuestions.filter((q) => {
    if (activeTab === "All") return true;
    const activeTopic = activeTab.toLowerCase() === "c++" ? "cpp" : activeTab.toLowerCase();
    return q.topic.toLowerCase() === activeTopic;
  });

  const totalPages = Math.ceil(filteredQuestions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedQuestions = filteredQuestions.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className={styles.pageContainer}>
      {/* Top Left Back Button */}
      <div className={styles.topBar}>
        <Link href="/" className={styles.backButton}>
          back
        </Link>
      </div>

      {/* Centered Typography Title */}
      <main className={styles.centerHero}>
        <div className={styles.animatedContent}>
          <h1 className={styles.saasTitle}>
            {["Learn", "Programming", "by"].map((word, idx) => (
              <span key={idx} className={styles.wordNormal} style={{ animationDelay: `${idx * 0.08}s` }}>
                {word}{"\u00A0"}
              </span>
            ))}
            {["Understanding", "Every", "Line", "of", "Code"].map((word, idx) => (
              <span key={idx} className={styles.wordGradient} style={{ animationDelay: `${(idx + 3) * 0.08}s` }}>
                {word}{"\u00A0"}
              </span>
            ))}
          </h1>

          {/* Staggered Tab Menu Row with thin bottom border */}
          <div className={styles.tabContainer}>
            <div className={styles.tabRow}>
              {topics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setActiveTab(topic)}
                  className={`${styles.tabBtn} ${
                    activeTab === topic ? styles.activeTab : ""
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          {/* Questions Rows / Vertical cards with thin border lines */}
          <div className={styles.questionsContainer}>
            {paginatedQuestions.length > 0 ? (
              <>
                <div className={styles.questionsList}>
                  {paginatedQuestions.map((q) => (
                    <Link
                      key={`${q.topic}-${q.id}`}
                      href={`/learning/${q.topic}/${q.id}`}
                      className={styles.questionRow}
                    >
                      <div className={styles.questionMain}>
                        <span className={styles.questionTitle}>{q.title}</span>
                        <span className={`${styles.langBadge} ${styles[q.topic.toLowerCase()]}`}>
                          {q.topic.toUpperCase()}
                        </span>
                      </div>
                      <span
                        className={`${styles.difficultyBadge} ${
                          q.difficulty === "Easy"
                            ? styles.easy
                            : q.difficulty === "Medium"
                            ? styles.medium
                            : styles.advanced
                        }`}
                      >
                        {q.difficulty}
                      </span>
                    </Link>
                  ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className={styles.paginationContainer}>
                    <button
                      onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                      className={styles.pageArrowBtn}
                    >
                      Previous
                    </button>
                    
                    <div className={styles.pageNumbers}>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`${styles.pageNumBtn} ${
                            currentPage === pageNum ? styles.activePageNum : ""
                          }`}
                        >
                          {pageNum}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                      disabled={currentPage === totalPages}
                      className={styles.pageArrowBtn}
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className={styles.noQuestions}>
                Coming soon! We are compiling more visual guides for this category.
              </div>
            )}
          </div>

          <div className={styles.glowingOrb} />
        </div>
      </main>
    </div>
  );
}
