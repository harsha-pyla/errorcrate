"use client";

import React from "react";
import { usePathname } from "next/navigation";
import SidebarRightWrapper from "./SidebarRightWrapper";
import styles from "@/app/layout.module.css";

export default function MainLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // Pages where center and right layouts are combined (full width center layout without right sidebar)
  const fullWidthRoutes = ["/changelog", "/help", "/privacy", "/terms", "/cookies", "/wiki", "/about", "/contact", "/blog", "/learning"];
  const isFullWidthPage = fullWidthRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  );

  return (
    <div className={styles.mainContentWrapper}>
      <main className={styles.main}>{children}</main>
      {!isFullWidthPage && (
        <div className={styles.sidebarRight}>
          <SidebarRightWrapper />
        </div>
      )}
    </div>
  );
}
