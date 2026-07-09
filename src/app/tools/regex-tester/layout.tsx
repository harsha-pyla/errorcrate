import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real-Time Regex Tester - Validate Regular Expressions | ErrorCrate",
  description: "Test and validate regular expression patterns against target subject strings in real-time. View captures, match indices, and subgroups.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
