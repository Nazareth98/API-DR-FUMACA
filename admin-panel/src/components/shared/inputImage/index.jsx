import React, { useState } from "react";
import "./styles.scss";

const InputImage = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    const imageFiles = event.target.files;
    const imagesArray = Array.from(imageFiles);
    setSelectedImages(imagesArray);
  };

  return (
    <div className="image-upload-container">
      <label className="label">Adicione até 3 Fotos</label>
      <label className="custom-file-input">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
        <div className="images-container">
          {selectedImages.map((image, index) => (
            <div key={index} className="image-thumbnail">
              <img
                src={URL.createObjectURL(image)}
                alt={`Imagem ${index + 1}`}
                className="thumbnail"
              />
            </div>
          ))}
          {selectedImages.length < 3 && (
            <div className="custom-button">
              <span className="plus-icon">+</span>
            </div>
          )}
        </div>
      </label>
    </div>
  );
};

export default InputImage;
