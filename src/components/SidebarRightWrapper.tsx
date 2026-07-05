"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import SidebarRight from "./SidebarRight";

export default function SidebarRightWrapper() {
  const pathname = usePathname();
  const { errors } = useApp();

  // Extract error id from path if it matches /[category]/[id]
  const parts = pathname.split("/");
  const errorId = parts.length === 3 ? parts[2] : undefined;
  const currentError = errors.find((err) => err.id === errorId);

  return <SidebarRight currentError={currentError} />;
}
