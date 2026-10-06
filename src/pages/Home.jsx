import { useEffect } from 'react';
import Hero from '../components/Hero';
import Experiences from '../components/Experiences';
import InfoSection from '../components/InfoSection';
import CtaBanner from '../components/CtaBanner';

function Home() {
  useEffect(() => {
    document.title = 'Appalachian Asenso | Blacklight Mini Golf & Laser Tag';
  }, []);

  return (
    <div>
      <Hero />
      <Experiences />
      <InfoSection />
      <CtaBanner />
    </div>
  );
}

export default Home;