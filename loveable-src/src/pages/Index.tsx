import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PhotoBand from "@/components/PhotoBand";
import About from "@/components/About";
import Music from "@/components/Music";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/language";

import landscape1 from "@/assets/hero-band.png";
import landscape3 from "@/assets/landscape-3.jpg";

const Index = () => {
  return (
    <LanguageProvider>
      <Navigation />
      <main>
        <Hero />
        <PhotoBand src={landscape1} alt="Zespół Podorож — pięć osób w otwartym polu, Podlasie" height="h-auto" className="-mt-[40vh] md:-mt-[75vh] lg:-mt-[100vh]" />
        <About />
        <Music />
        <PhotoBand src={landscape3} alt="Podorож — zespół w drodze przez pole, Podlasie" position="center 40%" />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
};

export default Index;
