import "./EditProfile.css";
import image from "./images/123.png";
import EditProfileForm from "../../components/Forms/EditProfileForm";

export default function EditProfile() {
  return (
    <div className="editProfileMainContainer">
      <div className="editProfileHeader">
        <div className="editProfileHeaderText">
          <h1>MY PROFILE</h1>
          <p>Edit the parameters of your profile</p>
        </div>
      </div>
      <div className="editProfileContent">
        <div className="editProfileBody">
          <div className="editProfileBodyImage">
            <img src={image} />
          </div>
          <div className="editProfileBodyImageInfo">
            <div className="editProfileBodyImageInfoTitles">
              <p>Change profile picture</p>
              <p>The recommended size is 320x320px</p>
            </div>
            <div className="editProfileBodyImageInfoInput">
              <input type="file" />
            </div>
          </div>
        </div>
        <div className="editProfileFooter">
          <EditProfileForm />
        </div>
      </div>
    </div>
  );
}
