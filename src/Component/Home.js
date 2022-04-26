import React, { useEffect, useState } from "react";
import "./Posts";
import { db } from "./firebase";
import Posts from "./Posts";
import { ImageUpload } from "./ImageUpload";
export const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <div className="contanier mt-1">
      <p
        className=" text-light btn btn-secondary mr-5"
        id="dsd"
        onClick={logout}
      >
        Logout
      </p>
      <div className="container ">
        <div className="row">
          {posts.map(({ id, post }) => (
            <div className="col-md-4">
              <Posts
                key={id}
                postId={id}
                username={post.username}
                caption={post.caption}
                imageUrl={post.imageUrl}
              />
            </div>
          ))}
        </div>
        <ImageUpload />
      </div>
    </div>
  );
};
