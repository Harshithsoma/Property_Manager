import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";

export default function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1> User Information</h1>
            <button>Update Profile</button>
          </div>

          <div className="info">
            <span className="avatar">
              Avatar:
              <img src="https://media.licdn.com/dms/image/D5603AQElHUMIv_30oA/profile-displayphoto-shrink_200_200/0/1712200679498?e=1721865600&v=beta&t=kfnA2q4x4JARVnjfymlNiBi1mmJWV4dclcwUnwHsCzc"></img>
            </span>

            <span>
              Username : <b>Harshith</b>
            </span>

            <span>
              E-mail : <b>somaharshith2000@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1> My List</h1>
            <button>Create new Post</button>
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
