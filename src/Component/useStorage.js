import { useEffect, useState } from "react";
import {storage , db , timestamp } from "./firebase";
const useStorage = (file) => {
  const [caption ,setCaption] = useState("");
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);
  const user = localStorage.getItem("login");
  useEffect(() => {
    const storageRef = storage.ref(file.name);
    const collection=db.collection("posts");
    storageRef.put(file).on(
      "state-changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt=timestamp;
        collection.add({
          imageUrl:url,
          username:user,
          createdAt:createdAt, 
          caption:caption
        })
        setUrl(url);
        setCaption(caption);
      }
    );
  }, [file]);
  return { progress, url, error ,caption };
};

export default useStorage;
