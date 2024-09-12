import "./Card.css";
function Card({ title, subtitle, description, logo }) {
  return (
    <>
      <div className="card">
        <div className="logo-card">{logo}</div>
        <div className="section">
          <h2 className="title">{title}</h2>
          <p className="subtitle">{subtitle}</p>
          <br />
          <p className="description">{description}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
