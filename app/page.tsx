import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import PhasesTimeline from '@/components/PhasesTimeline';
import OutcomesStats from '@/components/OutcomesStats';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import FaqSection from '@/components/FaqSection';
import AboutProgramme from '@/components/AboutProgramme';
import WhoItsFor from '@/components/WhoItsFor';
import LocationsSection from '@/components/LocationsSection';
import GainSection from '@/components/GainSection';
import PartnersSection from '@/components/PartnersSection';
import AboutPartners from '@/components/AboutPartners';
 


export default function Home() {
  return (
    <main className='font-body'>
      <Hero />
      <ProblemSection />
      <AboutProgramme />
      <WhoItsFor />
      <PhasesTimeline />
      <LocationsSection />
      <GainSection />
      <OutcomesStats />
      <PartnersSection />
      <AboutPartners />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
 