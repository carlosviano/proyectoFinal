import RegisterForm from "../../components/Forms/RegisterForm";
import "./Register.css";

export default function Register() {
  return (
    <div className="mainRegisterContainer">
      <div className="registerContentLeft"></div>
      <div className="registerContentRight">
        <h1>Create Account</h1>
        <RegisterForm />
      </div>
    </div>
  );
}
