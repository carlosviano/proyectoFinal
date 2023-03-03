import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { BrowseFormSchema } from "../../components/Forms/FormSchema";
import { initialBrowseValues } from "../../components/Forms/utils/initialValues";
import Input from "../../components/ui/Input";
import "./Browse.css";
import { useLoginContext } from "../../contexts/LoginModeContext";
import { toast, Toaster } from "react-hot-toast";

export default function Browse() {
  const [search, setSearch] = useState(null);
  const [usersFound, setUsersFound] = useState(null);
  const { authorization } = useLoginContext();
  const [recentUsers, setRecentUsers] = useState([]);
  const [recentShows, setRecentShows] = useState([]);
  const [changeList, setChangeList] = useState(false);

  const sucessfulAlert = () =>
    toast.success(<p>History deleted</p>, {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });

  async function Browse(values, actions) {
    const response = await fetch(
      ` https://api.themoviedb.org/3/search/multi?api_key=66674c972aa10f212a4d8ea3c11ec886&language=en-US&query=${values.search}&page=1&include_adult=false`
    );
    if (response.status === 200) {
      const browseData = await response.json();
      const findUsers = await fetch(`http://localhost:3000/user/browse`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          username: values.search,
        }),
      });
      if (findUsers.status === 200) {
        const foundUsersData = await findUsers.json();
        setUsersFound(foundUsersData);
      }
      setSearch(browseData.results);
    } else if (response.status === 400) {
      console.log("Error");
    }
    actions.resetForm();
  }

  async function addRecentUser(id) {
    console.log(id, "esto es el id del usuario");
    const response = await fetch(
      `http://localhost:3000/user/recent/user/${authorization.iduser}`,
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          searchedUser: id,
        }),
      }
    );
    if (response.status === 200) {
      console.log("agregado a recientes correctamente");
    } else {
      console.log("No se pudo agregar este usuario a recent");
    }
  }

  async function addRecentShow(item) {
    console.log(item, "esto es item");
    const response = await fetch(
      `http://localhost:3000/user/recent/show/${authorization.iduser}`,
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          img: item.backdrop_path,
          idShow: item.id,
          name: item.name,
          title: item.title,
          rating: item.vote_average,
        }),
      }
    );
    if (response.status === 200) {
      console.log("agregado a recientes correctamente");
    } else {
      console.log("No se pudo agregar este show a recent");
    }
  }

  useEffect(() => {
    async function fecthRecentUsers() {
      const response = await fetch(
        `http://localhost:3000/user/getRecentUser/${authorization.iduser}`
      );
      if (response.status === 200) {
        const userHistory = await response.json();
        setRecentUsers(userHistory);
        console.log(userHistory, "esto es el historial de usuario");
      } else {
        console.log("Error when trying to fetch user history");
      }
    }
    fecthRecentUsers();
  }, [changeList]);

  useEffect(() => {
    async function fecthRecentShows() {
      const response = await fetch(
        `http://localhost:3000/user/getRecentShows/${authorization.iduser}`
      );
      if (response.status === 200) {
        const showsHistory = await response.json();
        setRecentShows(showsHistory);
        console.log(showsHistory, "esto es el historial de shows");
      } else {
        console.log("Error when trying to fetch user history");
      }
    }
    fecthRecentShows();
  }, [changeList]);

  async function deleteUserHistory() {
    const response = await fetch(
      `http://localhost:3000/user/recentUsers/${authorization.iduser}`,
      {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
      }
    );
    if (response.status === 200) {
      sucessfulAlert();
      setChangeList(!changeList);
    } else {
      alert("Error when trying to delete history");
    }
  }

  async function deleteShowsHistory() {
    const response = await fetch(
      `http://localhost:3000/user/shows/${authorization.iduser}`,
      {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
      }
    );
    if (response.status === 200) {
      sucessfulAlert();
      setChangeList(!changeList);
    } else {
      alert("Error when trying to delete history");
    }
  }
  return (
    <>
      <Toaster />
      <Formik
        initialValues={initialBrowseValues}
        validationSchema={BrowseFormSchema}
        onSubmit={Browse}
      >
        {({}) => (
          <>
            <Form className="formRegister">
              <div className="inputContainer">
                <h6>Search for your fav movie or show</h6>
                <Input
                  name="search"
                  type="search"
                  className={"registerInput"}
                ></Input>
              </div>
            </Form>
            {usersFound?.length > 0 && <h3>Users found</h3>}
            <div className="userCardsContainer">
              {usersFound &&
                usersFound.map((userItem) => (
                  <Card
                    image={` http://localhost:3000/${userItem.img}`}
                    onClick={() => addRecentUser(userItem.iduser)}
                    cardTitle={userItem.username}
                    to={
                      userItem.iduser === authorization.iduser
                        ? `/profile`
                        : `/user/${userItem.iduser}`
                    }
                    title={"View profile "}
                    starFill={"var(--black)"}
                    key={userItem.iduser}
                    cardImgClassName={"cardImageMovie"}
                  />
                ))}
            </div>
            {search?.length > 0 && <h3>Shows found</h3>}
            <div className="searchCardsContainer">
              {!search ? (
                <p></p>
              ) : (
                search.map((item) => (
                  <Card
                    onClick={() => addRecentShow(item)}
                    image={
                      "https://www.themoviedb.org/t/p/original/" +
                      item.backdrop_path
                    }
                    cardTitle={item.title ? item.title : item.name}
                    movieRating={item.vote_average}
                    to={
                      item.title ? `/movies/${item.id}` : `/series/${item.id}`
                    }
                    title={"View Details"}
                    starFill={"gold"}
                    key={item.id}
                    cardImgClassName={"cardImageMovie"}
                  />
                ))
              )}
            </div>
          </>
        )}
      </Formik>
      {!usersFound & !search && (
        <div className="recentHistoryContainer">
          <div className="recentHistoryContent">
            {recentUsers?.length > 0 ? (
              <div className="recentUserHistoryContainer">
                <div className="historyHeader">
                  <div className="recentHistoryTitle">
                    <h3>Recent users</h3>
                  </div>
                  <div
                    className="recentHistoryDelete"
                    onClick={() => deleteUserHistory()}
                  >
                    <p>Delete history</p>
                  </div>
                </div>
                <div className="recentHistoryUserCard">
                  {recentUsers &&
                    recentUsers?.map((userItem) => (
                      <Card
                        image={` http://localhost:3000/${userItem.img}`}
                        onClick={() => addRecentUser(userItem.iduser)}
                        cardTitle={userItem.username}
                        to={
                          userItem.iduser === authorization.iduser
                            ? `/profile`
                            : `/user/${userItem.iduser}`
                        }
                        title={"View profile "}
                        starFill={"var(--black)"}
                        key={userItem.iduser}
                        cardImgClassName={"cardImageHistory"}
                      />
                    ))}
                </div>
              </div>
            ) : (
              <p></p>
            )}
            {recentShows?.length > 0 ? (
              <div className="recentHistoryShowsContainer">
                <div className="historyHeader">
                  <div className="recentHistoryShowsTitle">
                    <h3>Recent searched shows</h3>
                  </div>
                  <div
                    className="recentHistoryDelete"
                    onClick={() => deleteShowsHistory()}
                  >
                    <p>Delete history</p>
                  </div>
                </div>
                <div className="recentHistoryShowsCard">
                  {!recentShows ? (
                    <p></p>
                  ) : (
                    recentShows.map((item) => (
                      <Card
                        onClick={() => addRecentShow(item)}
                        image={
                          "https://www.themoviedb.org/t/p/original/" +
                          item.image
                        }
                        cardTitle={item.title ? item.title : item.name}
                        movieRating={item.rating}
                        to={
                          item.title
                            ? `/movies/${item.showid}`
                            : `/series/${item.showid}`
                        }
                        title={"View Details"}
                        starFill={"gold"}
                        key={item.showid}
                        cardImgClassName={"cardImageMovie"}
                      />
                    ))
                  )}
                </div>
              </div>
            ) : (
              <p></p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
