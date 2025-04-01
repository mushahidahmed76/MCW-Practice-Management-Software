import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#3c4349] text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="font-medium mb-2">
                McNulty Counseling and Wellness
              </p>
              <p className="text-sm text-gray-300 mb-1">
                727.344.9867 |{" "}
                <Link href="/contact" className="underline">
                  Contact
                </Link>
              </p>
              <p className="text-sm text-gray-300">Saint Petersburg</p>
            </div>
            <div>
              <p className="font-medium mb-2">Main Location</p>
              <p className="text-sm text-gray-300 mb-1">
                711 2nd Ave NE, Suite 101
              </p>
              <p className="text-sm text-gray-300">
                Saint Petersburg FL 33701-3443
              </p>
            </div>
          </div>

          <div className="text-center text-xs text-gray-400 mb-4">
            <p>Powered By SimplePractice</p>
            <div className="mt-2">
              <Link href="/privacy" className="underline mx-1">
                Privacy
              </Link>{" "}
              •
              <Link href="/terms" className="underline mx-1">
                Terms
              </Link>{" "}
              •
              <Link href="/license" className="underline mx-1">
                License Agreement
              </Link>{" "}
              •
              <Link href="/help" className="underline mx-1">
                Help Center
              </Link>
            </div>
          </div>

          <div className="text-center text-xs text-gray-400">
            <p className="uppercase">
              THE CLIENT PORTAL IS NOT TO BE USED FOR EMERGENCY SITUATIONS. IF
              YOU OR OTHERS ARE IN IMMEDIATE DANGER OR EXPERIENCING A MEDICAL
              EMERGENCY, CALL 911 IMMEDIATELY.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
