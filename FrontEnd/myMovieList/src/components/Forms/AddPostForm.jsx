import { Form, Formik, useFormik } from "formik";
import { initialAddPostValues } from "./utils/initialValues";
import { AddPostFormSchema } from "./FormSchema";
import { Link } from "react-router-dom";
import Input from "../ui/Input";
import ArrowButton from "../Buttons/ArrowButton/ArrowButton";
import { ImageIcon } from "@primer/octicons-react";
import { useLoginContext } from "../../contexts/LoginModeContext";
import { useRef, useState } from "react";

export default function AddPostForm() {
  const { authorization } = useLoginContext();
  const [preview, setPreview] = useState();

  const onSubmit = (values, actions) => {
    let formdata = new FormData();
    console.log(values.file.name, "probando para la imagen");
    formdata.append("file", values.file);
    formdata.append("title", values.title);
    formdata.append("text", values.text);

    fetch(`http://localhost:3000/publication/${authorization.iduser}`, {
      method: "POST",
      body: formdata,
    }).then((response) => {
      console.log(response.status);
      if (response.status === 400) {
        alert("Error al recibir el body");
      } else if (response.status === 200) {
        alert(`post con titulo ${values.title} subido`);
        console.log(values);
      } else if (response.status === 409) {
        alert("Usuario ya registrado");
      }
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialAddPostValues}
      validationSchema={AddPostFormSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, setFieldValue, values }) => (
        <Form className="formAddPost">
          <div className="inputAddPostContainer">
            <div className="inputAddPostTitle">
              <h6>Insert Title</h6>
              <Input
                name="title"
                type="text"
                className={"addPostInput"}
              ></Input>
            </div>
            <div className="inputAddPostText">
              <h6>Insert text</h6>
              <Input name="text" type="text" className={"addPostInput"}></Input>
            </div>
          </div>
          <div className="imageInputContainer">
            <div className="image-upload">
              <label htmlFor="file-input">
                <ImageIcon size={24} />
              </label>
              <Input
                name="file"
                type="file"
                id="file-input"
                className={"addPostInput"}
                accept="image/*"
                value={undefined}
                onChange={(event) => {
                  console.log(event.target);
                  setFieldValue("file", event.target.files[0]);
                  setPreview(values.file.name);
                }}
              ></Input>
              <img src={preview} alt="" />
            </div>
            <ArrowButton
              className={"mediumBtnGray"}
              arrowFill="var(--white)"
              arrowSize={16}
              disabled={isSubmitting}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}
