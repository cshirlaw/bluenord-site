import HeroBanner from '../components/HeroBanner';
import Card from '../components/Card';

export default function HomePage() {
  return (
    <main>
      <HeroBanner
        title="Energy for People, Progress for Society"
        subtitle="Exploring and producing oil and gas WELL"
      />
      <section className="intro container">
        <p className="text-lg leading-relaxed mb-6">
          BlueNord is a leading upstream oil and gas company with core operations in the Danish North Sea.
          We are committed to safe, efficient production and long-term value creation for our investors.
        </p>
      </section>
      <section className="quick-links container mb-8">
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="About Us" link="/about" />
          <Card title="Investors" link="/investors" />
          <Card title="Our Operations" link="/operations" />
        </div>
      </section>
      <section className="highlights container">
        <h2 className="text-xl font-semibold mb-2">Latest Reports</h2>
        <ul className="list-disc pl-6">
          <li><a href="/investors/reports/annual">2024 Annual Report</a></li>
          <li><a href="/investors/reports/quarterly">Q2 2025 Quarterly Report</a></li>
        </ul>
      </section>
    </main>
  );
}
