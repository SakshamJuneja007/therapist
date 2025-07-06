import About from "./components/about";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Focus from "./components/focus";
import RatesSection from "./components/Rate";
import AvailabilityNotice from "./components/notice";
import OceanQuote from "./components/ocean";
import Footer from "./components/footer";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <>
    <Navbar />
      <Hero />
      <About />
      <Focus />
      <RatesSection />
      <AvailabilityNotice />
      <OceanQuote/>
      <FAQ />
      <Footer />
\    </>
  );
}
