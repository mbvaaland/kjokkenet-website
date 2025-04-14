export default function Navbar() {
  return (
    <nav className="w-full bg-gray-100 py-2">
      <ul className="flex justify-center space-x-8">
        <li>
          <a href="#menu">meny</a>
        </li>
        <li>
          <a href="#opening-hours">åpningstider</a>
        </li>
        <li>
          <a href="#contact">kontakt oss</a>
        </li>
      </ul>
    </nav>
  );
}