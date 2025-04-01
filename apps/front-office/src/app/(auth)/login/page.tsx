import Link from "next/link";
import Footer from "@/components/layouts/Footer";
import LoginForm from "./components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f6f1]">
      {/* Header */}
      <header className="py-10 text-center border-b border-gray-200">
        <h1 className="text-2xl font-medium text-gray-800">
          McNulty Counseling and Wellness
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-start pt-8 px-4">
        {/* Login Form Component */}
        <LoginForm />

        {/* New Client Link */}
        <div className="mt-6 text-sm">
          <span className="text-gray-500">New client?</span>{" "}
          <Link href="/appointment" className="text-[#0a8a4a] hover:underline">
            Request appointment
          </Link>
        </div>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
