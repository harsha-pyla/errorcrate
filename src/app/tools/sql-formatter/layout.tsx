import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SQL Query Formatter & Beautifier - Format Database Code | ErrorCrate",
  description: "Format, clean, and organize raw SQL database query blocks. Convert keywords casing, align joins, and minify SQL locally.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
