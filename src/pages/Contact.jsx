import Section from '../components/Section';
import Button from '../components/Button';

function Contact() {
  return (
    <Section id="contact" subtitle="GET IN TOUCH" title="CONTACT US">
      <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          Have questions about private group rentals, birthday packages, or opening hours? Reach out to us!
        </p>
        <p style={{ marginBottom: '2rem', color: 'var(--text-main)', fontWeight: 'bold' }}>
          ✉️ eri111421@gmail.com | 📍 Pennington Gap, Virginia
        </p>
        <Button variant="primary" onClick={() => window.location.href = "mailto:eri111421@gmail.com"}>
          SEND AN EMAIL
        </Button>
      </div>
    </Section>
  );
}

export default Contact;