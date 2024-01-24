import { StarFillIcon } from "@primer/octicons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Label from "../../Label/Label";
import Modal from "../../Modal/Modal";
import "./ProfileCard.css";

export default function Card({
  image,
  cardTitle,
  removeCard,
  to,
  title,
  starFill,
  cardImgClassName,
  modalTitle,
  modalImage,
  modalText,
  onClick,
  movieRating,
}) {
  const [showModal, setShowModal] = useState(false);
  const [removeMessage, setRemoveMessage] = useState(false);

  function toggleModal(e) {
    e.stopPropagation();
    setShowModal(!showModal);
  }

  function ToggleRemoveMessage() {
    setRemoveMessage(!removeMessage);
  }
  return (
    <>
      {showModal === false ? (
        <div className="cardContainer">
          <div className="cardContent">
            {removeMessage === false ? (
              <>
                <div
                  className={cardImgClassName}
                  onClick={(e) => toggleModal(e)}
                >
                  <Link to={to}>
                    <img src={image} alt={"image"}></img>
                  </Link>
                </div>
                <div className="cardFooter">
                  <div className="cardTitle">
                    <h5> {cardTitle}</h5>
                  </div>
                  <div className="cardDescription">
                    <div
                      className="cardRemover"
                      onClick={() => ToggleRemoveMessage()}
                    >
                      <h6>{removeCard}</h6>
                    </div>
                    <div className="cardRatingLogo">
                      <StarFillIcon size={16} fill={starFill} />
                    </div>
                  </div>
                </div>
                <div className="cardCTA" onClick={(e) => toggleModal(e)}>
                  <Label title={title} className="labelContainer" />
                </div>
              </>
            ) : (
              <div className="removeProfilePostMessageContainer">
                <div className="removeProfilePostMessageText">
                  <h5>Are you sure you want to delete this post ? </h5>
                </div>
                <div className="removeProfilePostCTA">
                  <div
                    className="removeProfilePostMessageReturn"
                    onClick={() => ToggleRemoveMessage()}
                  >
                    <p>RETURN</p>
                  </div>
                  <div
                    className="removeProfilePostMessageConfirm"
                    onClick={onClick}
                  >
                    <p>DELETE</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <>
          <div className="cardContainer">
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
              <div className="cardCTA" onClick={(e) => toggleModal(e)}>
                <Label title={title} className="labelContainer" />
              </div>
            </div>
          </div>
          <Modal
            title={modalTitle}
            image={modalImage}
            text={modalText}
            onClick={(e) => toggleModal(e)}
          />
        </>
      )}
    </>
  );
}
