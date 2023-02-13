import "./ListCard.css";

export default function ListCard({
  id,
  altText,
  i,
  name,
  rating,
  type,
  progress,
}) {
  return (
    <div className="listCardDetails">
      <div className="listCardImageNameGroup">
        <div className="listCardId">
          <h3>{id}</h3>
        </div>
        <div className="listCardShowImage">
          <img alt={altText} src={i} />
        </div>
        <div className="listCardShowName">
          <h6>{name}</h6>
        </div>
      </div>
      <div className="listCardMiddleGroup">
        <div className="listCardRating">
          <h6>{rating}</h6>
        </div>
        <div className="listCardType">
          <h6>{type}</h6>
        </div>
      </div>
      <div className="listCardRightGroup">
        <div className="listCardPorgressTitle">
          <h6>{progress}</h6>
        </div>
      </div>
      <div className="listCardRemove">
        <h6>X</h6>
      </div>
    </div>
  );
}
