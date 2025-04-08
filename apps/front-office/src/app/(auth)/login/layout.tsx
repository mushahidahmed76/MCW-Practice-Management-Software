import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | McNulty Counseling and Wellness",
  description: "Sign in to your McNulty Counseling and Wellness account",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
