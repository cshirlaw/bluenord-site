import Link from 'next/link';

export default function Card({ title, link }: { title: string; link: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <Link href={link} className="text-blue-600 hover:underline">View →</Link>
    </div>
  );
}
