"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import TechIcon from "./TechIcon";
import styles from "./SidebarLeft.module.css";

export default function SidebarLeft() {
  const pathname = usePathname();
  const { errors, categories } = useApp();

  const getIsActive = (path: string, exact = false) => {
    if (exact) {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  // Dynamically calculate error count per category
  const getCategoryCount = (categoryId: string) => {
    return errors.filter((e) => e.category === categoryId).length;
  };



  return (
    <aside className={styles.sidebar}>
      {/* Home link */}
      <ul className={styles.navList}>
        <li>
          <Link
            href="/"
            className={`${styles.navLink} ${
              getIsActive("/", true) ? styles.activeLink : ""
            }`}
          >
            <TechIcon name="home" className={styles.icon} size={16} />
            <span style={{ fontWeight: 600 }}>Home</span>
          </Link>
        </li>
      </ul>

      {/* Categories header and list */}
      <div className={styles.sectionTitle}>Categories</div>
      <ul className={styles.navList}>
        {categories.map((cat) => {
          const isActive = pathname === `/${cat.id}`;
          const count = getCategoryCount(cat.id);
          return (
            <li key={cat.id}>
              <Link
                href={`/${cat.id}`}
                className={`${styles.navLink} ${styles.nestedLink} ${
                  isActive ? styles.activeLink : ""
                }`}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flex: 1, minWidth: 0 }}>
                  <TechIcon name={cat.id} className={styles.icon} size={15} />
                  <span className={styles.catLabel} title={cat.name}>
                    {cat.name.replace(" Errors", "").replace(" Codes", "")}
                  </span>
                </div>
                <span className={styles.countBadge}>{count}</span>
              </Link>
            </li>
          );
        })}
      </ul>

    </aside>
  );
}
