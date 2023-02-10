import { Form, Formik } from "formik";
import { initialRegisterValues } from "./utils/initialValues";
import { RegisterFormSchema } from "./FormSchema";
import { Link } from "react-router-dom";
import Input from "../ui/Input";
import ArrowButton from "../Buttons/ArrowButton/ArrowButton";

// const onSubmit = (values, actions) => {
//   fetch("http://localhost:3000/user", {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(values),
//   }).then((response) => {
//     console.log(response.status);;
//     if (response.status === 400) {
//       alert("Error al recibir el body");
//     } else if (response.status === 200) {
//       alert(`Usuario ${values.name} registrado correctamente`);
//       console.log(values)
//     } else if (response.status === 409) {
//       alert("Usuario ya registrado");
//     }
//   });
//   actions.resetForm();
// };

export default function RegisterForm() {
  return (
    <Formik
      initialValues={initialRegisterValues}
      validationSchema={RegisterFormSchema}
      // onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="formRegister">
          <h1>Create Account</h1>
          <div className="inputContainer">
            <h6>First Name</h6>
            <Input name="name" type="text" className={"registerInput"}></Input>
          </div>
          <div className="inputContainer">
            <h6>Last Name</h6>
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
              type="username"
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

          <ArrowButton
            disabled={isSubmitting}
            className={"bigBtnGreen"}
            arrowFill="var(--black)"
            arrowSize={24}
          />
          <Link to={"/login"}>
            <h6>ALREADY HAVE AN ACCOUNT? LOGIN</h6>
          </Link>
        </Form>
      )}
    </Formik>
  );
}
