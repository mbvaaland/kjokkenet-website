// src/components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white text-black shadow-md">
      {/* Logo Row */}
      <div className="container mx-auto">
        <div className="flex justify-center py-4">
          <Link href="/">
            <Image
              src="/original_logo2.png"
              alt="Kjøkkenet Cafe & Delikatesse"
              width={300}
              height={300}
              className="object-contain"
            />
          </Link>
        </div>
      </div>

      {/* Navbar Row */}
      <nav className="w-full bg-[#A4BE5C] py-2">
        <div className="container mx-auto">
          <ul className="flex justify-center space-x-8">
            <li>
              <a href="/#menu" className="hover:text-gray-600">
                meny
              </a>
            </li>
            <li>
              <a href="/#opening-hours" className="hover:text-gray-600">
                åpningstider
              </a>
            </li>
            <li>
              <a href="/#contact" className="hover:text-gray-600">
                kontakt oss
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}