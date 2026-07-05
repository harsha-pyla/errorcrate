"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import styles from "./page.module.css";
import { ErrorInfo } from "@/types";

export default function Home() {
  const { errors, categories } = useApp();
  const [activeTab, setActiveTab] = useState<"newest" | "oldest">("newest");
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Reset page to 1 when sort changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  // Handle sorting
  const sortedErrors = [...errors];
  if (activeTab === "oldest") {
    sortedErrors.reverse();
  }

  // Pagination calculation
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentErrors = sortedErrors.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedErrors.length / itemsPerPage);

  // Helper to get black box label dynamically
  const getCardIconLabel = (errId: string, catId: string) => {
    if (catId === "http-status") {
      return errId.split("-")[0]; // e.g. "404"
    }
    switch (catId) {
      case "nodejs": return "NODE";
      case "javascript": return "JS";
      case "react": return "RCT";
      case "docker": return "DOCK";
      case "git": return "GIT";
      case "linux": return "LIN";
      case "sql": return "SQL";
      case "python": return "PY";
      case "kubernetes": return "K8S";
      case "aws": return "AWS";
      default: return "ERR";
    }
  };

  // Smart page numbers: show 1,2,3 ... last with current page always visible
  const getPageNumbers = (): (number | string)[] => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | string)[] = [];

    // Always show first 3 pages
    pages.push(1, 2, 3);

    if (currentPage > 3 && currentPage < totalPages) {
      // Current page is in the middle range
      if (currentPage > 4) pages.push("ellipsis-start");
      pages.push(currentPage);
      if (currentPage < totalPages - 1) pages.push("ellipsis-end");
    } else if (currentPage <= 3) {
      // Current page already in first 3
      pages.push("ellipsis-end");
    } else {
      // Current page is the last page
      pages.push("ellipsis-end");
    }

    // Always show last page
    if (!pages.includes(totalPages)) {
      pages.push(totalPages);
    }

    // Remove duplicates while preserving order
    const seen = new Set<number | string>();
    return pages.filter((p) => {
      if (seen.has(p)) return false;
      seen.add(p);
      return true;
    });
  };

  return (
    <div className="animated-fade">
      {/* Header Block */}
      <div className={styles.headerBlock}>
        <div className={styles.titleRow}>
          <h1 className={styles.title}>All Errors</h1>
          <span className={styles.countText}>{errors.length} error guides documented</span>
        </div>
      </div>


      {/* Filter Tabs */}
      <div className={styles.filterBar}>
        <div></div> {/* spacer to align tabs right */}
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === "newest" ? styles.activeTab : ""}`}
            onClick={() => setActiveTab("newest")}
          >
            Newest
          </button>
          <button
            className={`${styles.tab} ${activeTab === "oldest" ? styles.activeTab : ""}`}
            onClick={() => setActiveTab("oldest")}
          >
            Oldest
          </button>
        </div>
      </div>

      {/* Error Listing (Sliced for pagination) */}
      <div className={styles.list}>
        {currentErrors.length > 0 ? (
          currentErrors.map((err) => {
            const cat = categories.find((c) => c.id === err.category);

            return (
              <div className={styles.row} key={`${err.category}-${err.id}`}>
                {/* Left Column Black Box Icon */}
                <div className={styles.cardBox}>
                  {getCardIconLabel(err.id, err.category)}
                </div>

                {/* Right Column Content */}
                <div className={styles.contentCol}>
                  <Link href={`/${err.category}/${err.id}`} className={styles.rowTitle}>
                    {err.name} - How to resolve this issue
                  </Link>
                  <p className={styles.rowDesc}>{err.shortDescription}</p>
                  
                  <div className={styles.rowFooter}>
                    <div className={styles.footerLeft}>
                      {cat && (
                        <Link href={`/${cat.id}`} className={styles.categoryName}>
                          {cat.name.replace(" Errors", "").replace(" Codes", "").toLowerCase()}
                        </Link>
                      )}
                      <span className={styles.dividerDot}>•</span>
                      {err.badges.slice(1).map((b, idx) => (
                        <span key={idx} className="so-tag" style={{ margin: 0 }}>
                          {b.toLowerCase()}
                        </span>
                      ))}
                    </div>

                    <div className={styles.footerRight}>
                      updated {err.updatedAt}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div style={{ padding: "80px 24px", textAlign: "center", color: "var(--text-muted)", background: "var(--surface)", borderBottom: "1px solid var(--border)", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "2rem" }}>🔍</span>
            <h3 style={{ fontWeight: 400, color: "var(--text-dark)" }}>No error guides documented yet</h3>
            <p style={{ fontSize: "0.85rem", maxWidth: "400px", margin: "0 auto", lineHeight: "1.4" }}>
              Our wiki is ready for data! Click <strong>Request Error</strong> to write and share the first guide.
            </p>
          </div>
        )}
      </div>

      {/* Stack Overflow Pagination Controls */}
      {totalPages > 1 && (
        <div className={styles.paginationContainer}>
          <div className={styles.pageButtons}>
            {/* Previous Page Button */}
            {currentPage > 1 && (
              <button
                className={styles.pageBtn}
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >
                Prev
              </button>
            )}

            {/* Dynamic Page Number Buttons */}
            {getPageNumbers().map((num, index) => {
              if (num === "ellipsis-start" || num === "ellipsis-end") {
                return (
                  <span key={`el-${index}`} className={styles.ellipsis}>
                    ...
                  </span>
                );
              }
              
              const pageNum = num as number;
              return (
                <button
                  key={`page-${pageNum}`}
                  className={`${styles.pageBtn} ${
                    currentPage === pageNum ? styles.pageBtnActive : ""
                  }`}
                  onClick={() => setCurrentPage(pageNum)}
                >
                  {pageNum}
                </button>
              );
            })}

            {/* Next Page Button */}
            {currentPage < totalPages && (
              <button
                className={styles.pageBtn}
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
