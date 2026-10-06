import { useEffect } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

function MiniGolf() {
  useEffect(() => {
    document.title = 'Glowing Mini Golf | Appalachian Asenso';
  }, []);

  const features = [
    {
      icon: '💡',
      title: 'Blacklight Glow',
      description: 'Play under vibrant UV blacklights with custom glowing golf balls, putters, and obstacles.'
    },
    {
      icon: '⛳',
      title: 'Custom Course Design',
      description: 'Navigate futuristic twists, glowing tunnels, and challenging neon turf hazards.'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'All Ages Welcome',
      description: 'Fun for kids, teens, families, and adults—perfect for casual play or competitive group rounds.'
    }
  ];

  return (
    <div>
      <Section id="mini-golf-hero" subtitle="BLACKLIGHT INDOOR FUN" title="GLOWING MINI GOLF">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          {/* LOCAL HERO IMAGE */}
          <div style={{ 
            borderRadius: '16px', 
            overflow: 'hidden', 
            border: '1px solid var(--neon-cyan)', 
            boxShadow: '0 0 25px rgba(0, 240, 255, 0.3)',
            marginBottom: '2rem' 
          }}>
            <img 
              src="/mini-golf.jpg" 
              alt="Glowing Mini Golf Course" 
              style={{ width: '100%', height: '350px', objectFit: 'cover', display: 'block' }}
            />
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            Experience mini golf like never before. Step onto our glowing course in Pennington Gap, VA, where neon colors pop under blacklights and every hole offers a unique futuristic challenge.
          </p>
          <Button variant="primary" onClick={() => alert("Booking Mini Golf...")}>
            BOOK MINI GOLF SESSION
          </Button>
        </div>
      </Section>

      <Section id="mini-golf-features" subtitle="WHAT TO EXPECT" title="THE GLOW EXPERIENCE" glass={true}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {features.map((feat, idx) => (
            <Card key={idx} icon={feat.icon} title={feat.title} description={feat.description} />
          ))}
        </div>
      </Section>
    </div>
  );
}

export default MiniGolf;