import React from 'react';
import "./Container2.css";
import ImageComponent from './ImageComponent';

const Container2 = () => {
  return (
    <div className="image-container">
      <div className="img-wrapper">
        <ImageComponent className="img1" imageUrl="src/assets/picture 1.png" alt="img1" />
        <ImageComponent className="img3" imageUrl="src/assets/picture 2.png" alt="img3" />
      </div>
      <ImageComponent className="img2" imageUrl="src/assets/picture 3.png" alt="img2" />
    </div>
  );
}

export default Container2;