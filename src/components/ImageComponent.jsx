import React from 'react';

const ImageComponent = ({ className, imageUrl, alt }) => {
    return (
      <div className='img-container'>
            <img src={imageUrl} alt={alt} className={className} />
      </div>
    
  );
}

export default ImageComponent;
