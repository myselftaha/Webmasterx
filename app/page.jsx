import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../sections/HeroSection";
import ShowcaseSection from "../sections/ShowcaseSection";

export default function Home() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <HeroSection />
        <ShowcaseSection />
      </main>
      <Footer />
    </div>
  );
}
