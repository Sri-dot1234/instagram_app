import React, { useEffect, useState } from "react";
import "./Posts.css";
import { db, timestamp } from "./firebase";
import Avatar from "@material-ui/core/Avatar";
function Posts({ postId, username, createdAt, imageUrl }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const user = localStorage.getItem("login");
  useEffect(() => {
    let unsubscribe = db
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setComments(snapshot.docs.map((doc) => doc.data()));
      });
    return () => {
      unsubscribe();
    };
  }, []);
  const postComment = (event) => {
    if (postId) {
      const createdAt = timestamp;
      event.preventDefalut();
      db.collection("posts").doc(postId).collection("comments").add({
        text: comment,
        username: user,
        createdAt: createdAt,
      });
    }
    setComment("");
  };
  const deleteuser = (Id) => {
    console.log(Id);
    //  db.collection("posts").doc(Id).delete();
  };
  return (
    <div>
      <div className="posts">
        <div className="post_header">
          <Avatar className="post_avatar" alt="srivani" src="" />
          <h3>{username}</h3>{" "}
          <h6 className="float-right del" onClick={deleteuser(postId)}>
            delete
          </h6>
        </div>
        <img className="post_image" src={imageUrl} alt="img" />
        <h4 className="post_text">
          {username}<strong>{createdAt}</strong>
        </h4>
        <div className="post_comments">
          {comments.map((com) => (
            <p>
              <b>{com.text}</b>
            </p>
          ))}
        </div>
        {user && (
          <form className="post_commentBox">
            <input
              className="post_input"
              type="text"
              placeholder="Add a comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button className="post_button" type="submit" onClick={postComment}>
              post
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Posts;
