import React, { useRef, useEffect, useState } from 'react';
import "./BezierCurve.scss";

const BezierCurve = ({ offsetY }) => {
    offsetY = offsetY/6-230;
    const ref = useRef(null);
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);
  const [visibleLength, setVisibleLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      const totalLength = pathRef.current.getTotalLength();
      setPathLength(totalLength);
    }
  }, []);

  useEffect(() => {
    if (pathLength > 0) {
      const length = pathLength * offsetY/1000+100; // количество видимой части кривой
      setVisibleLength(length);
    }
  }, [offsetY, pathLength]);

  return (
    <div ref={ref} className="svg-container" style={{ transform: `translateY(${-offsetY}px)` }}>
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 210 297"
        version="1.1"
        id="svg1"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsSvg="http://www.w3.org/2000/svg"
      >
        <defs id="defs1" />
        <g id="layer1" transform="translate(-25.399994,14.672001)">
          <path
            ref={pathRef}
            d="m 121.82576,-13.621827 c 0,0 11.21525,7.8711935 10.96037,17.9098217 -0.008,0.3212761 -2.59262,13.0693783 -19.00615,24.9715583 -12.87206,8.936917 -23.560824,9.593248 -28.403769,10.049561 -4.842944,0.456283 -24.469628,-0.684462 -34.920192,8.099326 -10.450576,8.783817 -15.154964,21.366569 -7.625192,32.598946 7.434882,11.090829 14.880631,19.51428 12.5964,27.792214 -3.452011,12.5099 -24.343005,20.94454 -25.362573,25.96385 -1.019564,5.01931 1.401909,10.609 9.940789,13.00458 8.538889,2.39558 12.489711,4.33486 17.460102,4.44894 4.970389,0.114 45.625675,3.99263 52.252875,12.8905 6.62716,8.89788 22.43047,32.8537 32.88105,32.05515 10.45056,-0.79852 22.55794,8.09935 25.23432,11.29346 2.67633,3.19411 10.70545,11.52158 10.96034,14.82979 0.25491,3.30817 4.97041,13.57496 -16.95031,20.53354 -21.92073,6.9586 -37.0868,1.25483 -37.0868,1.25483 0,0 -11.21525,-4.10669 -25.744083,0.4563 -14.528847,4.56302 -42.312068,16.99723 -53.144981,29.31736 -10.832911,12.32014 -2.803809,23.95581 -1.401903,25.32471 1.401903,1.36889 7.13698,9.6964 15.038626,13.11864"
            id="path2"
            strokeDasharray={`${visibleLength} ${pathLength}`}
            strokeDashoffset="0"
          />
          <ellipse id="path3" cx="132.59998" cy="5.2005043" rx="3.528466" ry="3.4750044" />
          <ellipse id="path3-8" cx="39.971867" cy="61.350395" rx="3.528466" ry="3.4750044" />
          <ellipse id="path3-7" cx="29.309956" cy="136.67734" rx="3.528466" ry="3.4750044" />
          <ellipse id="path3-5" cx="109.21412" cy="163.92941" rx="3.528466" ry="3.4750044" />
          <ellipse id="path3-82" cx="179.59329" cy="227.95859" rx="3.528466" ry="3.4750044" />
          <ellipse id="path3-83" cx="92.280792" cy="247.00859" rx="3.528466" ry="3.4750044" />
          <ellipse id="path3-2" cx="40.397617" cy="285.37317" rx="3.528466" ry="3.4750044" />
          <ellipse id="path3-52" cx="86.753998" cy="38.781502" rx="3.528466" ry="3.4750044" />
          <ellipse id="path3-1" cx="55.533169" cy="105.21156" rx="3.528466" ry="3.4750044" />
        </g>
      </svg>
    </div>
  );
};

export default BezierCurve;

