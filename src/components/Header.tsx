// src/components/Header.tsx
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
      <nav className="w-full bg-[#7c9885] py-2">
        <div className="container mx-auto">
          <ul className="flex justify-center space-x-8">
            <li>
              <Link href="/#menu" className="hover:text-gray-600">meny</Link>
            </li>
          <li>
            <Link href="/#opening-hours" className="hover:text-gray-600">åpningstider</Link>
          </li>
          <li>
          <Link href="/#contact" className="hover:text-gray-600">kontakt oss</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  );
}