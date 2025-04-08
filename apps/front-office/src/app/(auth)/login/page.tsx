import LoginForm from "./components/LoginForm";
import Footer from "@/components/layouts/Footer";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col">
        <div className="bg-[#f8f6f1] w-full min-h-[50vh] pb-12 md:pb-24">
          <div className="pt-6 md:pt-12 px-4">
            <LoginForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
