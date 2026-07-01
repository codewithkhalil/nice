import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import ObjectivesGrid from '@/components/ObjectivesGrid';
import PhasesTimeline from '@/components/PhasesTimeline';
import ScopeSection from '@/components/ScopeSection';
import OutcomesStats from '@/components/OutcomesStats';
import CtaSection from '@/components/CtaSection';
import AboutNest from '@/components/AboutNest';
import Footer from '@/components/Footer';
import FaqSection from '@/components/FaqSection';
 


export default function Home() {
  return (
    <main style={{ fontFamily: 'var(--font-body)' }}>
      <Hero />
      <ProblemSection />
      <ObjectivesGrid />
      <PhasesTimeline />
      <ScopeSection />
      <OutcomesStats />
      <FaqSection />
      <CtaSection />
      <AboutNest />
      <Footer />
    </main>
  );
}
 