import React from 'react';
import "./Collection1.css";
import ImageComponent from './ImageComponent';

const Collection1 = () => {
  return (
    <div id="container2" className="image-container">
      <div className="img-wrapper">
        <ImageComponent className="img1" imageUrl="src\assets\images\picture 1.png" alt="img1" />
        <ImageComponent className="img3" imageUrl="src\assets\images\picture 2.png" alt="img3" />
      </div>
      <ImageComponent className="img2" imageUrl="src\assets\images\picture 3.png" alt="img2" />
    </div>
  );
}

export default Collection1;
