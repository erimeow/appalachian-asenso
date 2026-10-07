import { useState } from 'react';
import Section from './Section';
import Card from './Card';
import Button from './Button';

export default function Reviews() {
  const [reviewsList, setReviewsList] = useState([
    {
      name: 'Mark & Sarah T.',
      rating: 5,
      date: '1 week ago',
      text: 'Super epic experience! The blacklight mini golf is mind-blowing and the laser tag arena felt like being inside a video game.'
    },
    {
      name: 'Jessica M.',
      rating: 5,
      date: '2 weeks ago',
      text: 'Hosted my son’s 12th birthday party here. The staff was super helpful, and the kids had a blast in the cyber party room!'
    },
    {
      name: 'Dave R.',
      rating: 5,
      date: 'A month ago',
      text: 'Top tier entertainment in Pennington Gap! Perfect place for weekend hangout with friends. Highly recommended!'
    }
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', rating: 5, text: '' });

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) return;

    setReviewsList([
      {
        name: newReview.name,
        rating: Number(newReview.rating),
        date: 'Just now',
        text: newReview.text
      },
      ...reviewsList
    ]);

    setNewReview({ name: '', rating: 5, text: '' });
    setIsFormOpen(false);
  };

  return (
    <Section id="reviews-section" subtitle="WHAT OUR GUESTS SAY" title="CUSTOMER REVIEWS & RATINGS" glass={true}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--neon-cyan)', textShadow: '0 0 15px rgba(0, 240, 255, 0.5)' }}>
          4.9 <span style={{ fontSize: '1.8rem', color: '#ffb703' }}>★★★★★</span>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.5rem' }}>
          Based on 150+ Happy Adventurers at Appalachian Asenso
        </p>

        <div style={{ marginTop: '1.5rem' }}>
          <Button variant="secondary" onClick={() => setIsFormOpen(!isFormOpen)}>
            {isFormOpen ? 'CANCEL' : 'WRITE A REVIEW'}
          </Button>
        </div>
      </div>

      {/* ADD REVIEW FORM */}
      {isFormOpen && (
        <form 
          onSubmit={handleAddReview}
          style={{
            maxWidth: '550px',
            margin: '0 auto 3rem auto',
            background: 'rgba(15, 15, 25, 0.9)',
            border: '1px solid var(--neon-cyan)',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 0 20px rgba(0, 240, 255, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          <h3 style={{ color: 'var(--neon-cyan)', textAlign: 'center', margin: 0 }}>LEAVE YOUR RATING</h3>
          
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.3rem', color: '#ccc' }}>Your Name</label>
            <input 
              type="text" 
              required
              value={newReview.name}
              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
              placeholder="e.g. Alex Santos"
              style={{ width: '100%', padding: '0.75rem', background: '#0a0a12', border: '1px solid #333', color: '#fff', borderRadius: '8px' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.3rem', color: '#ccc' }}>Rating</label>
            <select 
              value={newReview.rating}
              onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
              style={{ width: '100%', padding: '0.75rem', background: '#0a0a12', border: '1px solid #333', color: '#fff', borderRadius: '8px' }}
            >
              <option value="5">⭐⭐⭐⭐⭐ (5 Stars - Amazing!)</option>
              <option value="4">⭐⭐⭐⭐ (4 Stars - Great)</option>
              <option value="3">⭐⭐⭐ (3 Stars - Good)</option>
              <option value="2">⭐⭐ (2 Stars - Okay)</option>
              <option value="1">⭐ (1 Star - Needs Improvement)</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.3rem', color: '#ccc' }}>Review Message</label>
            <textarea 
              rows="3" 
              required
              value={newReview.text}
              onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
              placeholder="Tell us about your experience..."
              style={{ width: '100%', padding: '0.75rem', background: '#0a0a12', border: '1px solid #333', color: '#fff', borderRadius: '8px' }}
            />
          </div>

          <Button type="submit" variant="primary">SUBMIT REVIEW</Button>
        </form>
      )}

      {/* REVIEWS GRID */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {reviewsList.map((rev, idx) => (
          <Card key={idx} icon="💬" title={rev.name} description={rev.text}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '0.8rem' }}>
              <span style={{ color: '#ffb703', fontWeight: 'bold' }}>
                {'★'.repeat(rev.rating)}
              </span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                {rev.date}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}