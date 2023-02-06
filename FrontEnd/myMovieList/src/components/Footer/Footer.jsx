import "./Footer.css";
import { footerList } from "../../const/footerList";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerLeft">
        {footerList.map((footerListItem, index) => (
          <a key={index}>{footerListItem.label}</a>
        ))}
      </div>
      <div className="redes">
        <a href="#">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="#">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="#">
          <i className="bi bi-twitter"></i>
        </a>
        <a href="#">
          <i className="bi bi-whatsapp"></i>
        </a>
      </div>
    </footer>
  );
}
