import { ArrowLeftIcon, GearIcon } from "@primer/octicons-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import ListCard from "../../components/Card/ListCard";
import Label from "../../components/Label/Label";
import { useLoginContext } from "../../contexts/LoginModeContext";
import "./UserProfile.css";

export default function UserProfile() {
  const [user, setUser] = useState([]);
  const { authorization } = useLoginContext();
  const [post, setPost] = useState(true);
  const [changeList, setChangeList] = useState(false);
  const { id } = useParams();
  const [followsList, setFollowsList] = useState();
  const [userStats, setUserStats] = useState([]);

  function togglePost() {
    console.log(post);
    if (post === true) {
      setPost(false);
    } else {
      setPost(true);
    }
  }

  useEffect(() => {
    console.log(id, "esto es id");
    async function getUser() {
      const response = await fetch(`http://localhost:3000/user/get/${id}`, {
        method: "GET",
        headers: { "Content-type": "application/json" },
      });
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
  }, [changeList]);

  useEffect(() => {
    async function GetFollows() {
      const response = await fetch(
        `http://localhost:3000/user/follows/${authorization.iduser}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 200) {
        const following = await response.json();
        console.log(following[0].following);
        setFollowsList(following[0].following);
      } else {
        alert("Error when fetching follows");
      }
    }
    GetFollows();
  }, [changeList]);

  async function UnfollowUser(e) {
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/user/unfollow/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        user: authorization.iduser,
      }),
    });
    if (response.status === 200) {
      setChangeList(!changeList);
    } else {
      alert("Error");
    }
  }

  async function FollowUser(e) {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:3000/user/startFollow/${id}`,
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          user: authorization.iduser,
        }),
      }
    );
    if (response.status === 200) {
      setChangeList(!changeList);
    } else {
      alert("Error");
    }
  }

  //getting followers and follows
  useEffect(() => {
    async function fetchStats() {
      const response = await fetch(
        `http://localhost:3000/user/countFollows/${id}`,
        {
          method: "GET",
          headers: { "Content-type": "application/json" },
        }
      );
      if (response.status === 200) {
        const userData = await response.json();
        console.log(userData, "esto es userData");
        setUserStats(userData);
      } else {
        alert("Error when fetching userData");
        console.log(response.status);
      }
    }
    fetchStats();
  }, [changeList]);

  return (
    <div className="profileContainer">
      {!user ? (
        <p>cargando...</p>
      ) : (
        <div className="profileContent">
          <div className="profileHeader">
            <div className="profileHeaderLeftIcon"></div>
            <div className="profileHeaderUserPicture">
              <img src={` http://localhost:3000/${user?.profilePicture}`}></img>
            </div>
            <div className="profileHeaderRightIcon"></div>
          </div>
          <div className="profileFirstBody">
            <div className="profileFirstBodyName">
              <h2>{user.username?.toUpperCase()}</h2>
            </div>
            <div className="profileFirstBodyStats">
              {userStats &&
                userStats?.following?.map((followingItem, index) => (
                  <div className="profileFirstBodyFollowing" key={index}>
                    <p>Following: {followingItem.following}</p>
                  </div>
                ))}
              {userStats &&
                userStats?.followers?.map((followerItem, index) => (
                  <div className="profileFirstBodyFollowers" key={index}>
                    <p>Followers: {followerItem.followers}</p>
                  </div>
                ))}
            </div>
            <div className="profileFirstBodyRegDate">
              <h6>joined {user.reg_date}</h6>
            </div>
            <div className="profileFirstBodyFollow">
              {followsList?.includes(user.iduser) ? (
                <div className="followLabel">
                  <Label
                    onClick={(e) => UnfollowUser(e)}
                    className={"labelContainerGreen"}
                    title={"Following"}
                  />
                </div>
              ) : (
                <div className="followLabel" onClick={(e) => FollowUser(e)}>
                  <Label className={"labelContainer"} title={"Follow"} />
                </div>
              )}
            </div>
          </div>
          <div className="profileMainBody">
            <div className="profileMainBodyTitles">
              <Link to={`/user/${id}`} onClick={() => togglePost()}>
                <h5>POSTS</h5>
              </Link>
              <Link to={`/user/${id}`} onClick={() => togglePost()}>
                <h5>LISTS</h5>
              </Link>
            </div>
            <div className="profileMainBodyCards">
              {!post
                ? user.list.map((listItem, index) => (
                    <ListCard
                      altText={`post del usuario ${authorization.iduser} de la serie ${listItem.name}`}
                      name={listItem.name}
                      rating={listItem.rating}
                      type={listItem.type}
                      progress={listItem.state}
                      key={index}
                      changeList={changeList}
                      setChangeList={setChangeList}
                    />
                  ))
                : user.posts?.map((post, index) => (
                    <Card
                      to={`/user/${id}`}
                      cardTitle={post.post}
                      image={` http://localhost:3000/${post.image}`}
                      title={"View details"}
                      starFill={"var(--black)"}
                      key={index}
                      cardImgClassName={"cardImage"}
                      modalImage={` http://localhost:3000/${post.image}`}
                      modalText={post.text}
                      modalTitle={post.post}
                    />
                  ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
