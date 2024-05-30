import SearchBar from "../../components/searchBar/SearchBar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import "./home.scss";

export default function Home() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            This is the paragraph tag for my intro. replace this!!
          </h1>
          <p className="description">
            Description for my application , replace this as well after the
            application
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of exp</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>awards</h2>
            </div>
            <div className="box">
              <h1>1000+</h1>
              <h2>appreciations</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png"></img>
      </div>
    </div>
  );
}
