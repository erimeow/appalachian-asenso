import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* BRAND INFO */}
        <div className="footer-brand">
          <h3>APPALACHIAN <span>ASENSO</span></h3>
          <p>Glowing mini golf, action-packed laser tag, birthday parties, and group fun—all under one roof.</p>
        </div>

        {/* LOCATION & CONTACT */}
        <div>
          <h4 className="footer-title">LOCATION & CONTACT</h4>
          <ul className="footer-list">
            <li>📍 Pennington Gap, Virginia</li>
            <li>✉️ <a href="mailto:eri111421@gmail.com" className="footer-link">eri111421@gmail.com</a></li>
            <li>
              🌐 <a href="https://www.facebook.com/profile.php?id=61582410790026" target="_blank" rel="noopener noreferrer" className="footer-link">
                Facebook Page
              </a>
            </li>
          </ul>
        </div>

        {/* OPEN PLAY HOURS */}
        <div>
          <h4 className="footer-title">OPEN PLAY HOURS</h4>
          <ul className="footer-list">
            <li>Mon – Fri: 3:00 PM – 8:00 PM</li>
            <li>Sat – Sun: 1:00 PM – 8:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Appalachian Asenso. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;