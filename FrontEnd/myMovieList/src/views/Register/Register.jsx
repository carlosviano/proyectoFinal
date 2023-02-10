import RegisterForm from "../../components/Forms/RegisterForm";
import "./Register.css";

export default function Register() {
  return (
    <div className="mainRegisterContainer">
      <div className="registerContentLeft"></div>
      <div className="registerContentRight">
        <RegisterForm />
      </div>
    </div>
  );
}
