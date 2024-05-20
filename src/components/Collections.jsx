import React from 'react';
import "./Collections.css";
import ImageComponent from './ImageComponent';

const Collections = () => {
  return (
    <>
      <div id="container2" className="image-container">
        <div className="img-wrapper">
          <ImageComponent className="img1" imageUrl="src\assets\images\picture 1.png" alt="img1" />
          <ImageComponent className="img3" imageUrl="src\assets\images\picture 2.png" alt="img3" />
        </div>
        <ImageComponent className="img2" imageUrl="src\assets\images\picture 3.png" alt="img2" />
      </div>
      <div className="img-wrapper2">
        <ImageComponent imageUrl="src/assets/images/picture 4.png" alt="img4" className="img4" />
        <ImageComponent imageUrl="src/assets/images/picture 5.png" alt="img5" className="img5" />
        <ImageComponent imageUrl="src/assets/images/picture 6.png" alt="img6" className="img6" />
      </div>
      <div className="img-wrapper3">
        <ImageComponent className="img7" imageUrl="src\assets\images\picture 7.png" alt="img7" />
        <ImageComponent className="img8" imageUrl="src\assets\images\picture 8.png" alt="img8" />
        <ImageComponent className="img9" imageUrl="src\assets\images\picture 9.png" alt="img9" />
        <ImageComponent className="img10" imageUrl="src\assets\images\picture 10.png" alt="img10" />
      </div>
      <div className="box5">
        <button>LOAD MORE CLOTHES</button>
      </div>
    </>
  );
}

export default Collections;
