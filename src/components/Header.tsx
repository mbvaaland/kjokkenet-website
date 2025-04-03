import Link from 'next/link';
import Image from 'next/image';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="bg-white text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/kjokkenet_logo.png"
            alt="Kjøkkenet Cafe & Delikatesse"
            width={250}
            height={250}
            className="object-contain"
          />
        </Link>
        <Navbar />
      </div>
    </header>
  );
}