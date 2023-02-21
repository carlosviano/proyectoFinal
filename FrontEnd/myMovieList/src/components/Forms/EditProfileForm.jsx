import { Form, Formik } from "formik";
import { initialRegisterValues } from "./utils/initialValues";
import { EditProfileFormSchema } from "./FormSchema";
import Input from "../ui/Input";
import ArrowButton from "../Buttons/ArrowButton/ArrowButton";
import { useLoginContext } from "../../contexts/LoginModeContext";

export default function EditProfileForm() {
  const { authorization } = useLoginContext();

  const submitImage = (values, actions) => {
    let formdataInfo = new FormData();
    formdataInfo.append("file", values.file);
    formdataInfo.append("name", values.name);
    formdataInfo.append("surname", values.surname);
    formdataInfo.append("username", values.username);
    fetch(`http://localhost:3000/user/update/image/${authorization.iduser}`, {
      method: "PATCH",
      body: formdataInfo,
    }).then((response) => {
      console.log(response.status);
      if (response.status === 400) {
        alert("Error when updating image");
      } else if (response.status === 200) {
        alert("Image updated");
      }
    });
    actions.resetForm();
    console.log(values.name);
  };

  return (
    <Formik
      initialValues={initialRegisterValues}
      validationSchema={EditProfileFormSchema}
      onSubmit={submitImage}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Form className="formRegister">
          <div className="inputContainer">
            <h6>Profile picture</h6>
            <p>The recommended size is 320x320px</p>
            <Input
              name="file"
              type="file"
              className={"registerInput"}
              placeholder={authorization.name}
              value={undefined}
              onChange={(event) => {
                setFieldValue("file", event.target.files[0]);
              }}
            ></Input>
          </div>
          <div className="inputContainer">
            <h6>First Name</h6>
            <Input
              name="name"
              type="text"
              className={"registerInput"}
              placeholder={authorization.name}
            ></Input>
          </div>
          <div className="inputContainer">
            <h6>Last Name</h6>
            <Input
              name="surname"
              type="text"
              className={"registerInput"}
              placeholder={authorization.surname}
            ></Input>
          </div>
          <div className="inputContainer">
            <h6>Username</h6>
            <Input
              name="username"
              type="text"
              className={"registerInput"}
              placeholder={authorization.username}
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
