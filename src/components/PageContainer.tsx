"use client";

import React from "react";
import { usePathname } from "next/navigation";
import SidebarLeft from "./SidebarLeft";
import styles from "@/app/layout.module.css";

export default function PageContainer({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isFullWidthPage = pathname === "/about" || pathname === "/tools" || pathname.startsWith("/tools/");

  return (
    <div className={styles.container}>
      {!isFullWidthPage && (
        <div className={styles.sidebarLeft}>
          <SidebarLeft />
        </div>
      )}
      {children}
    </div>
  );
}
