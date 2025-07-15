'use client';

interface HeroBannerProps {
  title: string;
  subtitle: string;
}

export default function HeroBanner({ title, subtitle }: HeroBannerProps) {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg">{subtitle}</p>
      </div>
    </section>
  );
}
