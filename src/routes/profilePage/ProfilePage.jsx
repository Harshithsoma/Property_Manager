import { Link, useNavigate } from "react-router-dom";
import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import apiRequest from "../../lib/apiRequest";
import "./profilePage.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function ProfilePage() {
  const { updateUser, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1> User Information</h1>
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>

          <div className="info">
            <span className="avatar">
              Avatar:
              {/* <img src="https://media.licdn.com/dms/image/D5603AQElHUMIv_30oA/profile-displayphoto-shrink_200_200/0/1712200679498?e=1721865600&v=beta&t=kfnA2q4x4JARVnjfymlNiBi1mmJWV4dclcwUnwHsCzc"></img> */}
              <img src={currentUser.avatar || "/noavatar.jpg"} alt=""></img>
            </span>

            <span>
              Username : <b>{currentUser.username}</b>
            </span>

            <span>
              E-mail : <b>{currentUser.email}</b>
            </span>
            <button onClick={handleSubmit}>Logout</button>
          </div>
          <div className="title">
            <h1> My List</h1>
            <Link to="/add">
              <button>Create New Post</button>
            </Link>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
        </div>
      </div>

      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}
