import React, { useState } from "react";
import { storage, db } from "./firebase";
import firebase from "firebase"
export const ImageUpload = () => {
  const [caption, setCaption] = useState("");
  const [image, setImages] = useState(null);
  const [progres, setProgres] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImages(e.target.files[0]);
    }
  };

  const handleupload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_change",
      (snapshot) => {
        const progres = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgres(progres);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              timestamp:firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
    
            });
            setCaption("");
            setProgres(0);
            setImages(null)
          });
      }
    );
  };
  return (
    <div>
      {/* <progres value={progres} max="100" /> */}
      <input
        type="text"
        placeholder="Enter a caption"
       
        onChange={(e) => setCaption(e.target.value)}
      />
      <input type="file" onChange={handleChange} />
      <button  onClick={handleupload} className="btn btn-info">upload</button>
    </div>
  );
};
