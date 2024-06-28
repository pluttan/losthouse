import './Mainpage.scss';
import React, { useEffect, useState } from 'react';
import Paralax from './Paralax/Paralax';
import CanvasWrapper from './Model/Model';
import Cards from './Cards/Cards';
import Navigation from './Navigation/Navigation';
import {Text1, Text2, Text3, Text4, Text5, Text6, Text7, Text8, Text9, TextModel, Img1, Img2, Img3, Img4} from './text&img/text&img';
import BezierCurve from './BezierCurve/BezierCurve';

function Mainpage() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    requestAnimationFrame(() => {
      setOffsetY(window.pageYOffset/1.2);
    });
    setOffsetY(window.pageYOffset/1.2);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="Mainpage">
        <Paralax offsetY={offsetY}/> 
        <Navigation/>
        <Cards offsetY={offsetY}/>
        <Img1 offsetY={offsetY}/> 
        <Img2 offsetY={offsetY}/> 
        <Img3 offsetY={offsetY}/> 
        <Img4 offsetY={offsetY}/> 
        <Text1 offsetY={offsetY}/> 
        <Text2 offsetY={offsetY}/> 
        <Text3 offsetY={offsetY}/> 
        <Text4 offsetY={offsetY}/> 
        <Text5 offsetY={offsetY}/> 
        <Text6 offsetY={offsetY}/> 
        <Text7 offsetY={offsetY}/> 
        <Text8 offsetY={offsetY}/> 
        <Text9 offsetY={offsetY}/> 
        <BezierCurve offsetY={offsetY}/>
        <CanvasWrapper offsetY={offsetY}/>
        <div style={{height: '1000vh'}}/>
    </div>
  );
}

export default Mainpage;
