import Link from 'next/link';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Kjøkkenet Cafe & Delikatesse</h1>
        <Navbar />
      </div>
    </header>
  );
}