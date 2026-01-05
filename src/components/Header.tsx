import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-700">
          BlueNord Energy
        </Link>
        <nav>
          <ul className="flex space-x-6 text-sm font-medium text-gray-700">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/operations">Operations</Link></li>
            <li><Link href="/investors">Investors</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
