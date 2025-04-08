import type React from "react";
import type { Metadata } from "next";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import DashboardNav from "@/components/layouts/DashboardNav";
import { Button } from "@mcw/ui";

export const metadata: Metadata = {
  title: "Dashboard | McNulty Counseling and Wellness",
  description: "Client Portal Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Dashboard Navigation */}
      <div className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <DashboardNav />
          <Button
            variant="outline"
            className="text-xs border-green-700 text-green-700 hover:bg-green-50"
          >
            REQUEST APPOINTMENT
          </Button>
        </div>
      </div>

      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
