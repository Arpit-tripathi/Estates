import "./card.scss";

function Card() {
  return (
    <div className="card">
      <Link to={`${item.id}`} className="imageContainer">
        <img src={item.image} alt="" />
      </Link>

      <div className="textContainer"></div>
    </div>
  );
}

export default Card;
