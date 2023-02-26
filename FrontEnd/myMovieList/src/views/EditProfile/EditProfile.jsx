import "./EditProfile.css";
import image from "./images/123.png";
import EditProfileImage from "../../components/Forms/EditProfileImage";
import { useEffect, useState } from "react";
import { useLoginContext } from "../../contexts/LoginModeContext";
import EditProfileInfo from "../../components/Forms/EditProfileInfo";

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
        <EditProfileImage />
        <EditProfileInfo />
      </div>
    </div>
  );
}
