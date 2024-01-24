import { Form, Formik } from "formik";
import { initialRegisterValues } from "./utils/initialValues";
import { EditProfileFormSchema, RegisterFormSchema } from "./FormSchema";
import { Link, useNavigate } from "react-router-dom";
import Input from "../ui/Input";
import { useLoginContext } from "../../contexts/LoginModeContext";
import ArrowButton from "../Buttons/ArrowButton/ArrowButton";

export default function RegisterForm() {
  const { authorization } = useLoginContext();
  const onSubmit = (values, actions) => {
    fetch(`http://localhost:3000/user/update/info/${authorization.iduser}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((response) => {
      if (response.status === 400) {
        alert("Error al recibir el body");
      } else if (response.status === 200) {
        alert(`Usuario ${values.name} registrado correctamente`);
      } else if (response.status === 409) {
        alert("Usuario ya registrado");
      }
    });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialRegisterValues}
      validationSchema={EditProfileFormSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="formRegister">
          <div className="inputContainer">
            <h6>Name</h6>
            <Input name="name" type="text" className={"registerInput"}></Input>
          </div>
          <div className="inputContainer">
            <h6>Surname</h6>
            <Input
              name="surname"
              type="text"
              className={"registerInput"}
            ></Input>
          </div>
          <div className="inputContainer">
            <h6>Username</h6>
            <Input
              name="username"
              type="text"
              className={"registerInput"}
            ></Input>
          </div>

          <div className="inputContainer">
            <h6>Email</h6>
            <Input
              name="email"
              type="email"
              className={"registerInput"}
            ></Input>
          </div>
          <div className="inputContainer">
            <h6>Password</h6>
            <Input
              name="password"
              type="password"
              className={"registerInput"}
            ></Input>
          </div>
          <ArrowButton className={"bigBtnGreen"} arrowSize={24} />
        </Form>
      )}
    </Formik>
  );
}
