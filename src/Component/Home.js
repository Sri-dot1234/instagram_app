import React, { useEffect, useState } from "react";
import "./Posts";
import { db } from "./firebase";
import Posts from "./Posts";
import { ImageUpload } from "./ImageUpload";
import Pagination from "./Pagination";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  //const [search ,setSearch]=useState('');
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
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
 
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
      {/* <input type="text" placeholder="search here" 
      onChange={e=>setSearch(e.target.value)}  value={search} /> */}

      
        <div className="row">
         
           {currentPosts.map(({ id, post }) => (
              <div  className="col-md-4">
                <Posts
                 postId={id}
                  username={post.username}
                  caption={post.caption}
                  imageUrl={post.imageUrl}
                />
              </div>
            ))}
        </div>
       <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
        <ImageUpload />
        
      </div>
    </div>
  );
};
