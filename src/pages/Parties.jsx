import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

function Parties() {
  const packages = [
    {
      icon: '🎂',
      title: 'Neon Glow Party',
      description: 'Kasama ang mini golf o laser tag rounds, birthday table setup, at glowing party favors para sa lahat.'
    },
    {
      icon: '🎮',
      title: 'Ultimate VIP Arena Pass',
      description: 'Exclusive access sa mini golf at laser tag, private party room, at dedicated party host.'
    },
    {
      icon: '🍕',
      title: 'Custom Celebration',
      description: 'Mag-customize batay sa bilang ng guests, pagkain, at karagdagang oras ng paglalaro.'
    }
  ];

  return (
    <div>
      <Section id="parties-hero" subtitle="UNFORGETTABLE CELEBRATIONS" title="BIRTHDAY PARTIES">
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            Mag-celebrate ng kaarawan sa pinaka-futuristic na arena sa Pennington Gap! Puno ng ilaw, laro, at saya para sa mga bata at matatanda.
          </p>
          <Button variant="primary" onClick={() => alert("Redirecting to Party Booking...")}>
            BOOK A BIRTHDAY PARTY
          </Button>
        </div>
      </Section>

      <Section id="party-packages" subtitle="PARTY PACKAGES" title="CELEBRATE WITH US" glass={true}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {packages.map((pkg, idx) => (
            <Card key={idx} icon={pkg.icon} title={pkg.title} description={pkg.description} />
          ))}
        </div>
      </Section>
    </div>
  );
}

export default Parties;