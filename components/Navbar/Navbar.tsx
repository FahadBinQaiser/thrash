"use client";

import { sora } from "@/lib/fonts";
import { useState } from "react";

interface MenuItem {
  label: string;
  href: string;
}

const MENU_ITEMS: MenuItem[] = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Customers", href: "#customers" },
  { label: "Sign In", href: "#signin" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const linkClass =
    "text-sm font-medium text-[#ffcccc] hover:text-[#ffcccc]/80 transition-colors";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-6">
      <div
        className={`${sora.className} mx-auto flex max-w-5xl items-center justify-between`}
      >
        <div className="flex items-center gap-10">
          <div className="text-2xl font-bold text-[#ffcccc]">Thrash</div>

          <div className="hidden md:flex items-center gap-8">
            {MENU_ITEMS.slice(0, 3).map((item) => (
              <a key={item.href} href={item.href} className={linkClass}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden cursor-pointer sm:block text-sm font-semibold text-[#ffcccc] hover:text-[#ffcccc]/80 transition-colors">
            Sign In
          </button>
          <button className="rounded-full cursor-pointer border border-[#ffcccc]/20 bg-[#ffcccc]/10 backdrop-blur-sm px-5 py-2 text-sm font-semibold text-[#ffcccc] hover:bg-[#ffcccc]/20 transition-colors">
            See how it works
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden cursor-pointer text-[#ffcccc]"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden mt-4 overflow-hidden rounded-lg border border-[#ffcccc]/20 bg-[#ffcccc]/10 backdrop-blur-sm transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100 p-4" : "max-h-0 opacity-0 p-0"
        }`}
      >
        <div className="flex flex-col gap-4">
          {MENU_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
