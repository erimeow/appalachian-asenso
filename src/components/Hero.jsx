import './Hero.css';
import Button from './Button';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-tagline">“GLOW. PLAY. COMPETE.”</p>
        
        <h1 className="hero-title">
          APPALACHIAN <span>ASENSO</span>
        </h1>

        <p className="hero-description">
          Glowing mini golf, action-packed laser tag, birthday parties, and private group fun—all under one roof in Pennington Gap, VA.
        </p>

        <div className="hero-actions">
          <Button variant="primary" onClick={() => alert("Redirecting to Booking...")}>
            BOOK NOW
          </Button>
          <Button variant="secondary" onClick={() => {
            const expSection = document.getElementById('experiences');
            if (expSection) expSection.scrollIntoView({ behavior: 'smooth' });
          }}>
            EXPLORE
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;