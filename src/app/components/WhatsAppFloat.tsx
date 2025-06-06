"use client";
import { useEffect, useState } from "react";

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setShowPopup(false); // Sembunyikan popup saat scroll ke atas
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const phoneNumber = "6287785281817";
  const message = "Halo, saya tertarik dengan layanan Anda";

  return (
    <>
      {/* Floating WhatsApp Icon */}
      <div
        onClick={() => setShowPopup(!showPopup)}
        className={`fixed bottom-6 right-6 z-50 cursor-pointer transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48A11.94 11.94 0 0012.06 0C5.38 0 .05 5.32.05 11.91a11.91 11.91 0 001.62 5.94L0 24l6.31-1.64a11.88 11.88 0 005.72 1.45h.05c6.66 0 12.05-5.37 12.06-11.94a11.84 11.84 0 00-3.62-8.39zm-8.46 18.24h-.04a10.09 10.09 0 01-5.13-1.39l-.37-.22-3.74.97 1-3.64-.24-.38A9.75 9.75 0 012.04 11.9C2.05 6.58 6.69 2 12.06 2A9.91 9.91 0 0122.1 11.9c0 5.5-4.59 9.98-10.04 9.82zm5.6-7.42c-.3-.15-1.76-.87-2.03-.97s-.47-.15-.66.15-.76.96-.94 1.16-.35.22-.65.07a8.13 8.13 0 01-2.39-1.5 8.99 8.99 0 01-1.65-2.06c-.17-.3 0-.46.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37 0-.52s-.66-1.6-.91-2.2c-.24-.58-.5-.5-.67-.5h-.57c-.2 0-.52.08-.79.37s-1.04 1-1.04 2.44 1.07 2.82 1.23 3.01c.15.2 2.1 3.2 5.1 4.4.71.31 1.26.5 1.7.63.72.23 1.37.2 1.89.13.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.31.17-1.42-.08-.11-.27-.17-.57-.3z" />
          </svg>
        </div>
      </div>

      {/* WhatsApp Popup */}
      {showPopup && (
        <div className="fixed bottom-24 right-6 z-50 w-72 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-[#075E54] text-white px-4 py-3 flex items-center">
            <img
              src="/blue.png"
              alt="Profile"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div className="flex-1">
              <div className="font-semibold leading-tight">Blue Line AutoCare</div>
              <div className="text-sm opacity-90">Customer Support</div>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="text-white text-xl font-bold"
            >
            </button>
          </div>
          <div className="bg-[#ECE5DD] px-4 py-3 text-sm">
            <div className="bg-white rounded-xl px-3 py-2 shadow text-black">
              <strong>Customer Support</strong>
              <div>Halo, Apa ada yang bisa dibantu?</div>
              <div className="text-right text-xs text-gray-500 mt-1">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
          <div className="bg-white px-4 py-3">
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-medium w-full block text-center py-2 rounded-lg"
            >
              <svg
                className="inline mr-2"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.52 3.48A11.94 11.94 0 0012.06 0C5.38 0 .05 5.32.05 11.91a11.91 11.91 0 001.62 5.94L0 24l6.31-1.64a11.88 11.88 0 005.72 1.45h.05c6.66 0 12.05-5.37 12.06-11.94a11.84 11.84 0 00-3.62-8.39z" />
              </svg>
              Click to start chat
            </a>
          </div>
        </div>
      )}
    </>
  );
}
