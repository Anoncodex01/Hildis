import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import WhoWeAre from '@/components/WhoWeAre';
import Branches from '@/components/Branches';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import RecentProjects from '@/components/RecentProjects';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ClientLogos />
      <WhoWeAre />
      <Branches />
      <Services />
      <Industries />
      <RecentProjects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

