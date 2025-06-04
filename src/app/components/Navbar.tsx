"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const scrollToLayanan = () => {
    const target = document.getElementById("layanan");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white shadow-md px-4 md:px-10 h-20 flex items-center justify-between z-50">

      {/* Logo */}
      <div className="flex items-center space-x-3">
        <Image
          src="/blue.png"
          alt="Logo"
          width={100}
          height={80}
          className="rounded-full object-contain"
        />
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-8 text-gray-800 font-semibold text-lg">
        <button onClick={scrollToTop} className="hover:text-blue-600 transition">
          Beranda
        </button>
        <button onClick={scrollToLayanan} className="hover:text-blue-600 transition">
          Layanan
        </button>
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu with Smooth & Flexible Transition */}
      <div
        className={`absolute top-full left-0 right-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 overflow-hidden transition-all duration-300 ease-in-out md:hidden z-40 ${
          isOpen ? "max-h-screen py-6" : "max-h-0 py-0"
        }`}
      >
        <button
          onClick={scrollToTop}
          className="hover:text-blue-600 text-gray-800 font-semibold text-lg transition"
        >
          Beranda
        </button>
        <button
          onClick={scrollToLayanan}
          className="hover:text-blue-600 text-gray-800 font-semibold text-lg transition"
        >
          Layanan
        </button>
      </div>
    </nav>
  );
}
