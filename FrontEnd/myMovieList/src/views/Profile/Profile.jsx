import { ArrowLeftIcon, GearIcon } from "@primer/octicons-react";
import "./Profile.css";
import image from "./images/luffyPP.png";
import postImage from "./images/luffyPP.jpg";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";

export default function Profile() {
  return (
    <div className="profileContainer">
      <div className="profileContent">
        <div className="profileHeader">
          <div className="profileHeaderLeftIcon">
            <ArrowLeftIcon size={24} />
          </div>
          <div className="profileHeaderUserPicture">
            <img src={postImage}></img>
          </div>
          <div className="profileHeaderRightIcon">
            <Link to={"/editProfile"}>
              <GearIcon size={24} fill={"gray"} />
            </Link>
          </div>
        </div>
        <div className="profileFirstBody">
          <div className="profileFirstBodyName">
            <h2>USERNAME</h2>
          </div>
          <div className="profileFirstBodyRegDate">
            <h6>joined 11/02/2023</h6>
          </div>
        </div>
        <div className="profileMainBody">
          <div className="profileMainBodyTitles">
            <Link to={"/"}>
              <h5>MY POSTS</h5>
            </Link>
            <Link to={"/"}>
              <h5>LISTS</h5>
            </Link>
          </div>
          <div className="profileMainBodyCards">
            <Card
              to={"/"}
              cardTitle={"My first Post"}
              image={postImage}
              title={"View details"}
              starFill={"var(--black)"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
