import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

export default function Navbar({ onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'MINI GOLF', path: '/mini-golf' },
    { name: 'LASER TAG', path: '/laser-tag' },
    { name: 'PARTIES', path: '/parties' },
    { name: 'PRIVATE GROUPS', path: '/private-groups' },
    { name: 'CONTACT', path: '/contact' }
  ];

  const handleNavClick = () => {
    setIsOpen(false); // Kusa isasara ang mobile menu kapag nag-click ng link
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: 'rgba(5, 5, 10, 0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(0, 240, 255, 0.2)'
    }}>
      <style>{`
        /* Desktop Default */
        .nav-menu-desktop {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }
        .hamburger-btn {
          display: none;
          background: none;
          border: none;
          color: var(--neon-cyan);
          font-size: 1.8rem;
          cursor: pointer;
        }
        .mobile-drawer {
          display: none;
        }

        /* Mobile Styles */
        @media (max-width: 900px) {
          .nav-menu-desktop {
            display: none !important;
          }
          .hamburger-btn {
            display: block !important;
          }
          .mobile-drawer {
            display: flex !important;
            flex-direction: column;
            gap: 1.2rem;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(10, 10, 18, 0.98);
            border-bottom: 2px solid var(--neon-cyan);
            padding: 1.5rem 2rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.8);
          }
        }
      `}</style>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* LOGO */}
        <Link 
          to="/" 
          onClick={handleNavClick}
          style={{ textDecoration: 'none', color: '#fff', fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '1px' }}
        >
          APPALACHIAN <span style={{ color: 'var(--neon-cyan)' }}>ASENSO</span>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <nav className="nav-menu-desktop">
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
                  fontSize: '0.85rem',
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
          <Button 
            variant="primary" 
            onClick={() => {
              if (typeof onOpenBooking === 'function') onOpenBooking();
            }}
          >
            BOOK NOW
          </Button>
        </nav>

        {/* MOBILE HAMBURGER BUTTON */}
        <button 
          className="hamburger-btn" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* MOBILE DROPDOWN DRAWER */}
      {isOpen && (
        <div className="mobile-drawer">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleNavClick}
                style={{
                  textDecoration: 'none',
                  color: isActive ? 'var(--neon-cyan)' : '#fff',
                  fontWeight: isActive ? 'bold' : '500',
                  fontSize: '1.1rem',
                  letterSpacing: '1px',
                  borderLeft: isActive ? '3px solid var(--neon-cyan)' : '3px solid transparent',
                  paddingLeft: '10px'
                }}
              >
                {link.name}
              </Link>
            );
          })}
          <div style={{ marginTop: '0.5rem' }}>
            <Button 
              variant="primary" 
              onClick={() => {
                setIsOpen(false);
                if (typeof onOpenBooking === 'function') onOpenBooking();
              }}
            >
              BOOK NOW
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}