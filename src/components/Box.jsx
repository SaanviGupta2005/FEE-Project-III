import React from 'react';
import './Box.css';

const Boxes = ({ season, textClass, boxClass }) => {
  return (
    <div className={boxClass}>
      <div className={season}>
        <p className={textClass}> {season.toUpperCase()} </p>
      </div>
    </div>
  );
};

const Box = () => {
  return (
    <div className="box">
      <Boxes season="spring" textClass="text" boxClass="box1" />
      <Boxes season="summer" textClass="text2" boxClass="box2" />
      <Boxes season="autumn" textClass="text3" boxClass="box3" />
      <Boxes season="winter" textClass="text4" boxClass="box4" />
    </div>
  );
};

export default Box;
