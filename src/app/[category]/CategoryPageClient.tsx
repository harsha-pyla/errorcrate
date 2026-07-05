"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import styles from "./category.module.css";

interface CategoryPageClientProps {
  categoryId: string;
}

export default function CategoryPageClient({ categoryId }: CategoryPageClientProps) {
  const { errors, categories } = useApp();
  const [currentPage, setCurrentPage] = React.useState(1);
  const CARDS_PER_PAGE = 10;

  const category = categories.find((c) => c.id === categoryId);

  // Reset to page 1 when category changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [categoryId]);

  if (!category) {
    return (
      <div className={styles.emptyState}>
        <h3>Category not found.</h3>
      </div>
    );
  }

  // Filter errors by category
  const filteredErrors = errors.filter((err) => err.category === categoryId);

  // Calculate pagination variables
  const totalPages = Math.ceil(filteredErrors.length / CARDS_PER_PAGE);
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const endIndex = startIndex + CARDS_PER_PAGE;
  const paginatedErrors = filteredErrors.slice(startIndex, endIndex);

  // Helper to change page with smooth scroll reset
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

  // Generate page numbers array
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={`${styles.categoryPage} animated-fade`}>
      {/* Header Block resembling Stack Overflow Tagged questions */}
      <div className={styles.headerBlock}>
        <div className={styles.titleRow}>
          <h1 className={styles.title}>
            Error guides tagged [{category.name.replace(" Errors", "").replace(" Codes", "").toLowerCase()}]
          </h1>
          <span className={styles.countText}>{filteredErrors.length} guides found</span>
        </div>
      </div>

      {/* Error Listing */}
      <div className={styles.list}>
        {paginatedErrors.length > 0 ? (
          paginatedErrors.map((err) => {
            return (
              <div className={styles.row} key={err.id}>
                {/* Left Column Black Box Icon */}
                <div className={styles.cardBox}>
                  {getCardIconLabel(err.id, err.category)}
                </div>

                {/* Right Column Content */}
                <div className={styles.contentCol}>
                  <Link href={`/${category.id}/${err.id}`} className={styles.rowTitle}>
                    {err.name} - How to resolve this issue
                  </Link>
                  <p className={styles.rowDesc}>{err.shortDescription}</p>

                  <div className={styles.rowFooter}>
                    <div className={styles.footerLeft}>
                      <span className={styles.categoryName}>
                        {category.name.toLowerCase().replace(" errors", "").replace(" codes", "")}
                      </span>
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
          <div className={styles.emptyState}>
            <h3>No guides found under this tag yet.</h3>
            <p style={{ marginTop: "8px", marginBottom: "0px" }}>
              Feel free to request an error guide in this category using the top-right button!
            </p>
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`${styles.pageButton} ${currentPage === 1 ? styles.disabled : ""}`}
          >
            Prev
          </button>

          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`${styles.pageButton} ${currentPage === page ? styles.active : ""}`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`${styles.pageButton} ${currentPage === totalPages ? styles.disabled : ""}`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
