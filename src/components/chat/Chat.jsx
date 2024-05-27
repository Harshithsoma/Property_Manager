import { useState } from "react";
import "./chat.scss";

export default function Chat() {
  const [close, setClose] = useState(2);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img src="https://media.licdn.com/dms/image/D5603AQElHUMIv_30oA/profile-displayphoto-shrink_200_200/0/1712200679498?e=1721865600&v=beta&t=kfnA2q4x4JARVnjfymlNiBi1mmJWV4dclcwUnwHsCzc"></img>
          <span>Harshith</span>
          <p>First message to display</p>
        </div>
        <div className="message">
          <img src="https://media.licdn.com/dms/image/D5603AQElHUMIv_30oA/profile-displayphoto-shrink_200_200/0/1712200679498?e=1721865600&v=beta&t=kfnA2q4x4JARVnjfymlNiBi1mmJWV4dclcwUnwHsCzc"></img>
          <span>Harshith</span>
          <p>First message to display</p>
        </div>
        <div className="message">
          <img src="https://media.licdn.com/dms/image/D5603AQElHUMIv_30oA/profile-displayphoto-shrink_200_200/0/1712200679498?e=1721865600&v=beta&t=kfnA2q4x4JARVnjfymlNiBi1mmJWV4dclcwUnwHsCzc"></img>
          <span>Harshith</span>
          <p>First message to display</p>
        </div>
        <div className="message">
          <img src="https://media.licdn.com/dms/image/D5603AQElHUMIv_30oA/profile-displayphoto-shrink_200_200/0/1712200679498?e=1721865600&v=beta&t=kfnA2q4x4JARVnjfymlNiBi1mmJWV4dclcwUnwHsCzc"></img>
          <span>Harshith</span>
          <p>First message to display</p>
        </div>
        <div className="message">
          <img src="https://media.licdn.com/dms/image/D5603AQElHUMIv_30oA/profile-displayphoto-shrink_200_200/0/1712200679498?e=1721865600&v=beta&t=kfnA2q4x4JARVnjfymlNiBi1mmJWV4dclcwUnwHsCzc"></img>
          <span>Harshith</span>
          <p>First message to display</p>
        </div>
        <div className="message">
          <img src="https://media.licdn.com/dms/image/D5603AQElHUMIv_30oA/profile-displayphoto-shrink_200_200/0/1712200679498?e=1721865600&v=beta&t=kfnA2q4x4JARVnjfymlNiBi1mmJWV4dclcwUnwHsCzc"></img>
          <span>Harshith</span>
          <p>First message to display</p>
        </div>
        <div className="message">
          <img src="https://media.licdn.com/dms/image/D5603AQElHUMIv_30oA/profile-displayphoto-shrink_200_200/0/1712200679498?e=1721865600&v=beta&t=kfnA2q4x4JARVnjfymlNiBi1mmJWV4dclcwUnwHsCzc"></img>
          <span>Harshith</span>
          <p>First message to display</p>
        </div>
        <div className="message">
          <img src="https://media.licdn.com/dms/image/D5603AQElHUMIv_30oA/profile-displayphoto-shrink_200_200/0/1712200679498?e=1721865600&v=beta&t=kfnA2q4x4JARVnjfymlNiBi1mmJWV4dclcwUnwHsCzc"></img>
          <span>Harshith</span>
          <p>First message to display</p>
        </div>
        <div className="message">
          <img src="https://media.licdn.com/dms/image/D5603AQElHUMIv_30oA/profile-displayphoto-shrink_200_200/0/1712200679498?e=1721865600&v=beta&t=kfnA2q4x4JARVnjfymlNiBi1mmJWV4dclcwUnwHsCzc"></img>
          <span>Harshith</span>
          <p>First message to display</p>
        </div>
      </div>

      {close && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src="https://media.licdn.com/dms/image/D5603AQElHUMIv_30oA/profile-displayphoto-shrink_200_200/0/1712200679498?e=1721865600&v=beta&t=kfnA2q4x4JARVnjfymlNiBi1mmJWV4dclcwUnwHsCzc"></img>
              <span>Harshith</span>
            </div>
            <div className="close" onClick={() => setClose(null)}>
              X
            </div>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Message in Individual chat box </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Message in Individual chat box </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Message in Individual chat box </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Message in Individual chat box </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Message in Individual chat box </p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
