import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import "./layout.scss";
export default function Layout() {
  return (
    <div className="structure">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
