import { ArrowLeftIcon, GearIcon } from "@primer/octicons-react";
import "./Profile.css";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import { useEffect, useState } from "react";
import { useLoginContext } from "../../contexts/LoginModeContext";
import ListCard from "../../components/Card/ListCard";

export default function Profile() {
  const [user, setUser] = useState([]);
  const { authorization } = useLoginContext();
  const [post, setPost] = useState(true);

  function togglePost() {
    console.log(post);
    if (post === true) {
      setPost(false);
    } else {
      setPost(true);
    }
  }

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
        <div className="profileContent">
          <div className="profileHeader">
            <div className="profileHeaderLeftIcon">
              <ArrowLeftIcon size={24} />
            </div>
            <div className="profileHeaderUserPicture">
              <img src={` http://localhost:3000/${user.profilePicture}`}></img>
            </div>
            <div className="profileHeaderRightIcon">
              <Link to={"/editProfile"}>
                <GearIcon size={24} fill={"gray"} />
              </Link>
            </div>
          </div>
          <div className="profileFirstBody">
            <div className="profileFirstBodyName">
              <h2>{user.username?.toUpperCase()}</h2>
            </div>
            <div className="profileFirstBodyRegDate">
              <h6>joined {user.reg_date}</h6>
            </div>
          </div>
          <div className="profileMainBody">
            <div className="profileMainBodyTitles">
              <Link to={"/profile"} onClick={() => togglePost()}>
                <h5>MY POSTS</h5>
              </Link>
              <Link to={"/profile"} onClick={() => togglePost()}>
                <h5>LISTS</h5>
              </Link>
            </div>
            <div className="profileMainBodyCards">
              {!post
                ? user.list.map((listItem, index) => (
                    <ListCard
                      id={authorization.iduser}
                      altText={`post del usuario ${authorization.iduser} de la serie ${listItem.name}`}
                      i={` http://localhost:3000/${listItem.image}`}
                      name={listItem.name}
                      rating={listItem.rating}
                      type={listItem.type}
                      progress={listItem.state}
                      key={index}
                    />
                  ))
                : user.posts?.map((post, index) => (
                    <Card
                      to={"/profile"}
                      cardTitle={post.post}
                      image={` http://localhost:3000/${post.image}`}
                      title={"View details"}
                      starFill={"var(--black)"}
                      key={index}
                      cardImgClassName={"cardImage"}
                    />
                  ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
