import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure JWT Token Decoder - Inspect Header & Claims | ErrorCrate",
  description: "Decode JSON Web Tokens (JWT) client-side instantly. Inspect header metadata, payload claims, and active/expired timestamps locally.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
