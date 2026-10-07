import { useEffect } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

function PrivateGroups({ onOpenBooking }) {
  useEffect(() => {
    document.title = 'Private Groups | Appalachian Asenso';
  }, []);

  return (
    <div>
      <Section id="private-hero" subtitle="EXCLUSIVE RENTALS" title="PRIVATE GROUPS & EVENTS">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            Rent out our entire facility or host corporate team building, youth group outings, and private tournaments.
          </p>
          <Button variant="primary" onClick={onOpenBooking}>
            INQUIRE PRIVATE EVENT
          </Button>
        </div>
      </Section>
    </div>
  );
}

export default PrivateGroups;