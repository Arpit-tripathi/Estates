import "./card.scss";
import { Link } from "react-router-dom";
import address from "../../assets/pin.png";
import bed from "../../assets/bed.png";
import bath from "../../assets/bath.png";
import save from "../../assets/save.png";
import chat from "../../assets/chat.png";

function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt={item.title} />
      </Link>

      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src={address} alt="address" />
          <span>{item.address}</span>
        </p>
        <p className="price">{item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src={bed} alt="bedroom" />
              <span>{item.bedroom} Bedroom</span>
            </div>
            <div className="feature">
              <img src={bath} alt="bathroom" />
              <span>{item.bathroom} Bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src={save} alt="save" />
            </div>
            <div className="icon">
              <img src={chat} alt="chat" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
