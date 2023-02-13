import { Form, Formik } from "formik";
import { initialRegisterValues } from "./utils/initialValues";
import { EditProfileFormSchema } from "./FormSchema";
import { Link } from "react-router-dom";
import Input from "../ui/Input";
import ArrowButton from "../Buttons/ArrowButton/ArrowButton";

export default function EditProfileForm() {
  return (
    <Formik
      initialValues={initialRegisterValues}
      validationSchema={EditProfileFormSchema}
    >
      {({ isSubmitting }) => (
        <Form className="formRegister">
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
        </Form>
      )}
    </Formik>
  );
}
