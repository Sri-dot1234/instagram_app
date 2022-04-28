import React, { useEffect, useState } from "react";
import "./Posts.css";
import firebase from "firebase"
import { db } from "./firebase";
import Avatar from "@material-ui/core/Avatar";
function Posts({ postId, username, caption, imageUrl }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  
  const user = localStorage.getItem("login");
  useEffect(() => {
    let unsubscribe= db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy('timestamp','desc')
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    
    return () => {
      unsubscribe();
    };
  }, [postId]);
  const postComment = (event) => {
      event.preventDefalut();
      db.collection("posts").doc(postId)
      .collection("comments").add({
       text:comment,
       username:user.displayName,
       timestamp:firebase.firestore.FieldValue.serverTimestamp(),  
      })
      setComment('');
  };
  const deleteuser=(Id)=>{
  //  console.log(Id)
//    db.collection("posts").doc(Id).delete();
}
  return (
      <div>

    <div className="posts">
       
      <div className="post_header">
        <Avatar
          className="post_avatar"
          alt="srivani"
          src=""
        />
        <h3>{username}</h3> <h6 className="float-right del" onClick={deleteuser(postId)}>delete</h6>
      </div>
      <img className="post_image" src={imageUrl} alt="img" />
      <h4 className="post_text">
        {username}: 
        <strong>{caption}</strong>
      </h4>
      <div className="post_comments">
         
        {comments.map((com) => (
          
        <p><b>{com.text}</b></p>
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
        <button
          className="post_button"
         
          type="submit"
          onClick={postComment}
        >
          post
        </button>
      </form> )}
    </div>
    </div>
  );
}

export default Posts;
