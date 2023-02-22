import { CheckIcon, PencilIcon } from "@primer/octicons-react";
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
}) {
  const [editable, setEditable] = useState(false);
  const [ratingValue, setRatingValue] = useState("");
  const [progressValue, setProgressValue] = useState("");

  const { authorization } = useLoginContext();

  function ToggleEditable() {
    setEditable(!editable);
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
      alert("Show updated");
      setEditable(!editable);
      setChangeList(!changeList);
    } else {
      alert("Error updating");
    }
  }

  return (
    <div className="listCardDetails">
      <div className="listCardImageNameGroup">
        <div className="listCardIcon" onClick={() => ToggleEditable()}>
          <PencilIcon size={16} />
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
        <h6>X</h6>
      </div>
    </div>
  );
}
