import { useEffect } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

function LaserTag({ onOpenBooking }) {
  useEffect(() => {
    document.title = 'Action Laser Tag | Appalachian Asenso';
  }, []);

  const features = [
    {
      icon: '🔫',
      title: 'State-of-the-Art Gear',
      description: 'Equipped with precision laser phasers and high-tech glowing tactical vests.'
    },
    {
      icon: '⚡',
      title: 'Futuristic Arena',
      description: 'Battle through glowing mazes, foggy corridors, and strategic neon vantage points.'
    },
    {
      icon: '🏆',
      title: 'Game Modes',
      description: 'Play free-for-all, team battles, or custom tactical scenarios with real-time scoring.'
    }
  ];

  return (
    <div>
      <Section id="laser-tag-hero" subtitle="ACTION-PACKED COMBAT" title="NEON LASER TAG">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          {/* LOCAL HERO IMAGE */}
          <div style={{ 
            borderRadius: '16px', 
            overflow: 'hidden', 
            border: '1px solid var(--neon-purple)', 
            boxShadow: '0 0 25px rgba(176, 38, 255, 0.3)',
            marginBottom: '2rem' 
          }}>
            <img 
              src="/laser-tag.png" 
              alt="Neon Laser Tag Arena" 
              style={{ width: '100%', height: 'auto', maxHeight: '450px', objectFit: 'contain', display: 'block', margin: '0 auto' }}
            />
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            Suit up and step into our high-energy laser tag arena. High-tech equipment, fog, music, and glowing obstacles create an incredible battleground for friends, families, and parties.
          </p>
          <Button variant="primary" onClick={onOpenBooking}>
            BOOK LASER TAG SESSION
          </Button>
        </div>
      </Section>

      <Section id="laser-tag-features" subtitle="ARENA FEATURES" title="THE LASER TAG EXPERIENCE" glass={true}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {features.map((feat, idx) => (
            <Card key={idx} icon={feat.icon} title={feat.title} description={feat.description} />
          ))}
        </div>
      </Section>
    </div>
  );
}

export default LaserTag;