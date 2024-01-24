import {
  CopilotIcon,
  DeviceCameraVideoIcon,
  DeviceDesktopIcon,
  HomeIcon,
  ListUnorderedIcon,
  PeopleIcon,
  PersonIcon,
  SearchIcon,
  SignOutIcon,
} from "@primer/octicons-react";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../contexts/LoginModeContext";
import "./VerticalHeader.css";

export default function VerticalHeader() {
  const { logOutAcc } = useLoginContext();
  return (
    <div className="verticalHeaderMainContainer">
      <div className="verticalHeaderContainerUpper">
        <div className="verticalHeaderContainerTitle">
          <div className="titleIcon">
            <Link to={"/"}>
              <HomeIcon size={24} />
            </Link>
          </div>
          <div className="titleText">
            <Link to={"/"}>
              <h5>Home</h5>
            </Link>
          </div>
        </div>
        <div className="verticalHeaderContainerTitle">
          <div className="titleIcon">
            <Link to={"/browse"}>
              <SearchIcon size={24} />
            </Link>
          </div>
          <div className="titleText">
            <Link to={"/browse"}>
              <h5>Browse</h5>
            </Link>
          </div>
        </div>
        <div className="verticalHeaderContainerTitle">
          <div className="titleIcon">
            <Link to={"/feed"}>
              <PeopleIcon size={24} />
            </Link>
          </div>
          <div className="titleText">
            <Link to={"/feed"}>
              <h5>Feed</h5>
            </Link>
          </div>
        </div>
        <div className="verticalHeaderContainerTitle">
          <div className="titleIcon">
            <Link to={"/shows"}>
              <DeviceDesktopIcon size={24} />
            </Link>
          </div>
          <div className="titleText">
            <Link to={"/shows"}>
              <h5>Series</h5>
            </Link>
          </div>
        </div>
        <div className="verticalHeaderContainerTitle">
          <div className="titleIcon">
            <Link to={"/movies"}>
              <DeviceCameraVideoIcon size={24} />
            </Link>
          </div>
          <div className="titleText">
            <Link to={"/movies"}>
              <h5>Movies</h5>
            </Link>
          </div>
        </div>
      </div>
      <div className="verticalHeaderContainerLower">
        <div className="verticalHeaderContainerTitle">
          <div className="titleIcon">
            <Link to={"/profile"}>
              <PersonIcon size={24} />
            </Link>
          </div>
          <div className="titleText">
            <Link to={"/profile"}>
              <h5>Profile</h5>
            </Link>
          </div>
        </div>
        <div className="verticalHeaderContainerTitle">
          <div className="titleIcon">
            <Link to={"/userlist"}>
              <ListUnorderedIcon size={24} />
            </Link>
          </div>
          <div className="titleText">
            <Link to={"/userlist"}>
              <h5>My list</h5>
            </Link>
          </div>
        </div>
        <div className="verticalHeaderContainerTitle">
          <div className="titleIcon">
            <Link onClick={logOutAcc} to={"/"}>
              <SignOutIcon size={24} />
            </Link>
          </div>
          <div className="titleText">
            <Link onClick={logOutAcc} to={"/"}>
              <h5>Log Out</h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
