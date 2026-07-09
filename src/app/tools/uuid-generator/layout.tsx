import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bulk UUID Generator - Random v4 & Time-Based v1 | ErrorCrate",
  description: "Generate RFC 4122 Version 4 (Random) and Version 1 (Time-based) UUIDs/GUIDs in bulk. Configure formatting uppercase, braces, and hyphens.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
