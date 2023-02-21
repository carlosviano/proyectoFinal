import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import ArrowButton from "../../components/Buttons/ArrowButton/ArrowButton";
import Card from "../../components/Card/Card";
import { BrowseFormSchema } from "../../components/Forms/FormSchema";
import { initialBrowseValues } from "../../components/Forms/utils/initialValues";
import Input from "../../components/ui/Input";
import "./Browse.css";

export default function Browse() {
  const [search, setSearch] = useState(null);

  async function Browse(values, actions) {
    console.log(values);
    const response = await fetch(
      ` https://api.themoviedb.org/3/search/multi?api_key=66674c972aa10f212a4d8ea3c11ec886&language=en-US&query=${values.search}&page=1&include_adult=false`
    );
    if (response.status === 200) {
      console.log(response.url);
      const browseData = await response.json();
      console.log("Esto es el data", browseData.results);
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
            <ArrowButton
              disabled={isSubmitting}
              className={"bigBtnGreen"}
              arrowFill="var(--black)"
              arrowSize={24}
            />
          </Form>
          <div className="searchCardsContainer">
            {!search ? (
              <p>We couldnt find any movies</p>
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
