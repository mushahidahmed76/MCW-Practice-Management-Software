"use client";

import type React from "react";

import { useState } from "react";
import { Mail } from "lucide-react";
import { Button, Input } from "@mcw/ui";
import Image from "next/image";
import Link from "next/link";
import LinkSentConfirmation from "./LinkSentConfirmation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLinkSent, setIsLinkSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Here you would implement your actual authentication logic
    // For now, we'll simulate checking if the email exists
    setTimeout(() => {
      setIsLoading(false);

      // Simulate email not found for demonstration
      if (email.includes("notfound") || Math.random() > 0.7) {
        setError(
          "Are you sure that's the email on file? Try a different email or contact your practitioner.",
        );
      } else {
        setIsLinkSent(true);
      }
    }, 1500);
  };

  const handleBackToSignIn = () => {
    setIsLinkSent(false);
    setEmail("");
    setError(null);
  };

  if (isLinkSent) {
    return <LinkSentConfirmation email={email} onBack={handleBackToSignIn} />;
  }

  return (
    <>
      {/* Inline Header for Login Form */}
      <header className="w-full border-b border-gray-200 mb-6 md:mb-12">
        <div className="max-w-6xl mx-auto px-4 py-3 md:py-4">
          <h1 className="text-base md:text-lg font-bold text-gray-800 text-center">
            McNulty Counseling and Wellness
          </h1>
        </div>
      </header>

      <div className="w-full max-w-[90%] sm:max-w-md mx-auto">
        <div className="bg-white p-4 md:p-8 rounded shadow-sm">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
              <Mail className="h-6 w-6 md:h-8 md:w-8 text-gray-500" />
            </div>
          </div>

          <h1 className="text-xl md:text-2xl font-medium text-center mb-2">
            Sign in
          </h1>

          <p className="text-center text-gray-500 text-xs md:text-sm mb-6">
            Enter your email address and we&apos;ll send you a password-free
            link to sign in
          </p>

          {error && (
            <div className="bg-red-50 border border-red-100 text-red-600 p-3 md:p-4 rounded mb-6 text-xs md:text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-xs md:text-sm text-gray-500"
                >
                  Email address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border-gray-300"
                  placeholder=""
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800 text-white text-xs md:text-sm py-2 h-auto"
                disabled={isLoading}
              >
                {isLoading ? "SENDING..." : "SEND LINK"}
              </Button>
            </div>
          </form>

          <div className="relative flex items-center justify-center mt-6 mb-6">
            <span className="relative bg-white px-2 text-xs text-gray-400 uppercase">
              or
            </span>
          </div>

          <Button
            variant="outline"
            className="w-full border-gray-300 text-gray-700 text-xs md:text-sm py-2 h-auto"
            type="button"
          >
            <Image
              src="/google-logo.svg"
              alt="Google"
              width={16}
              height={16}
              className="mr-2"
            />
            CONTINUE WITH GOOGLE
          </Button>
        </div>

        <div className="mt-4 md:mt-6 text-center text-xs md:text-sm">
          <span className="text-gray-500">New client?</span>{" "}
          <Link
            href="/request-appointment"
            className="text-green-700 hover:underline"
          >
            Request appointment
          </Link>
        </div>
      </div>
    </>
  );
}
