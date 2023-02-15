import LoginForm from "../../components/Forms/LoginForm";
import "./Login.css";
import { useLoginContext } from "../../contexts/LoginModeContext";

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
