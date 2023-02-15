import { ArrowLeftIcon, GearIcon } from "@primer/octicons-react";
import "./Profile.css";
import postImage from "./images/luffyPP.jpg";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import { useEffect, useState } from "react";
import { useLoginContext } from "../../contexts/LoginModeContext";

export default function Profile() {
  const [user, setUser] = useState([]);
  const { authorization } = useLoginContext();

  useEffect(() => {
    async function getUser() {
      const response = await fetch(
        `http://localhost:3000/user/get/${authorization.iduser}`,
        {
          method: "GET",
          headers: { "Content-type": "application/json" },
        }
      );
      if (response.status === 200) {
        const usuario = await response.json();
        setUser(usuario);
        console.log("Esto es la response.json", usuario);
      } else {
        console.log("There was an error loading userData");
      }
    }
    getUser();
    console.log(user.username);
  }, []);
  return (
    <div className="profileContainer">
      {!user ? (
        <p>cargando...</p>
      ) : (
        user.map((userItem, index) => (
          <div className="profileContent" key={index}>
            <div className="profileHeader">
              <div className="profileHeaderLeftIcon">
                <ArrowLeftIcon size={24} />
              </div>
              <div className="profileHeaderUserPicture">
                <img src={` http://localhost:3000/${userItem.img}`}></img>
              </div>
              <div className="profileHeaderRightIcon">
                <Link to={"/editProfile"}>
                  <GearIcon size={24} fill={"gray"} />
                </Link>
              </div>
            </div>
            <div className="profileFirstBody">
              <div className="profileFirstBodyName">
                <h2>{userItem.username.toUpperCase()}</h2>
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
        ))
      )}
    </div>
  );
}
