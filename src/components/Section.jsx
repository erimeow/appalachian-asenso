import './Section.css';

function Section({ id, subtitle, title, children, glass = false }) {
  return (
    <section id={id} className={`section ${glass ? 'section-glass' : ''}`}>
      <div className="section-container">
        {(title || subtitle) && (
          <div className="section-header">
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
            {title && <h2 className="section-title">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export default Section;