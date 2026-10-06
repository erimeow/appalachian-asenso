import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BookingModal from './components/BookingModal';
import Home from './pages/Home';
import MiniGolf from './pages/MiniGolf';
import LaserTag from './pages/LaserTag';
import Parties from './pages/Parties';
import PrivateGroups from './pages/PrivateGroups';
import Contact from './pages/Contact';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div>
      <ScrollToTop />
      <Navbar onBookClick={openBooking} />

      <main style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mini-golf" element={<MiniGolf />} />
          <Route path="/laser-tag" element={<LaserTag />} />
          <Route path="/parties" element={<Parties />} />
          <Route path="/private-groups" element={<PrivateGroups />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

      {/* BOOKING MODAL */}
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}

export default App;