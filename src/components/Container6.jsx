import React from 'react';
import './Container6.css';
import ImageComponent from './ImageComponent';

const Container6 = () => {
  return (
    <div id="container6" className='div6'>
      <div className="model">
        <ImageComponent imageUrl="src/assets/images/model.png" alt="img4" className="img11" />
      </div>
      <div className="text">
        <p className="heading">
          <span style={{ fontWeight: 100, fontFamily: "Karla" }}>TOP  20  TRENDS  FOR</span><br />
          <span style={{ position: "relative", top: "-30%" }}>SPRING/SUMMER</span>
        </p>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing Lorem, i<br/>
          Eaque nemo earum ad id quaerat consequaturdf adipis<br />quas excepturi ducimus!
          Aut quidem sed cumadipis <br /> ducimus omnis iusto. Consequuntur consectetur.
          <br /> ducimus omnis iusto. Consequuntur consectetur.
        </p>
        <button className="more">
          MORE
        </button>
      </div>
    </div>
  );
}

export default Container6;
