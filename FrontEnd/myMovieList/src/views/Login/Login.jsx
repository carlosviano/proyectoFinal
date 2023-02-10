import LoginForm from "../../components/Forms/LoginForm";
import "./Login.css";
import img from "../../components/Banners/SmallBanner/Images/spiderman.jpg";

export default function Login() {
  return (
    <div className="mainLoginContainer">
      <div className="loginContentLeft">
        <LoginForm />
      </div>

      <div className="loginContentRight"></div>
    </div>
  );
}
