import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png"></img>
          <span>Heaven Heights</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Agents</a>
        <a href="/">Contact</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img src="https://media.licdn.com/dms/image/D5603AQElHUMIv_30oA/profile-displayphoto-shrink_200_200/0/1712200679498?e=1721865600&v=beta&t=kfnA2q4x4JARVnjfymlNiBi1mmJWV4dclcwUnwHsCzc"></img>
            <span>Harshith</span>
            <Link to="/profile" className="profile">
              <div className="notification"> 3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign in</a>
            <a href="/" className="signup">
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
