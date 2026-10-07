import { useState, useEffect } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    document.title = 'Contact Us | Appalachian Asenso';
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <Section id="contact-hero" subtitle="GET IN TOUCH" title="CONTACT US">
        <div style={{ maxWidth: '600px', margin: '0 auto', background: 'rgba(15, 15, 25, 0.8)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--neon-cyan)' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <h2 style={{ color: 'var(--neon-cyan)', marginBottom: '1rem' }}>MESSAGE SENT!</h2>
              <p style={{ color: 'var(--text-muted)' }}>Thank you for reaching out, {formData.name}. We will get back to you shortly!</p>
              <div style={{ marginTop: '1.5rem' }}>
                <Button variant="secondary" onClick={() => setSubmitted(false)}>SEND ANOTHER MESSAGE</Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc' }}>Name</label>
                <input 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', padding: '0.8rem', background: '#0a0a12', border: '1px solid #333', color: '#fff', borderRadius: '8px' }} 
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc' }}>Email</label>
                <input 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{ width: '100%', padding: '0.8rem', background: '#0a0a12', border: '1px solid #333', color: '#fff', borderRadius: '8px' }} 
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc' }}>Message</label>
                <textarea 
                  rows="4" 
                  required 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ width: '100%', padding: '0.8rem', background: '#0a0a12', border: '1px solid #333', color: '#fff', borderRadius: '8px' }} 
                />
              </div>
              <Button type="submit" variant="primary">SEND AN EMAIL</Button>
            </form>
          )}
        </div>
      </Section>
    </div>
  );
}

export default Contact;