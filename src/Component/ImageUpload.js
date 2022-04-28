import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
export const ImageUpload = () => {
  const [caption ,setCaption] = useState("");
  const [file, setFile] = useState(null);
  const [error ,setError]=useState(null)
  const types=['image/png' ,'image/jpeg' ,'image/jpg']

  const handleChange = (e) => {
  
    if (e.target.files[0] && types.includes(e.target.files[0].type)) {
      setFile(e.target.files[0]);
      setError('');
    }else{
      setFile(null)
      setError('please select an image file');
    }
  };
return (
    <div>
     
      <input
        type="text"
        placeholder="Enter a caption"
       
        onChange={(e) => setCaption(e.target.value)}
      />
      <input type="file" onChange={handleChange} />
    <div className="output">
        {error && <div className="error">{error}
      </div>}
      {file && <div  >{file.name}</div>}
      {file && <ProgressBar file={file}  setfile={setFile}   caption={caption} />}
    </div>
    </div>
  );
};
