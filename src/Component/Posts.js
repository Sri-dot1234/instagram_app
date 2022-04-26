import React from "react";
import "./Posts.css";
import Avatar from "@material-ui/core/Avatar";
function Posts({ postId, username, caption, imageUrl }) {
  //const [comments ,setComments]=useState([]);
  return (
    <div className="posts">
      <div className="post_header">
        <Avatar className="post_avatar" alt="Srivani" src="" />
        <h3>{username}</h3> <h6 className="del">delete</h6>
      </div>
      <img className="post_image" src={imageUrl} alt="img" />
      <h4 className="post_text">
        caption:
        <strong>{caption}</strong>
      </h4>
    </div>
  );
}

export default Posts;
