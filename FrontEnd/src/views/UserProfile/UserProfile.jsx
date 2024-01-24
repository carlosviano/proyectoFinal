import { ArrowLeftIcon, GearIcon } from "@primer/octicons-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProfileCard from "../../components/Card/ProfileCard/ProfileCard";
import ListCard from "../../components/Card/ListCard";
import Label from "../../components/Label/Label";
import { useLoginContext } from "../../contexts/LoginModeContext";
import "./UserProfile.css";

export default function UserProfile() {
  const [userData, setUserData] = useState([]);
  const { authorization } = useLoginContext();
  const [post, setPost] = useState(true);
  const [changeList, setChangeList] = useState(false);
  const { id } = useParams();
  const [followsList, setFollowsList] = useState();
  const [userStats, setUserStats] = useState([]);

  function showList(e) {
    e.preventDefault();
    setPost(false);
  }

  function showPosts(e) {
    e.preventDefault();
    setPost(true);
  }
  useEffect(() => {
    async function getUser() {
      const response = await fetch(`http://localhost:3000/user/get/${id}`, {
        method: "GET",
        headers: { "Content-type": "application/json" },
      });
      if (response.status === 200) {
        const usuario = await response.json();
        setUserData(usuario);
      } else {
        console.log("There was an error loading userData");
      }
    }
    getUser();
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
        setUserStats(userData);
      } else {
        alert("Error when fetching userData");
      }
    }
    fetchStats();
  }, [changeList]);

  return (
    <div className="profileContainer">
      {!userData ? (
        <p>cargando...</p>
      ) : (
        userData?.user?.map((userItem) => (
          <div className="profileContent" key={userItem.iduser}>
            <div className="profileHeader">
              <div className="profileHeaderLeftIcon"></div>
              <div className="profileHeaderUserPicture">
                <img
                  src={` http://localhost:3000/${userItem?.profilePicture} `}
                  alttext="profilePicture"
                ></img>
              </div>
              <div className="profileHeaderRightIcon"></div>
            </div>
            <div className="profileFirstBody">
              <div className="profileFirstBodyName">
                <h2>{userItem.username?.toUpperCase()}</h2>
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
                <h6>joined {userItem.reg_date}</h6>
              </div>
              <div className="profileFirstBodyFollow">
                {followsList?.includes(userItem.iduser) ? (
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
                <Link to={`/user/${id}`} onClick={(e) => showPosts(e)}>
                  <h5>POSTS</h5>
                </Link>
                <Link to={`/user/${id}`} onClick={(e) => showList(e)}>
                  <h5>LISTS</h5>
                </Link>
              </div>
              <div className="profileMainBodyCards">
                {post === false ? (
                  userData.list.length < 1 ? (
                    <p>{userItem.username} has no items in his list yet</p>
                  ) : (
                    userData?.list?.map((listItem, index) => (
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
                  )
                ) : !userData.publicaciones ? (
                  <p>{userItem.username} has not made any posts yet</p>
                ) : (
                  userData?.publicaciones?.map((post, index) => (
                    <ProfileCard
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
                  ))
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
