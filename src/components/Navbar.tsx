import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link href="/menu">Meny</Link>
        </li>
        <li>
          <Link href="/hours">Åpningstider</Link>
        </li>
        <li>
          <Link href="/contact">Kontakt oss</Link>
        </li>
      </ul>
    </nav>
  );
}