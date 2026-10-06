import { useState } from 'react';
import './BookingModal.css';
import Button from './Button';

function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    activity: 'mini-golf',
    date: '',
    guests: 2,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        {!isSubmitted ? (
          <>
            <h2 className="modal-title">RESERVE YOUR <span>GAME</span></h2>
            <p className="modal-subtitle">Pick your activity and lock in your slot at Appalachian Asenso.</p>

            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-group">
                <label>FULL NAME</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  placeholder="Juan Dela Cruz"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="juan@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>ACTIVITY</label>
                  <select name="activity" value={formData.activity} onChange={handleChange}>
                    <option value="mini-golf">Glowing Mini Golf</option>
                    <option value="laser-tag">Neon Laser Tag</option>
                    <option value="party">Birthday Party Package</option>
                    <option value="full-pass">Combo Pass (Golf + Tag)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>NO. OF PLAYERS</label>
                  <input 
                    type="number" 
                    name="guests" 
                    min="1" 
                    max="30"
                    value={formData.guests}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>PREFERRED DATE</label>
                <input 
                  type="date" 
                  name="date" 
                  required 
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              <Button variant="primary" style={{ width: '100%', marginTop: '1rem' }}>
                CONFIRM RESERVATION
              </Button>
            </form>
          </>
        ) : (
          <div className="submission-success">
            <div className="success-icon">🎉</div>
            <h2>BOOKING CONFIRMED!</h2>
            <p>Salamat, <strong>{formData.name}</strong>! Na-receive na namin ang request mo para sa <strong>{formData.activity.replace('-', ' ').toUpperCase()}</strong>.</p>
            <p className="success-sub">Magpapadala kami ng confirmation details sa <strong>{formData.email}</strong>.</p>
            <Button variant="primary" onClick={handleReset}>
              DONE
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingModal;