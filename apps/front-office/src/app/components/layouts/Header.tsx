"use client";

import Link from "next/link";
import { Bell } from "lucide-react";

interface HeaderProps {
  title?: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="border-b border-gray-200 w-full">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-lg font-medium text-gray-800">
          McNulty Counseling and Wellness
        </h1>

        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute translate-y-[-8px] translate-x-[8px] bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              2
            </span>
            <span className="ml-2 text-sm text-gray-600">Announcements</span>
          </div>
          <div className="h-4 w-px bg-gray-300 mx-2"></div>
          <Link
            href="/logout"
            className="text-sm text-gray-600 hover:underline"
          >
            Sign out
          </Link>
        </div>
      </div>

      {title && (
        <div className="bg-[#f8f6f1] py-6">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-xl font-medium text-gray-800">{title}</h1>
          </div>
        </div>
      )}
    </header>
  );
}
