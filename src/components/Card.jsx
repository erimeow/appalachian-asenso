export default function Card({ title, description, icon, children }) {
  return (
    <div
      style={{
        background: 'var(--bg-glass)',
        backdropFilter: 'blur(12px)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '12px',
        padding: '2rem 1.75rem',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.3)';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-subtle)';
        e.currentTarget.style.transform = 'translateY(0px)';
      }}
    >
      {icon && (
        <div style={{ fontSize: '1.75rem', marginBottom: '1rem', opacity: 0.9 }}>
          {icon}
        </div>
      )}
      <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '0.6rem', fontWeight: '600' }}>
        {title}
      </h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>
        {description}
      </p>
      {children}
    </div>
  );
}