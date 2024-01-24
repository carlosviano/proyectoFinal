import { Form, Formik } from "formik";
import { initialRegisterValues } from "./utils/initialValues";
import { EditProfileFormSchema } from "./FormSchema";
import Input from "../ui/Input";
import ArrowButton from "../Buttons/ArrowButton/ArrowButton";
import { useLoginContext } from "../../contexts/LoginModeContext";
import { useEffect, useState } from "react";

export default function EditProfileForm() {
  const { authorization } = useLoginContext();
  const [changeUserInfo, setChangeUserInfo] = useState(false);

  const submitImage = (values, actions) => {
    let formdataImage = new FormData();
    formdataImage.append("file", values.file);
    fetch(`http://localhost:3000/user/update/image/${authorization.iduser}`, {
      method: "PATCH",
      body: formdataImage,
    }).then((response) => {
      if (response.status === 400) {
        alert("Error when updating image");
      } else if (response.status === 200) {
        alert("Image updated");
      }
    });
    actions.resetForm();
    setChangeUserInfo(!changeUserInfo);
  };
  useEffect(() => {}, [changeUserInfo]);

  return (
    <Formik initialValues={initialRegisterValues} onSubmit={submitImage}>
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
          <ArrowButton className={"smallBtnGreen"} />
        </Form>
      )}
    </Formik>
  );
}
