"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="flex">
      <Link
        href="/appointments"
        className={`px-6 py-4 text-sm border-b-2 ${
          pathname.includes("/appointments")
            ? "text-green-700 border-green-700"
            : "text-gray-600 border-transparent hover:border-gray-300"
        }`}
      >
        APPOINTMENTS
      </Link>
      <Link
        href="/documents"
        className={`px-6 py-4 text-sm border-b-2 ${
          pathname.includes("/documents")
            ? "text-green-700 border-green-700"
            : "text-gray-600 border-transparent hover:border-gray-300"
        }`}
      >
        DOCUMENTS
      </Link>
      <Link
        href="/billing"
        className={`px-6 py-4 text-sm border-b-2 ${
          pathname.includes("/billing")
            ? "text-green-700 border-green-700"
            : "text-gray-600 border-transparent hover:border-gray-300"
        }`}
      >
        BILLING & PAYMENTS
      </Link>
    </nav>
  );
}
