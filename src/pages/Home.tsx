import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { StorePreview } from "../components/StorePreview";
import { ClinicInfo } from "../components/ClinicInfo";
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
      <ClinicInfo />
      <Contact />
      <ContactCTA />
      <Footer />
    </>
  );
}
