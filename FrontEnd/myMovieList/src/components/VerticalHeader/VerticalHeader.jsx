import { Link } from "react-router-dom";
import { useLoginContext } from "../../contexts/LoginModeContext";
import "./VerticalHeader.css";

export default function VerticalHeader() {
  const { logOutAcc } = useLoginContext();
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
          <Link to={"/feed"}>
            <h5>Feed</h5>
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
            <h5>My list</h5>
          </Link>
        </div>
        <div className="verticalHeaderContainerTitle">
          <Link onClick={logOutAcc} to={"/"}>
            <h5>Log Out</h5>
          </Link>
        </div>
      </div>
    </div>
  );
}
