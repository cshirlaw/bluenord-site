'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-600 py-6 mt-12">
      <p>&copy; {new Date().getFullYear()} BlueNord Energy. All rights reserved.</p>
    </footer>
  );
}
