import { Form, Formik } from "formik";
import { initialRegisterValues } from "./utils/initialValues";
import { RegisterFormSchema } from "./FormSchema";
import { Link, useNavigate } from "react-router-dom";
import Input from "../ui/Input";
import ArrowButton from "../Buttons/ArrowButton/ArrowButton";
import toast, { Toaster } from "react-hot-toast";

export default function RegisterForm() {
  const navigate = useNavigate();

  const onSubmit = (values, actions) => {
    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((response) => {
      if (response.status === 400) {
        deniedAlert();
      } else if (response.status === 200) {
        sucessfulAlert();
        navigate("/login");
      } else if (response.status === 409) {
        userRepeatAlert();
      }
    });
    actions.resetForm();
  };

  const sucessfulAlert = () =>
    toast.success(<p>Registered correctly</p>, {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  const deniedAlert = () =>
    toast.error(<p>Error when trying to register account</p>, {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  const userRepeatAlert = () =>
    toast.error(<p>Account already registered</p>, {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  return (
    <>
      <Toaster />
      <Formik
        initialValues={initialRegisterValues}
        validationSchema={RegisterFormSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="formRegister">
            <div className="inputContainer">
              <h6>First Name</h6>
              <Input
                name="name"
                type="text"
                className={"registerInput"}
              ></Input>
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
    </>
  );
}
