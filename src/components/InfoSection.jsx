import './InfoSection.css';
import Section from './Section';

function InfoSection() {
  return (
    <Section id="hours" subtitle="PLAN YOUR VISIT" title="HOURS & LOCATION">
      <div className="info-grid">
        {/* HOURS CARD */}
        <div className="info-card">
          <div className="info-icon">⏰</div>
          <h3>OPEN PLAY HOURS</h3>
          <ul className="info-list">
            <li>
              Mon – Fri: <span className="info-highlight">3:00 PM – 8:00 PM</span>
            </li>
            <li>
              Sat – Sun: <span className="info-highlight">1:00 PM – 8:00 PM</span>
            </li>
          </ul>
        </div>

        {/* LOCATION CARD */}
        <div className="info-card">
          <div className="info-icon">📍</div>
          <h3>LOCATION</h3>
          <ul className="info-list">
            <li className="info-highlight">Pennington Gap, Virginia</li>
            <li>Indoor Entertainment Arena</li>
            <li>Private Group & Party Bookings Available</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default InfoSection;