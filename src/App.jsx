import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PageTransition from './components/PageTransition';
import ThreeDTransitionCanvas from './components/ThreeDTransitionCanvas';

// Pages
import Home from './pages/Home';
import MiniGolf from './pages/MiniGolf';
import LaserTag from './pages/LaserTag';
import Parties from './pages/Parties';
import PrivateGroups from './pages/PrivateGroups';
import Contact from './pages/Contact';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeColor, setActiveColor] = useState('#00f0ff');

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div style={{ backgroundColor: '#0a0c10', color: '#f3f4f6', minHeight: '100vh', position: 'relative' }}>
      {/* 3D Global Transition Canvas */}
      <ThreeDTransitionCanvas activeColor={activeColor} isAnimating={isAnimating} />

      {/* Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Routes na may PageTransition para sa smooth animation */}
      <Routes>
        <Route path="/" element={<PageTransition><Home onOpenBooking={handleOpenBooking} /></PageTransition>} />
        <Route path="/mini-golf" element={<PageTransition><MiniGolf onOpenBooking={handleOpenBooking} /></PageTransition>} />
        <Route path="/laser-tag" element={<PageTransition><LaserTag onOpenBooking={handleOpenBooking} /></PageTransition>} />
        <Route path="/parties" element={<PageTransition><Parties onOpenBooking={handleOpenBooking} /></PageTransition>} />
        <Route path="/private-groups" element={<PageTransition><PrivateGroups onOpenBooking={handleOpenBooking} /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>

      {/* Global Booking Modal */}
      {isBookingOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
          padding: '1rem'
        }}>
          <div style={{
            background: '#12151e',
            border: '1px solid rgba(0, 240, 255, 0.3)',
            borderRadius: '16px',
            padding: '2.5rem',
            width: '100%',
            maxWidth: '500px',
            position: 'relative',
            boxShadow: '0 20px 40px rgba(0,0,0,0.8)'
          }}>
            <button 
              onClick={handleCloseBooking}
              style={{
                position: 'absolute',
                top: '1.2rem',
                right: '1.2rem',
                background: 'none',
                border: 'none',
                color: '#fff',
                fontSize: '1.2rem',
                cursor: 'pointer'
              }}
            >
              ✕
            </button>

            <h2 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1.5rem', textAlign: 'center' }}>RESERVE YOUR SLOT</h2>
            <p style={{ color: '#9ca3af', fontSize: '0.9rem', textAlign: 'center', marginBottom: '2rem' }}>Punan ang mga detalye para sa iyong booking.</p>

            <form onSubmit={(e) => { e.preventDefault(); alert('Na-submit na ang iyong booking!'); handleCloseBooking(); }} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#9ca3af', marginBottom: '0.4rem' }}>Buong Pangalan</label>
                <input type="text" required style={{ width: '100%', padding: '0.8rem', background: '#0a0c10', border: '1px solid #27272a', color: '#fff', borderRadius: '8px' }} placeholder="Juan Dela Cruz" />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#9ca3af', marginBottom: '0.4rem' }}>Uri ng Aktibidad</label>
                <select style={{ width: '100%', padding: '0.8rem', background: '#0a0c10', border: '1px solid #27272a', color: '#fff', borderRadius: '8px' }}>
                  <option>Glowing Mini Golf</option>
                  <option>Neon Laser Tag</option>
                  <option>Birthday Party Package</option>
                  <option>Private Group Event</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#9ca3af', marginBottom: '0.4rem' }}>Petsa at Oras</label>
                <input type="datetime-local" required style={{ width: '100%', padding: '0.8rem', background: '#0a0c10', border: '1px solid #27272a', color: '#fff', borderRadius: '8px' }} />
              </div>
              <button type="submit" style={{ width: '100%', padding: '0.9rem', background: '#00f0ff', color: '#000', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer', marginTop: '1rem' }}>
                KUMPIRUHIN ANG BOOKING
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}