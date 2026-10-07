import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Global Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BookingModal from './components/BookingModal';

// 3D Transition System
import ThreeDTransitionCanvas from './components/ThreeDTransitionCanvas';
import PageTransition from './components/PageTransition';

// Pages
import Home from './pages/Home';
import MiniGolf from './pages/MiniGolf';
import LaserTag from './pages/LaserTag';
import Parties from './pages/Parties';
import PrivateGroups from './pages/PrivateGroups';
import Contact from './pages/Contact';

// Map destination routes to signature neon portal colors
const routeColors = {
  '/': '#00f0ff',           // Home: Neon Cyan
  '/mini-golf': '#00f0ff',   // Golf: Electric Cyan
  '/laser-tag': '#b026ff',   // Laser Tag: Neon Purple
  '/parties': '#ff007f',     // Parties: Neon Pink
  '/private-groups': '#00ff66', // Private Groups: Neon Green
  '/contact': '#39ff14'      // Contact: Electric Lime
};

function App() {
  const location = useLocation();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const activeNeonColor = routeColors[location.pathname] || '#00f0ff';

  // Trigger brief 3D particle tunnel effect on page change
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 750); // 0.75 seconds cinematic duration

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  return (
    <div style={{ position: 'relative', overflowX: 'hidden', minHeight: '100vh' }}>
      <ScrollToTop />
      
      {/* GLOBAL 3D CANVAS TRANSITION OVERLAY */}
      <ThreeDTransitionCanvas activeColor={activeNeonColor} isAnimating={isTransitioning} />

      {/* NAVBAR */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* 3D ANIMATED ROUTES CONTAINER */}
      <main style={{ minHeight: '80vh', perspective: '1200px' }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home onOpenBooking={handleOpenBooking} /></PageTransition>} />
            <Route path="/mini-golf" element={<PageTransition><MiniGolf onOpenBooking={handleOpenBooking} /></PageTransition>} />
            <Route path="/laser-tag" element={<PageTransition><LaserTag onOpenBooking={handleOpenBooking} /></PageTransition>} />
            <Route path="/parties" element={<PageTransition><Parties onOpenBooking={handleOpenBooking} /></PageTransition>} />
            <Route path="/private-groups" element={<PageTransition><PrivateGroups onOpenBooking={handleOpenBooking} /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* FOOTER & MODAL */}
      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}

export default App;