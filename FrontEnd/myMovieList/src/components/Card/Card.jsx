import ArrowButton from "../Buttons/ArrowButton/ArrowButton";
import "./Card.css";

export default function Card({ className, cardTitle }) {
  return (
    <div className={className}>
      <div className="cardNoImageHeader">
        <div className="cardNoImageTitle">
          <h4>{cardTitle}</h4>
        </div>
        <div className="cardNoImageCTA">
          <ArrowButton className="bigBtn" size={16} arrowFill="black" />
        </div>
      </div>
    </div>
  );
}
