import { StarFillIcon } from "@primer/octicons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Label from "../Label/Label";
import Modal from "../Modal/Modal";
import "./Card.css";

export default function Card({
  image,
  cardTitle,
  movieRating,
  to,
  title,
  starFill,
  cardImgClassName,
  modalTitle,
  modalImage,
  modalText,
}) {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
    console.log(showModal);
  }
  return (
    <>
      {showModal === false ? (
        <div className="cardContainer" onClick={() => toggleModal()}>
          <div className="cardContent">
            <div className={cardImgClassName}>
              <Link to={to}>
                <img src={image} alt={"image"}></img>
              </Link>
            </div>
            <div className="cardFooter">
              <div className="cardTitle">
                <h5> {cardTitle}</h5>
              </div>
              <div className="cardDescription">
                <div className="cardRating">
                  <h6>{movieRating}</h6>
                </div>
                <div className="cardRatingLogo">
                  <StarFillIcon size={16} fill={starFill} />
                </div>
              </div>
            </div>
            <div className="cardCTA">
              <Label title={title} className="labelContainer" />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="cardContainer" onClick={() => toggleModal()}>
            <div className="cardContent">
              <div className={cardImgClassName}>
                <Link to={to}>
                  <img src={image} alt={"image"}></img>
                </Link>
              </div>
              <div className="cardFooter">
                <div className="cardTitle">
                  <h5> {cardTitle}</h5>
                </div>
                <div className="cardDescription">
                  <div className="cardRating">
                    <h6>{movieRating}</h6>
                  </div>
                  <div className="cardRatingLogo">
                    <StarFillIcon size={16} fill={starFill} />
                  </div>
                </div>
              </div>
              <div className="cardCTA">
                <Label title={title} className="labelContainer" />
              </div>
            </div>
          </div>
          <Modal
            title={modalTitle}
            image={modalImage}
            text={modalText}
            onClick={() => toggleModal()}
          />
        </>
      )}
    </>
  );
}
