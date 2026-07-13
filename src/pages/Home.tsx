import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { StorePreview } from "../components/StorePreview";
import { FAQ } from "../components/FAQ";
import { Contact } from "../components/Contact";
import { ContactCTA } from "../components/ContactCTA";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <StorePreview />
      <FAQ />
      <Contact />
      <ContactCTA />
      <Footer />
    </>
  );
}
