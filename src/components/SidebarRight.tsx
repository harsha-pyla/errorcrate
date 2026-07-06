"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { ErrorInfo } from "@/types";
import styles from "./SidebarRight.module.css";

const BlogIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

interface SidebarRightProps {
  currentError?: ErrorInfo;
}

export default function SidebarRight({ currentError }: SidebarRightProps) {
  const { errors } = useApp();

  const blogPosts = [
    { id: 1, text: "HTTP Status Codes Explained (100–599)", url: "/blog/http-status-codes-explained" },
    { id: 2, text: "50 Common Node.js Errors Every Developer Should Know", url: "/blog/common-nodejs-errors" },
    { id: 3, text: "30 Common AWS Errors Explained", url: "/blog/common-aws-errors" },
    { id: 4, text: "25 Docker Errors and How to Fix Them", url: "/blog/docker-errors-and-fixes" }
  ];

  const popularErrors = errors.slice(0, 5);

  if (!currentError) {
    // Default sidebar for Homepage and Category views
    return (
      <aside className={styles.sidebar}>
        <div className={styles.blogWidget}>
          <div className={styles.blogHeader}>ErrorCrate Blog</div>
          <ul className={styles.blogList}>
            {blogPosts.map((post) => (
              <li key={post.id} className={styles.blogItem}>
                <span className={styles.blogIcon}><BlogIcon /></span>
                <Link href={post.url} className={styles.blogLink}>
                  {post.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.widgetCard}>
          <div className={styles.widgetHeader}>Popular Guides</div>
          <ul className={styles.relatedList}>
            {popularErrors.map((rel) => (
              <li key={rel.id} className={styles.relatedItem}>
                <Link href={`/${rel.category}/${rel.id}`} className={styles.relatedLink}>
                  {rel.name}
                </Link>
                <span className={styles.relatedDesc}>{rel.shortDescription}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    );
  }

  // Get full error objects for related error links, filling up to at least 5 using same-category and shared-badge fallbacks
  let relatedList = errors.filter((err) =>
    err.id !== currentError.id && currentError.relatedErrors.includes(err.id)
  );

  if (relatedList.length < 5) {
    const sameCategoryErrors = errors.filter(
      (err) =>
        err.id !== currentError.id &&
        err.category === currentError.category &&
        !relatedList.some((r) => r.id === err.id)
    );
    relatedList = [...relatedList, ...sameCategoryErrors];
  }

  if (relatedList.length < 5) {
    const sharedBadgeErrors = errors.filter(
      (err) =>
        err.id !== currentError.id &&
        err.category !== currentError.category &&
        err.badges.some((badge) => currentError.badges.includes(badge)) &&
        !relatedList.some((r) => r.id === err.id)
    );
    relatedList = [...relatedList, ...sharedBadgeErrors];
  }

  if (relatedList.length < 5) {
    const extraErrors = errors.filter(
      (err) =>
        err.id !== currentError.id &&
        !relatedList.some((r) => r.id === err.id)
    );
    relatedList = [...relatedList, ...extraErrors];
  }

  const relatedErrorObjects = relatedList.slice(0, 5);

  // TOC Title dynamic mapper
  const getTocTitle = () => {
    if (currentError.category === "http-status") {
      return `What does ${currentError.name.split(" ")[0]} mean?`;
    }
    return "What does it mean?";
  };

  const handleScroll = (targetId: string) => {
    if (targetId === "sidebar-related") {
      const element = document.getElementById("related-widget");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside className={styles.sidebar}>
      {/* 1. ON THIS PAGE */}
      <div className={`${styles.widgetCard} ${styles.tocWidgetCard}`}>
        <div className={styles.widgetHeader}>On This Page</div>
        <ul className={styles.tocList}>
          <li>
            <button className={styles.tocLink} onClick={() => handleScroll("overview")}>
              {getTocTitle()}
            </button>
          </li>
          <li>
            <button className={styles.tocLink} onClick={() => handleScroll("causes")}>
              Common Causes
            </button>
          </li>
          <li>
            <button className={styles.tocLink} onClick={() => handleScroll("solutions")}>
              How to Fix
            </button>
          </li>
          <li>
            <button className={styles.tocLink} onClick={() => handleScroll("examples")}>
              Example
            </button>
          </li>
          <li>
            <button className={styles.tocLink} onClick={() => handleScroll("sidebar-related")}>
              Related Errors
            </button>
          </li>
          <li>
            <button className={styles.tocLink} onClick={() => handleScroll("faq")}>
              FAQ
            </button>
          </li>
        </ul>
      </div>

      {/* Blog Widget */}
      <div className={styles.blogWidget} style={{ marginBottom: "16px" }}>
        <div className={styles.blogHeader}>ErrorCrate Blog</div>
        <ul className={styles.blogList}>
          {blogPosts.map((post) => (
            <li key={post.id} className={styles.blogItem}>
              <span className={styles.blogIcon}><BlogIcon /></span>
              <Link href={post.url} className={styles.blogLink}>
                {post.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 2. RELATED ERRORS */}
      {relatedErrorObjects.length > 0 && (
        <div id="related-widget" className={styles.widgetCard}>
          <div className={styles.widgetHeader}>Related Errors</div>
          <ul className={styles.relatedList}>
            {relatedErrorObjects.map((rel) => (
              <li key={`${rel.category}-${rel.id}`} className={styles.relatedItem}>
                <Link href={`/${rel.category}/${rel.id}`} className={styles.relatedLink}>
                  {rel.name}
                </Link>
                <span className={styles.relatedDesc}>
                  {rel.shortDescription}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 3. OFFICIAL RESOURCES */}
      {currentError.helpfulResources.length > 0 && (
        <div className={styles.widgetCard}>
          <div className={styles.widgetHeader}>Official Resources</div>
          <ul className={styles.resourcesList}>
            {currentError.helpfulResources.map((res, idx) => (
              <li key={idx} className={styles.resourceItem}>
                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.resourceLink}
                >
                  <span>{res.name}</span>
                  <span className={styles.resourceIcon}>
                    {/* SVG external link box-arrow */}
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}
