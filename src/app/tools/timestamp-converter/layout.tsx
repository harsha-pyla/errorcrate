import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unix Epoch Timestamp Converter - Convert Time & Dates | ErrorCrate",
  description: "Convert Unix epoch integer timestamps (seconds and milliseconds) to local/UTC dates, and calculate dates back to timestamps.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
