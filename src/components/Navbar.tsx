"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import SidebarLeft from "./SidebarLeft";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { errors, mobileMenuOpen, setMobileMenuOpen } = useApp();
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Keyboard shortcut Ctrl + /
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "/") {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile drawer on route change
  const pathname = usePathname();
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname, setMobileMenuOpen]);

  const filteredErrors = query.trim()
    ? errors.filter(
        (err) =>
          err.name.toLowerCase().includes(query.toLowerCase()) ||
          err.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
          err.badges.some((badge) => badge.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  const handleSuggestionClick = (id: string, category: string) => {
    setQuery("");
    setShowDropdown(false);
    router.push(`/${category}/${id}`);
  };

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <div className={styles.leftSection}>
          <button
            className={styles.hamburgerBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Sidebar"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>

          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>
              <svg width="28" height="31" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Hollow Crate Bottom */}
                <polygon points="4,14 16,8 28,14 16,20" fill="#EAEAEA" stroke="#BCBBBB" strokeWidth="2" strokeLinejoin="round" />
                <polygon points="4,14 16,20 16,30 4,24" fill="#B6B5B5" stroke="#9A9898" strokeWidth="1.5" strokeLinejoin="round" />
                <polygon points="16,20 28,14 28,24 16,30" fill="#D2D1D1" stroke="#B8B7B7" strokeWidth="1.5" strokeLinejoin="round" />
                <line x1="4" y1="19" x2="16" y2="25" stroke="#8A8888" strokeWidth="1.5" />
                <line x1="16" y1="25" x2="28" y2="19" stroke="#9E9C9C" strokeWidth="1.5" />

                {/* Floating Warning Triangle (Error) */}
                <polygon points="16,2 8,15 24,15" fill="#F48024" stroke="#E0731B" strokeWidth="1" strokeLinejoin="round" />
                <line x1="16" y1="6" x2="16" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <circle cx="16" cy="13" r="1" fill="white" />
              </svg>
            </span>
            <span className={styles.logoText}>
              Error<span style={{ fontWeight: 800 }}>Crate</span>
            </span>
          </Link>

          <nav className={styles.navLinks}>
            <Link href="/about" className={styles.navItem}>About</Link>
            <Link href="/contact" className={styles.navItem}>Contact</Link>
            <Link href="/help" className={styles.navItem}>Help</Link>
          </nav>
        </div>

        <div className={styles.searchContainer} ref={dropdownRef}>
          <div className={styles.searchWrapper}>
            <span className={styles.searchIcon}>
              <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.searchSvg}>
                <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="13.5" y1="13.5" x2="18" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </span>
            <input
              ref={searchInputRef}
              type="text"
              className={styles.searchInput}
              placeholder="Search errors, solutions, and logs..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowDropdown(true);
              }}
              onFocus={() => setShowDropdown(true)}
            />
            <kbd className={styles.shortcutHint}>Ctrl /</kbd>
          </div>

          {showDropdown && query.trim() !== "" && (
            <div className={styles.suggestionsDropdown}>
              {filteredErrors.length > 0 ? (
                filteredErrors.map((err) => (
                  <div
                    key={`${err.category}-${err.id}`}
                    className={styles.suggestionItem}
                    onClick={() => handleSuggestionClick(err.id, err.category)}
                  >
                    <div className={styles.suggestionHeader}>
                      <span className={styles.suggestionName}>{err.name}</span>
                      <span className={styles.suggestionCategory}>
                        {err.category}
                      </span>
                    </div>
                    <div className={styles.suggestionDesc}>{err.shortDescription}</div>
                  </div>
                ))
              ) : (
                <div className={styles.noSuggestions}>No matching errors found</div>
              )}
            </div>
          )}
        </div>

        <div className={styles.rightSection}>
          {/* Request Error Button */}
          <Link href="/request" className={styles.requestBtn}>
            Request Error
          </Link>
        </div>
      </div>

      {/* Mobile Drawer Navigation overlay */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawerOverlay} onClick={() => setMobileMenuOpen(false)}>
          <div className={styles.mobileDrawerContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.drawerHeader}>
              <span className={styles.drawerTitle}>Navigation</span>
              <button className={styles.closeDrawerBtn} onClick={() => setMobileMenuOpen(false)}>
                ✕
              </button>
            </div>
            <div className={styles.drawerBody}>
              <SidebarLeft />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
