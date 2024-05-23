import { useState } from "react";
import "./navbar.scss";

export default function Navbar() {
  const [open, setOpen] = useState(false);
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
        <a href="/">Sign in</a>
        <a href="/" className="signup">
          Sign Up
        </a>
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
