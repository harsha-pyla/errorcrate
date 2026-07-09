import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON Formatter & Validator - Format & Minify JSON | ErrorCrate",
  description: "Format, beautify, minify, validate, and syntax highlight raw JSON payloads instantly. Safe, browser-local parsing with detailed syntax error reporting.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
