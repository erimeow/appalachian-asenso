import { useEffect } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import Reviews from '../components/Reviews'; // <-- IDINAGDAG NATIN ITO

function Home({ onOpenBooking }) {
  useEffect(() => {
    document.title = 'Appalachian Asenso | Glowing Mini Golf & Laser Tag';
  }, []);

  return (
    <div>
      {/* HERO SECTION */}
      <Section id="home-hero" subtitle="PENNINGTON GAP, VA" title="THE ULTIMATE GLOW ENTERTAINMENT">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            Step into a world of blacklight mini golf and high-energy laser tag. Unforgettable cyberpunk fun for families, birthday parties, and group events!
          </p>
          <Button variant="primary" onClick={onOpenBooking}>
            BOOK YOUR ADVENTURE
          </Button>
        </div>
      </Section>

      {/* REVIEWS & RATING SECTION */}
      <Reviews />
    </div>
  );
}

export default Home;