import "./EditProfile.css";
import image from "./images/123.png";
import EditProfileForm from "../../components/Forms/EditProfileForm";
import { useEffect, useState } from "react";
import { useLoginContext } from "../../contexts/LoginModeContext";

export default function EditProfile() {
  return (
    <div className="editProfileMainContainer">
      <div className="editProfileHeader">
        <div className="editProfileHeaderText">
          <h1>MY PROFILE</h1>
          <p>Edit the parameters of your profile</p>
        </div>
      </div>
      <div className="editProfileFooter">
        <EditProfileForm />
      </div>
    </div>
  );
}
