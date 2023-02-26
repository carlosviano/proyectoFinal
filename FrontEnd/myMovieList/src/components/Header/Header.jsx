import { GearIcon, PersonIcon } from "@primer/octicons-react";
import { Link } from "react-router-dom";
import ArrowButton from "../Buttons/ArrowButton/ArrowButton";
import { useLoginContext } from "../../contexts/LoginModeContext";
import { headerMenu } from "../../const/headerMenu";
import { headerMenuLoggedIn } from "../../const/headerMenuLoggedIn";
import "./Header.css";

export default function Header() {
  const { authorization } = useLoginContext();

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
        {authorization.role !== null
          ? headerMenuLoggedIn.map((loginItem, index) => (
              <>
                <Link to={loginItem.path} key={index}>
                  <div className="userIcon">
                    <PersonIcon size={24} fill={"gray"} />
                  </div>
                </Link>
                <Link to={"/editProfile"}>
                  <div className="settingsIcon">
                    <GearIcon size={24} fill={"gray"} />
                  </div>
                </Link>
              </>
            ))
          : headerMenu.map((menuItem, index) => (
              <Link to={menuItem.path} key={index}>
                <div className="userIcon">
                  <PersonIcon size={24} fill={"gray"} />
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
}
