import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import ArrowButton from "../../components/Buttons/ArrowButton/ArrowButton";
import Card from "../../components/Card/Card";
import { BrowseFormSchema } from "../../components/Forms/FormSchema";
import { initialBrowseValues } from "../../components/Forms/utils/initialValues";
import Input from "../../components/ui/Input";
import "./Browse.css";
import { useLoginContext } from "../../contexts/LoginModeContext";

export default function Browse() {
  const [search, setSearch] = useState(null);
  const [usersFound, setUsersFound] = useState(null);
  const { authorization } = useLoginContext();

  async function Browse(values, actions) {
    console.log(values.search);
    const response = await fetch(
      ` https://api.themoviedb.org/3/search/multi?api_key=66674c972aa10f212a4d8ea3c11ec886&language=en-US&query=${values.search}&page=1&include_adult=false`
    );
    if (response.status === 200) {
      console.log(response.url);
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
        console.log(foundUsersData, "esto son los usuarios encontrados");
      }
      setSearch(browseData.results);
    } else if (response.status === 400) {
      console.log("Error");
    }
    actions.resetForm();
  }
  return (
    <Formik
      initialValues={initialBrowseValues}
      validationSchema={BrowseFormSchema}
      onSubmit={Browse}
    >
      {({ isSubmitting }) => (
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
                  image={
                    "https://www.themoviedb.org/t/p/original/" +
                    item.backdrop_path
                  }
                  cardTitle={item.title ? item.title : item.name}
                  movieRating={item.vote_average}
                  to={item.title ? `/movies/${item.id}` : `/series/${item.id}`}
                  title={"Add To List"}
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
  );
}
