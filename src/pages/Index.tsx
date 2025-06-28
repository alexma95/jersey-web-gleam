
import Hero from '../components/Hero';
import InfoSections from '../components/InfoSections';
import AssessmentSchedule from '../components/AssessmentSchedule';
import Resources from '../components/Resources';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <InfoSections />
      <AssessmentSchedule />
      <Resources />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
