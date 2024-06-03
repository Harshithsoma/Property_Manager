import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.jpeg"></img>
          <span>Heaven Heights</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Agents</a>
        <a href="/">Contact</a>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.jpg"} alt=""></img>
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              <div className="notification"> 3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/login">Sign in</a>
            <a href="/register" className="signup">
              Sign Up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img src="./menu.png" onClick={() => setOpen(!open)}></img>
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Agents</a>
          <a href="/">Contact</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}
