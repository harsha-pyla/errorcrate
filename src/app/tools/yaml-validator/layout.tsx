import { Metadata } from "next";

export const metadata: Metadata = {
  title: "YAML Syntax Validator & JSON Converter | ErrorCrate",
  description: "Validate YAML configuration files, identify tab/spacing formatting warnings, and convert YAML structures to standard JSON.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
