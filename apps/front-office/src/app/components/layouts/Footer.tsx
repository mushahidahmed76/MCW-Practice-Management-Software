export default function Footer() {
  return (
    <footer className="bg-[#3c4349] text-gray-300 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-gray-300 font-medium mb-2">
              McNulty Counseling and Wellness
            </h3>
            <p className="text-sm">
              727.344.9867 |{" "}
              <a href="#" className="hover:underline">
                Contact
              </a>
            </p>
            <p className="text-sm">Saint Petersburg</p>
          </div>
          <div>
            <h3 className="text-gray-300 font-medium mb-2">Main Location</h3>
            <p className="text-sm">111 2nd Ave NE, Suite 1101</p>
            <p className="text-sm">Saint Petersburg, FL 33701-3443</p>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-6 text-xs text-gray-400">
          <div className="flex flex-wrap justify-center mb-4">
            <p className="mr-2">Powered By SimplePractice</p>
            <div className="flex space-x-2">
              <a href="#" className="hover:underline">
                Privacy
              </a>
              <span>•</span>
              <a href="#" className="hover:underline">
                Terms
              </a>
              <span>•</span>
              <a href="#" className="hover:underline">
                License Agreement
              </a>
              <span>•</span>
              <a href="#" className="hover:underline">
                Help Center
              </a>
              <span>•</span>
              <a href="#" className="hover:underline">
                Cookies
              </a>
            </div>
          </div>
          <p className="text-center text-[10px] uppercase">
            THE CLIENT PORTAL IS NOT TO BE USED FOR EMERGENCY SITUATIONS. IF YOU
            OR OTHERS ARE IN IMMEDIATE DANGER OR EXPERIENCING A MEDICAL
            EMERGENCY, CALL 911 IMMEDIATELY.
          </p>
        </div>
      </div>
    </footer>
  );
}
