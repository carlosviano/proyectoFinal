import { GearIcon, PersonIcon } from "@primer/octicons-react";
import { Link } from "react-router-dom";
import ArrowButton from "../Buttons/ArrowButton/ArrowButton";
import "./Header.css";

export default function Header() {
  return (
    <div className="headerMainContainer">
      <div className="headerContainerLeft">
        <div className="LeftTitle">
          <h6>Home page</h6>
        </div>
        <div className="leftButton">
          <ArrowButton
            className="smallBtnBlack"
            arrowSize={14}
            arrowFill={"white"}
          />
        </div>
      </div>
      <div className="headerContainerRight">
        <Link to={"/login"}>
          <div className="userIcon">
            <PersonIcon size={24} fill={"gray"} />
          </div>
        </Link>
        <Link to={"/editProfile"}>
          <div className="settingsIcon">
            <GearIcon size={24} fill={"gray"} />
          </div>
        </Link>
      </div>
    </div>
  );
}
