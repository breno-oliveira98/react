import "./Card.css";
function Card({ title, subtitle, description }) {
  return (
    <>
      <div className="card">
        <h2 className="title">{title}</h2>
        <p className="subtitle">{subtitle}</p>
        <br />
        <p className="description">{description}</p>
      </div>
    </>
  );
}

export default Card;
