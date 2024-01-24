import ListCard from "../../components/Card/ListCard";
import "./UserList.css";
import image from "./images/luffyPP.jpg";
import image2 from "./images/spiderman.jpg";
import { useEffect, useState } from "react";
import { useLoginContext } from "../../contexts/LoginModeContext";
import { PencilIcon, TrashIcon, XIcon } from "@primer/octicons-react";

export default function UserList() {
  const [user, setUser] = useState([]);
  const { authorization } = useLoginContext();
  const [changeList, setChangeList] = useState(false);

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
  }, [changeList]);
  return (
    <div className="userListDetailsMainContainer">
      <div className="userListDetailsTitles">
        {user ? (
          <div className="userListDetailsTitle">
            <h2>{authorization.username}'s LIST</h2>
          </div>
        ) : (
          <div className="userListDetailsEmptyTitle">
            <h5>You dont have items in this list yet</h5>
          </div>
        )}
      </div>
      <ListCard
        id={authorization.iduser}
        name={<p>Name</p>}
        rating={<p>Rating</p>}
        type={<p>Type</p>}
        progress={<p>Progress</p>}
      />
      {user.list?.map((listItem, index) => (
        <ListCard
          id={authorization.iduser}
          altText={`post del usuario ${authorization.iduser} de la serie ${listItem.name}`}
          i={` http://localhost:3000/${listItem.image}`}
          name={listItem.name}
          rating={listItem.rating}
          type={listItem.type}
          progress={listItem.state}
          key={index}
          changeList={changeList}
          setChangeList={setChangeList}
          icon={<PencilIcon size={16} />}
          removeIcon={<TrashIcon size={16} />}
        />
      ))}
    </div>
  );
}
