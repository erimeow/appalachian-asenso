import { useState } from 'react';

export default function BookingModal({ isOpen, onClose }) {
  const [activity, setActivity] = useState('mini-golf');
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999, // Pinakamataas na z-index para laging nasa ibabaw
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          background: 'rgba(15, 15, 25, 0.95)',
          border: '1px solid var(--neon-cyan)',
          boxShadow: '0 0 35px rgba(0, 240, 255, 0.4)',
          borderRadius: '16px',
          padding: '2rem',
          maxWidth: '500px',
          width: '100%',
          position: 'relative',
          color: '#ffffff'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: '1.5rem',
            cursor: 'pointer'
          }}
        >
          ✕
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <h2 style={{ color: 'var(--neon-cyan)', marginBottom: '1rem' }}>BOOKING CONFIRMED!</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Thank you, {name}! We've received your booking request for {activity.toUpperCase()} on {date} at {time}.
            </p>
            <button 
              onClick={handleReset}
              style={{
                background: 'linear-gradient(45deg, #00f0ff, #b026ff)',
                border: 'none',
                color: '#fff',
                padding: '0.8rem 1.5rem',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              CLOSE
            </button>
          </div>
        ) : (
          <div>
            <h2 style={{ color: 'var(--neon-cyan)', marginBottom: '0.5rem', textAlign: 'center' }}>
              BOOK YOUR EXPERIENCE
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              Reserve your spot at Appalachian Asenso
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.3rem', color: '#ccc' }}>
                  Select Activity
                </label>
                <select 
                  value={activity} 
                  onChange={(e) => setActivity(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem', background: '#0a0a12', border: '1px solid #333', color: '#fff', borderRadius: '8px' }}
                >
                  <option value="mini-golf">Glowing Mini Golf</option>
                  <option value="laser-tag">Action Laser Tag</option>
                  <option value="combo">Glow Combo (Both)</option>
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.3rem', color: '#ccc' }}>
                    Date
                  </label>
                  <input 
                    type="date" 
                    required
                    value={date} 
                    onChange={(e) => setDate(e.target.value)}
                    style={{ width: '100%', padding: '0.75rem', background: '#0a0a12', border: '1px solid #333', color: '#fff', borderRadius: '8px' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.3rem', color: '#ccc' }}>
                    Time
                  </label>
                  <input 
                    type="time" 
                    required
                    value={time} 
                    onChange={(e) => setTime(e.target.value)}
                    style={{ width: '100%', padding: '0.75rem', background: '#0a0a12', border: '1px solid #333', color: '#fff', borderRadius: '8px' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.3rem', color: '#ccc' }}>
                  Number of Guests
                </label>
                <input 
                  type="number" 
                  min="1" 
                  max="20"
                  value={guests} 
                  onChange={(e) => setGuests(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem', background: '#0a0a12', border: '1px solid #333', color: '#fff', borderRadius: '8px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.3rem', color: '#ccc' }}>
                  Full Name
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem', background: '#0a0a12', border: '1px solid #333', color: '#fff', borderRadius: '8px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.3rem', color: '#ccc' }}>
                  Email Address
                </label>
                <input 
                  type="email" 
                  required
                  placeholder="john@example.com"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem', background: '#0a0a12', border: '1px solid #333', color: '#fff', borderRadius: '8px' }}
                />
              </div>

              <button 
                type="submit"
                style={{
                  marginTop: '0.5rem',
                  background: 'linear-gradient(45deg, #00f0ff, #b026ff)',
                  border: 'none',
                  color: '#fff',
                  padding: '0.85rem',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  boxShadow: '0 0 15px rgba(0, 240, 255, 0.4)'
                }}
              >
                CONFIRM RESERVATION
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}