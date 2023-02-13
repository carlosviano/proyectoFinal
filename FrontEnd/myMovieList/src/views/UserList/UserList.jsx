import "./UserList.css";
import "@splidejs/react-splide/css/sea-green";
import image2 from "./images/l.jpg";
import image3 from "./images/123.png";
import image from "./images/luffyPP.jpg";
import { Link } from "react-router-dom";

export default function UserList() {
  return (
    <div className="mainUserListContainer">
      <div className="mainUserListTitle">
        <h1>USERNAME</h1>
        <h1 className="blueH1">LISTS</h1>
      </div>
      <div className="userListContentTop">
        <h2>SHOW ALL</h2>
      </div>
      <div className="userListContentBottom">
        <div className="userListContentBottomLeft">
          <h3>CURRENTLY WATCHING</h3>
        </div>
        <div className="userListContentBottomMiddle">
          <h3>PLAN TO WATCH</h3>
        </div>
        <div className="userListContentBottomRight">
          <h3>COMPLETED</h3>
        </div>
      </div>
    </div>
  );
}
