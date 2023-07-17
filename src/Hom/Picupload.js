import React, { useState } from 'react';
import './Picupload.css'

function ProfilePictureUpload() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div className="profile-picture-upload">
      <div className="image-preview">
        {selectedImage ? (
          <img src={selectedImage} alt="Profile" />
        ) : (
          <div className="placeholder">Select an Image</div>
        )}
      </div>
      <div className="upload-button">
        <label htmlFor="profile-image">Edit</label>
        <input
          type="file"
          id="profile-image"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
}

export default ProfilePictureUpload;
