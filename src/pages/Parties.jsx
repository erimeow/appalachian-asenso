import { useEffect } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

function Parties({ onOpenBooking }) {
  useEffect(() => {
    document.title = 'Birthday Parties | Appalachian Asenso';
  }, []);

  const packages = [
    { title: 'GLOW PARTY', price: '$250', desc: 'Up to 10 guests, 1 activity, private party room for 1.5 hours.' },
    { title: 'CYBER BASH', price: '$400', desc: 'Up to 15 guests, Mini Golf + Laser Tag combo, 2 hours party room.' },
    { title: 'ULTIMATE VIP', price: '$600', desc: 'Up to 20 guests, unlimited play, dedicated host, neon party favors.' }
  ];

  return (
    <div>
      <Section id="parties-hero" subtitle="CELEBRATE WITH US" title="NEON BIRTHDAY PARTIES">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            Host an unforgettable glow-in-the-dark celebration! Perfect for kids, teens, and adults looking for a high-energy party.
          </p>
          <Button variant="primary" onClick={onOpenBooking}>
            BOOK A BIRTHDAY PARTY
          </Button>
        </div>
      </Section>

      <Section id="party-packages" subtitle="PARTY PACKAGES" title="CHOOSE YOUR EXPERIENCE" glass={true}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {packages.map((pkg, idx) => (
            <Card key={idx} icon="🎉" title={pkg.title} description={`${pkg.price} — ${pkg.desc}`}>
              <div style={{ marginTop: '1rem' }}>
                <Button variant="secondary" onClick={onOpenBooking}>SELECT PACKAGE</Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}

export default Parties;