import './CtaBanner.css';
import Section from './Section';
import Button from './Button';

function CtaBanner() {
  return (
    <Section id="cta" glass={true}>
      <div className="cta-box">
        <h2>READY TO LIGHT UP THE NIGHT?</h2>
        <p>
          Book your next mini golf showdown, laser tag battle, or unforgettable glow party today.
        </p>
        <div className="cta-actions">
          <Button variant="primary" onClick={() => alert("Booking System coming in Phase 7!")}>
            BOOK NOW
          </Button>
          <Button variant="secondary" onClick={() => window.location.href = "mailto:eri111421@gmail.com"}>
            CONTACT US
          </Button>
        </div>
      </div>
    </Section>
  );
}

export default CtaBanner;