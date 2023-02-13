import { Link } from "react-router-dom";
import "./VerticalHeader.css";

export default function VerticalHeader() {
  return (
    <div className="verticalHeaderMainContainer">
      <div className="verticalHeaderContainerUpper">
        <div className="verticalHeaderContainerTitle">
          <Link to={"/"}>
            <h5>Home</h5>
          </Link>
        </div>
        <div className="verticalHeaderContainerTitle">
          <Link to={"/browse"}>
            <h5>Browse</h5>
          </Link>
        </div>
        <div className="verticalHeaderContainerTitle">
          <Link to={"/movies"}>
            <h5>Movies</h5>
          </Link>
        </div>
        <div className="verticalHeaderContainerTitle">
          <Link to={"/shows"}>
            <h5>Series</h5>
          </Link>
        </div>
      </div>
      <div className="verticalHeaderContainerLower">
        <div className="verticalHeaderContainerTitle">
          <Link to={"/profile"}>
            <h5>Profile</h5>
          </Link>
        </div>
        <div className="verticalHeaderContainerTitle">
          <Link to={"/userList"}>
            <h5>My lists</h5>
          </Link>
        </div>
        <div className="verticalHeaderContainerTitle">
          <h5>Log Out</h5>
        </div>
      </div>
    </div>
  );
}
