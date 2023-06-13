import React, { useRef } from "react";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

export default function PhotoUpload() {
  const fileInputRef = useRef(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    // Do something with the file
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <InsertPhotoIcon onClick={handleIconClick} />
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileInputChange}
      />
    </>
  );
}
