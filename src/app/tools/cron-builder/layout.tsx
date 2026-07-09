import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cron Expression Builder & Crontab Translator | ErrorCrate",
  description: "Visually build crontab schedules and translate cron expressions back into plain, human-readable English descriptions.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
