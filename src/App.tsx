import CustomCursor from './components/ui/CustomCursor/CustomCursor';
import SpotlightGlow from './components/ui/SpotlightGlow/SpotlightGlow';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import TrustedLogos from './components/sections/TrustedLogos';
import FeaturedWork from './components/sections/FeaturedWork';
import ClientSegments from './components/sections/ClientSegments';
import PhilosophyBreak from './components/sections/PhilosophyBreak';
import ContentCreatorShowcase from './components/sections/ContentCreatorShowcase';
import ServicesOverview from './components/sections/ServicesOverview';
import Testimonials from './components/sections/Testimonials';
import ContactCTA from './components/sections/ContactCTA';
import Footer from './components/sections/Footer';

export default function App() {
  return (
    <><div className="lx-app min-h-screen premium-bg text-[#F7F5F2] relative overflow-x-hidden">
        {/* ─── CUSTOM CURSOR ─── */}
        <CustomCursor />

        {/* ─── ATMOSPHERIC GLOW ORBS ─── */}
        <SpotlightGlow />

        {/* ─── PAGE STRUCTURE ─── */}
        <div className="relative z-10">
          <Header />
          <Hero />
          <TrustedLogos />
          <FeaturedWork />
          <ClientSegments />
          <PhilosophyBreak />
          <ContentCreatorShowcase />
          <ServicesOverview />
          <Testimonials />
          <ContactCTA />
          <Footer />
        </div>
      </div></>
  );
}
