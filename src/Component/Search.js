import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import { db } from "./firebase";
const Search = () => {
  const [data, setData] = useState([]);
  const [value, setvalue] = useState("");
  useEffect(() => {
    const unsub = db
      .collection("posts")
    //   .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        let documents = [];
        snapshot.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setData(documents);
      });
    return () => unsub();
  }, []);
  return (
    <div>
        <form className="search-bar-form mt-3" >
        <input value={value} onChange={(e) => setvalue(e.target.value)} className="center-block" placeholder="search here ..." id="search-bar" />
</form>

      <div className="row mt-2">

{data
.filter((post)=>{
   return (post.username.includes(value))
  })
  .map((post) => (
              <div  className="col-md-4" style={{ padding: "5px" }}>
                <div
                  className="card"
                  style={{ height: "25rem", width: "22rem", padding: "3px" }}
                >
                  <h3 className="post_image1">
                    <Avatar className="post_avatar" alt="srivani" src="" />
                    {post.username}
                 
                  </h3>
                  <hr />
                  <div className="card-body">
                    <img src={post.imageUrl} alt="img" className="img_post" />
                    <h4 className="post_text">
                      {post.username}:<strong>{post.caption}</strong>
                    </h4>
                  </div>
                </div>
              </div>
            ))} 
      </div>
    </div>
  );
};

export default Search;
