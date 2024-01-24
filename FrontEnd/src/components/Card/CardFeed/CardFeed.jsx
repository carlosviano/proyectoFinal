import { TrashIcon } from "@primer/octicons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./CardFeed.css";

export default function CardFeed({
  title,
  image,
  text,
  username,
  rating,
  date,
  removeIcon,
  onClick,
  to,
}) {
  const [removeMessage, setRemoveMessage] = useState(false);

  function ToggleRemoveMessage() {
    setRemoveMessage(!removeMessage);
  }
  return (
    <div className="mainFeedCardContainer">
      {removeMessage === false ? (
        <>
          <div className="mainFeedCardHeader">
            <div className="mainFeedCardTitle">
              <h2>{title}</h2>
            </div>
            <div
              className="mainFeedCardTitleRemove"
              onClick={() => ToggleRemoveMessage()}
            >
              {removeIcon}
            </div>
          </div>
          <div className="mainFeedCardBody">
            <div className="mainFeedCardLeftContent">
              <div className="mainFeedCardImage">
                <img src={image} />
              </div>
            </div>
            <div className="mainFeedCardRightContent">
              <div className="mainFeedCardText">
                <h6>{text}</h6>
              </div>
              <div className="mainFeedCardUserInfo">
                <div className="mainFeedCardUsername">
                  <Link to={to}>
                    <h5>{username}</h5>
                  </Link>
                </div>
                <div className="mainFeedCardDate">
                  <h5>{date}</h5>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="removePostMessageContainer">
          <div className="removePostMessageText">
            <h4>Are you sure you want to delete this post ? </h4>
          </div>
          <div className="removePostCTA">
            <div
              className="removePostMessageReturn"
              onClick={() => ToggleRemoveMessage()}
            >
              <p>RETURN</p>
            </div>
            <div className="removePostMessageConfirm" onClick={onClick}>
              <p>DELETE</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
