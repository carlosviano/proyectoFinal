import { Outlet } from "react-router-dom";
import VerticalHeader from "../VerticalHeader/VerticalHeader";
import "./VerticalLayOut.css";

export default function VerticalLayout() {
  return (
    <div className="verticalLayOutContainer">
      <div className="verticalLayOutSideBar">
        <VerticalHeader />
      </div>
      <div className="verticalLayOutContent">
        <Outlet />
      </div>
    </div>
  );
}
