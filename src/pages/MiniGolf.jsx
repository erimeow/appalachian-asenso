import { useEffect } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import { GolfIcon, StarIcon, ShieldIcon } from '../components/VenueIcons';

function MiniGolf({ onOpenBooking }) {
  useEffect(() => {
    document.title = 'Glowing Mini Golf | Appalachian Asenso';
  }, []);

  const features = [
    {
      icon: <GolfIcon size={24} color="#f3f4f6" />,
      title: 'Blacklight Environment',
      description: 'Immersive UV ultraviolet blacklight course engineered with custom glowing obstacles and turf hazards.'
    },
    {
      icon: <StarIcon size={24} color="#f3f4f6" />,
      title: 'Precision Course Design',
      description: 'Challenging architectural holes designed for both casual family entertainment and competitive play.'
    },
    {
      icon: <ShieldIcon size={24} color="#f3f4f6" />,
      title: 'All-Age Accessibility',
      description: 'Comfortable indoor facility layout optimized for groups, families, and weekend outings.'
    }
  ];

  return (
    <div style={{ paddingBottom: '4rem' }}>
      <Section id="mini-golf-hero" subtitle="INDOOR ATTRACTION" title="GLOWING MINI GOLF">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ 
            borderRadius: '12px', 
            overflow: 'hidden', 
            border: '1px solid rgba(255, 255, 255, 0.1)', 
            marginBottom: '2rem',
            background: '#12151e'
          }}>
            <img 
              src="/mini-golf.png" 
              alt="Glowing Mini Golf Course" 
              style={{ width: '100%', height: 'auto', maxHeight: '420px', objectFit: 'cover', display: 'block' }}
            />
          </div>

          <p style={{ color: '#9ca3af', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
            Experience indoor mini golf reimagined. Located in Pennington Gap, VA, our blacklight course combines precision layout design with a striking modern aesthetic.
          </p>
          <Button variant="primary" onClick={onOpenBooking}>
            BOOK MINI GOLF SESSION
          </Button>
        </div>
      </Section>

      <Section id="mini-golf-features" subtitle="SPECIFICATIONS" title="THE COURSE EXPERIENCE" glass={true}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {features.map((feat, idx) => (
            <Card key={idx} icon={feat.icon} title={feat.title} description={feat.description} />
          ))}
        </div>
      </Section>
    </div>
  );
}

export default MiniGolf;