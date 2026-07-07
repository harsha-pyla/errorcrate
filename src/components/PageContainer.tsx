"use client";

import React from "react";
import { usePathname } from "next/navigation";
import SidebarLeft from "./SidebarLeft";
import styles from "@/app/layout.module.css";

export default function PageContainer({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLearningPage = pathname === "/learning" || pathname.startsWith("/learning/");

  return (
    <div className={styles.container}>
      {!isLearningPage && (
        <div className={styles.sidebarLeft}>
          <SidebarLeft />
        </div>
      )}
      {children}
    </div>
  );
}
