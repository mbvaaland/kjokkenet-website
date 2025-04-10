import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white text-black shadow-md">
      {/* Logo Row */}
      <div className="container mx-auto">
        <div className="flex justify-center py-4">
          <Link href="/">
            <Image
              src="/kjokkenet_logo.png"
              alt="Kjøkkenet Cafe & Delikatesse"
              width={250}
              height={250}
              className="object-contain"
            />
          </Link>
        </div>
      </div>

      {/* Navbar Row */}
      <nav className="w-full bg-orange-200 py-2">
        <div className="container mx-auto">
          <ul className="flex justify-center space-x-8">
            <li>
              <a href="#home" className="hover:text-gray-600">heim</a>
            </li>
            <li>
              <a href="#menu" className="hover:text-gray-600">meny</a>
            </li>
            <li>
              <a href="#opening-hours" className="hover:text-gray-600">åpningstider</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-600">kontakt oss</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}