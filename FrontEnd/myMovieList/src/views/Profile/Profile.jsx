import {
  ArrowLeftIcon,
  GearIcon,
  PencilIcon,
  TrashIcon,
  XIcon,
} from "@primer/octicons-react";
import "./Profile.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLoginContext } from "../../contexts/LoginModeContext";
import ListCard from "../../components/Card/ListCard";
import ProfileCard from "../../components/Card/ProfileCard/ProfileCard";

export default function Profile() {
  const [user, setUser] = useState([]);
  const { authorization } = useLoginContext();
  const [post, setPost] = useState(true);
  const [changeList, setChangeList] = useState(false);
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
      const response = await fetch(
        `http://localhost:3000/user/get/${authorization?.iduser}`,
        {
          method: "GET",
          headers: { "Content-type": "application/json" },
        }
      );
      if (response.status === 200) {
        const usuario = await response.json();
        console.log(usuario, "esto es get user");
        setUser(usuario);
      } else {
        console.log("There was an error loading userData");
      }
    }
    getUser();
  }, [changeList]);

  useEffect(() => {
    async function fetchStats() {
      const response = await fetch(
        `http://localhost:3000/user/countFollows/${authorization.iduser}`,
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
  }, []);

  return (
    <div className="profileContainer">
      {!user ? (
        <p>cargando...</p>
      ) : (
        user?.user?.map((userItem) => (
          <div className="profileContent" key={userItem.iduser}>
            <div className="profileHeader">
              <div className="profileHeaderLeftIcon">
                <ArrowLeftIcon size={24} />
              </div>
              <div className="profileHeaderUserPicture">
                <img
                  src={` http://localhost:3000/${userItem.profilePicture}`}
                ></img>
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
            </div>
            <div className="profileMainBody">
              <div className="profileMainBodyTitles">
                <Link to={"/profile"} onClick={(e) => showPosts(e)}>
                  <h5>MY POSTS</h5>
                </Link>
                <Link to={"/profile"} onClick={(e) => showList(e)}>
                  <h5>LISTS</h5>
                </Link>
              </div>
              <div className="profileMainBodyCards">
                {post === false ? (
                  user.list.length < 1 ? (
                    <p>No shows were added to your list yet.</p>
                  ) : (
                    user?.list?.map((listItem, index) => (
                      <ListCard
                        altText={`post del usuario ${authorization.iduser} de la serie ${listItem.name}`}
                        name={listItem.name}
                        rating={listItem.rating}
                        type={listItem.type}
                        progress={listItem.state}
                        key={index}
                        icon={<PencilIcon size={16} />}
                        removeIcon={<TrashIcon size={16} />}
                        changeList={changeList}
                        setChangeList={setChangeList}
                      />
                    ))
                  )
                ) : !user.publicaciones ? (
                  <p>You didnt publish any posts yet</p>
                ) : (
                  user?.publicaciones?.map((post, index) => (
                    <ProfileCard
                      to={`/profile`}
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
