import { Link } from "react-router-dom";
import "./Header.css";
import { rightMenu } from "../../const/rightMenu";
import { leftMenu } from "../../const/leftMenu";
import { rightMenuLoggedIn } from "../../const/rightMenuLoggedIn";
import Button from "../Button/Button";

export default function Header() {
  return (
    <div className="MenuContainer">
      <div className="leftMenu">
        {leftMenu.map((leftMenuItem, index) => (
          <h3
            href={leftMenuItem.path}
            className={leftMenuItem.className}
            key={index}
          >
            {leftMenuItem.label}
          </h3>
        ))}
        <Button className={"btn"}/>
      </div>
      <div className="rightMenu">
        {rightMenu.map((rightMenuItem, index) => (
          <a
            href={rightMenuItem.path}
            className={rightMenuItem.className}
            key={index}
          >
            {rightMenuItem.label}
          </a>
        ))}
      </div>
    </div>
  );
}
