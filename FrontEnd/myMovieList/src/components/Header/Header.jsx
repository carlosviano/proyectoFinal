import { GearIcon, PersonIcon } from "@primer/octicons-react";
import ArrowButton from "../Buttons/ArrowButton/ArrowButton";
import "./Header.css";

export default function Header() {
  return (
    <div className="headerMainContainer">
      <div className="headerContainerLeft">
        <div className="LeftTitle">
          <h5>Home page</h5>
        </div>
        <div className="leftButton">
          <ArrowButton className="smallBtn" size={14} arrowFill={"white"} />
        </div>
      </div>
      <div className="headerContainerMiddle">
        <div className="middleContent">
          <h5>My Lists</h5>
        </div>
      </div>
      <div className="headerContainerRight">
        <div className="userIcon">
          <PersonIcon size={24} fill={"gray"} />
        </div>
        <div className="settingsIcon">
          <GearIcon size={24} fill={"gray"} />
        </div>
      </div>
    </div>
  );
}
