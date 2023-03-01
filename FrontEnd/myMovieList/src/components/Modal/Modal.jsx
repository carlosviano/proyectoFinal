import { EyeClosedIcon } from "@primer/octicons-react";
import "./Modal.css";

export default function Modal({ title, image, text, username, date, onClick }) {
  return (
    <div className="overlay" onClick={onClick}>
      <div className="modalContainer">
        <div className="modalContainerCard">
          <div className="mainFeedCardHeader">
            <div className="mainFeedCardTitle">
              <h2>{title}</h2>
            </div>
            <div className="mainFeedCardTitleRemove" onClick={onClick}>
              <EyeClosedIcon size={24} fill={"var(--green)"} />
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
                  <h5>{username}</h5>
                </div>
                <div className="mainFeedCardDate">
                  <h5>{date}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
