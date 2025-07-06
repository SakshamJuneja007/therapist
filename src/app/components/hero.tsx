'use client';
import './hero.css';
import Link from 'next/link'; // ✅ import Next.js Link

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-[#efece4] overflow-hidden flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        width={510}
        height={290}
        className="absolute z-0 object-cover rounded-xl shadow-xl w-[92%] h-[93%] brightness-[0.6]"
      >
        <source src="/ocean.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-grid">
        <h1>Psychological Care for</h1>
        <h2>Change, Insight, and Well-Being</h2>
        <p>
          Offering individual psychotherapy for adults via telehealth in Michigan and <u>most U.S. states</u> through PSYPACT participation.
        </p>

        {/* ✅ Redirects to actual /contact page now */}
        <Link href="/contact" className="hero-button">
          Schedule a Consultation
        </Link>
      </div>
    </section>
  );
}
