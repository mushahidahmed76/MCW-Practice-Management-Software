"use client";

import { Mail, ArrowLeft } from "lucide-react";

interface LinkSentConfirmationProps {
  email: string;
  onBack: () => void;
}

export default function LinkSentConfirmation({
  email,
  onBack,
}: LinkSentConfirmationProps) {
  return (
    <>
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
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center relative">
              <Mail className="h-6 w-6 md:h-8 md:w-8 text-gray-500" />
              <div className="absolute -left-3 md:-left-4 top-1/2 -translate-y-1/2">
                <div className="space-y-1">
                  <div className="w-2 md:w-3 h-0.5 bg-gray-400"></div>
                  <div className="w-2 md:w-3 h-0.5 bg-gray-400"></div>
                  <div className="w-2 md:w-3 h-0.5 bg-gray-400"></div>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-xl md:text-2xl font-medium text-center mb-2">
            Your link is on the way
          </h1>

          <div className="text-center text-gray-500 text-xs md:text-sm space-y-4">
            <p>
              A link has been sent to
              <br />
              <span className="text-gray-700">{email}</span>
            </p>
            <p>It expires in 24 hours and can only be used once</p>
          </div>

          <div className="mt-6 md:mt-8 text-center text-xs md:text-sm">
            <p className="text-gray-500">
              Didn&apos;t get the link?{" "}
              <button
                onClick={() => {}}
                className="text-green-700 hover:underline"
              >
                Try these tips
              </button>
            </p>
          </div>
        </div>

        <div className="mt-6 md:mt-10 text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center text-green-700 hover:underline text-xs md:text-sm"
          >
            <ArrowLeft className="h-3 w-3 md:h-4 md:w-4 mr-1" />
            Back to Sign in
          </button>
        </div>
      </div>
    </>
  );
}
