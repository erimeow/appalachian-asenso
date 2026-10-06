import './Card.css';

function Card({ icon, title, description, children }) {
  return (
    <div className="card">
      <div>
        {icon && <div className="card-icon">{icon}</div>}
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
      {children && <div className="card-footer">{children}</div>}
    </div>
  );
}

export default Card;