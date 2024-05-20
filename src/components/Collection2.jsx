import React from 'react';
import "./Collection2.css";
import ImageComponent from './ImageComponent';

const Collection2 = () => {
    return (
        <div className="img-wrapper2">
            <ImageComponent imageUrl="src/assets/images/picture 4.png" alt="img4" className="img4" />
            <ImageComponent imageUrl="src/assets/images/picture 5.png" alt="img5" className="img5" />
            <ImageComponent imageUrl="src/assets/images/picture 6.png" alt="img6" className="img6" />
        </div>
    )
}

export default Collection2;
