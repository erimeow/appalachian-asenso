import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

export default function Navbar({ onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'MINI GOW', path: '/mini-golf' },
    { name: 'LASER TAG', path: '/laser-tag' },
    { name: 'PARTIES', path: '/parties' },
    { name: 'PRIVATE GROUPS', path: '/private-groups' },
    { name: 'CONTACT', path: '/contact' }
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: 'rgba(5, 5, 10, 0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(0, 240, 255, 0.2)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* LOGO */}
        <Link to="/" style={{ textDecoration: 'none', color: '#fff', fontSize: '1.4rem', fontWeight: 'bold', letterSpacing: '1px' }}>
          APPALACHIAN <span style={{ color: 'var(--neon-cyan)' }}>ASENSO</span>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  textDecoration: 'none',
                  color: isActive ? 'var(--neon-cyan)' : '#ccc',
                  fontWeight: isActive ? 'bold' : '500',
                  fontSize: '0.9rem',
                  letterSpacing: '1px',
                  transition: 'color 0.2s ease',
                  borderBottom: isActive ? '2px solid var(--neon-cyan)' : '2px solid transparent',
                  paddingBottom: '4px'
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* BOOK NOW BUTTON */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Button 
            variant="primary" 
            onClick={() => {
              if (typeof onOpenBooking === 'function') {
                onOpenBooking();
              }
            }}
          >
            BOOK NOW
          </Button>
        </div>
      </div>
    </header>
  );
}