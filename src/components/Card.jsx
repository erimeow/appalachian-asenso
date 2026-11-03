export default function Card({ title, description, icon, children }) {
  return (
    <div
      style={{
        background: '#12151e',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '12px',
        padding: '2rem 1.75rem',
        transition: 'border-color 0.2s ease, transform 0.2s ease',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
        e.currentTarget.style.transform = 'translateY(0px)';
      }}
    >
      {icon && (
        <div style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center' }}>
          {icon}
        </div>
      )}
      <h3 style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '0.5rem', fontWeight: '600', letterSpacing: '0.02em' }}>
        {title}
      </h3>
      <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: '1.6' }}>
        {description}
      </p>
      {children}
    </div>
  );
}