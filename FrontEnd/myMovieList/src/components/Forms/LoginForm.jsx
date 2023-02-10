import { Form, Formik } from "formik";
import Input from "../ui/Input";
import { initialLoginValues } from "./utils/initialValues";
// import { useLoginContext } from "../../contexts/LoginModeContext";
import { LoginFormSchema } from "./FormSchema";
import ArrowButton from "../Buttons/ArrowButton/ArrowButton";
import { Link } from "react-router-dom";

export default function LoginForm() {
  //   const { logInAcc } = useLoginContext();
  const onSubmit = (values, actions) => {
    logInAcc(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialLoginValues}
      validationSchema={LoginFormSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="formLogin">
          <h5>Login</h5>
          <div className="inputContainer">
            <h6>Username</h6>
            <Input name="username" type="username" className="loginInput" />
          </div>
          <div className="inputContainer">
            <h6>Password</h6>
            <Input name="password" type="password" className="loginInput" />
          </div>
          <ArrowButton
            className={"bigBtnBlue"}
            disabled={isSubmitting}
            arrowSize={24}
            arrowFill="var(--white)"
          />
          <Link to={"/register"}>
            <h6>CREATE ACCOUNT</h6>
          </Link>
        </Form>
      )}
    </Formik>
  );
}
