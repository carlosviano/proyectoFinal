import {
  CheckIcon,
  PencilIcon,
  ThumbsdownIcon,
  ThumbsupIcon,
  XIcon,
} from "@primer/octicons-react";
import { useState } from "react";
import { useLoginContext } from "../../contexts/LoginModeContext";
import "./ListCard.css";

export default function ListCard({
  name,
  rating,
  type,
  progress,
  setChangeList,
  changeList,
  icon,
  removeIcon,
}) {
  const [editable, setEditable] = useState(false);
  const [ratingValue, setRatingValue] = useState("");
  const [progressValue, setProgressValue] = useState("");
  const [remover, setRemover] = useState(false);

  const { authorization } = useLoginContext();

  function ToggleEditable() {
    setEditable(!editable);
  }

  function toggleRemover() {
    setRemover(!remover);
  }

  async function UpdateList(e, name, progressValue, ratingValue) {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:3000/list/update/${authorization.iduser}`,
      {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          name: name,
          rating: ratingValue,
          state: progressValue,
        }),
      }
    );
    if (response.status === 200) {
      setEditable(!editable);
      setChangeList(!changeList);
    } else {
      alert("Error updating");
    }
  }

  async function RemoveShow(e, name) {
    e.preventDefault();
    const respuesta = await fetch(
      `http://localhost:3000/list/remove/${authorization.iduser}`,
      {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          show: name,
        }),
      }
    );
    if (respuesta.status === 200) {
      setRemover(!remover);
      setChangeList(!changeList);
    } else {
      alert("Couldnt delete show");
    }
  }
  return (
    <>
      {remover === false ? (
        <div className="listCardDetails">
          <div className="listCardImageNameGroup">
            <div className="listCardIcon" onClick={() => ToggleEditable()}>
              {icon}
            </div>
            <div className="listCardShowName">
              <h6>{name}</h6>
            </div>
          </div>
          <div className="listCardMiddleGroup">
            <div className="listCardRating">
              <div className="listCardRatingNumber">
                {editable === true ? (
                  <div className="selectGroup">
                    <div className="selectRating">
                      <select
                        name="ratingValues"
                        value={ratingValue}
                        onChange={(e) => setRatingValue(e.target.value)}
                      >
                        <option value=""></option>
                        <option value="10">10</option>
                        <option value="9">9</option>
                        <option value="8">8</option>
                        <option value="7">7</option>
                        <option value="6">6</option>
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                        <option value="0">0</option>
                      </select>
                    </div>
                    <div
                      className="selectRatingConfirm"
                      onClick={(e) =>
                        UpdateList(e, name, progressValue, ratingValue)
                      }
                    >
                      <CheckIcon size={16} fill={"var(--green)"} />
                    </div>
                  </div>
                ) : (
                  <h6>{rating}</h6>
                )}
              </div>
            </div>
            <div className="listCardType">
              <h6>{type}</h6>
            </div>
          </div>
          <div className="listCardRightGroup">
            <div className="listCardProgressTitle">
              <div className="listCardProgressTitleText">
                {editable === true ? (
                  <div className="selectGroup">
                    <div className="selectStatus">
                      <select
                        name="progressValue"
                        value={progressValue}
                        onChange={(e) => setProgressValue(e.target.value)}
                      >
                        <option value="--select--">--select--</option>
                        <option value="currently Watching">
                          currently watching
                        </option>
                        <option value="watched">watched</option>
                        <option value="plan to watch">plan to watch</option>
                        <option value="dropped">dropped</option>
                      </select>
                    </div>
                    <div
                      className="selectProgressConfirm"
                      onClick={(e) =>
                        UpdateList(e, name, progressValue, ratingValue)
                      }
                    >
                      <CheckIcon size={16} fill={"var(--green)"} />
                    </div>
                  </div>
                ) : (
                  <h6>{progress}</h6>
                )}
              </div>
            </div>
          </div>
          <div className="listCardRemove">
            <div
              className="listCardRemoverIcon"
              onClick={() => toggleRemover()}
            >
              {removeIcon}
            </div>
          </div>
        </div>
      ) : (
        <div className="removerQuestion">
          <div className="removerQuestionText">
            <p>Delete {name} from your list?</p>
          </div>
          <div
            className="removerQuestionReject"
            onClick={() => toggleRemover()}
          >
            <p>Return</p>
          </div>
          <div
            className="removerQuestionConfirm"
            onClick={(e) => RemoveShow(e, name)}
          >
            <p>Delete</p>
          </div>
        </div>
      )}
    </>
  );
}
