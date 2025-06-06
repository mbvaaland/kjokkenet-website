// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo / Home */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/kjokkenet_logo.png"
            alt="Kjøkkenet logo"
            width={32}
            height={32}
            className="object-contain"
          />
          <span className="text-xl font-bold">Kjøkkenet</span>
        </Link>

        {/* Nav links */}
        <div className="space-x-6">
          <Link href="/" className="text-gray-700 hover:text-green-700">
            Hjem
          </Link>
          <Link href="/menu" className="text-gray-700 hover:text-green-700">
            Meny
          </Link>
          <Link href="/#opening-hours" className="text-gray-700 hover:text-green-700">
            Åpningstider
          </Link>
          <Link href="/#contact" className="text-gray-700 hover:text-green-700">
            Kontakt oss
          </Link>
        </div>
      </div>
    </nav>
  );
}