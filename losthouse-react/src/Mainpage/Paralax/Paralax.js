import React, { useEffect, useState } from 'react';
import "./Paralax.scss";

const Paralax = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    requestAnimationFrame(() => {
      setOffsetY(window.pageYOffset/1.2);
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const k = 200;

  const getParallaxStyle = (factor, limit) => {
    return { transform: `translateY(${offsetY > limit ? k : offsetY * factor}px)` };
  };

  const styles = [
    getParallaxStyle(0.4, k / 0.4),
    getParallaxStyle(0.3, k / 0.3),
    getParallaxStyle(0.2, k / 0.2),
    getParallaxStyle(0.09, k / 0.09),
  ];

  return (
    <div className="parallax-container">
      <div className="parallax-content">
        {[5, 4, 2, 1].map((part, index) => (
          <img
            key={part}
            src={`/img/mainbg/${part}.png`}
            alt={`Part ${part}`}
            className={`parallax-image part-${index}`}
            style={styles[index]}
          />
        ))}
        <div className="gradient-overlay" />
      </div>
      <div
        className={`parallax-title ${offsetY > 800 ? 'fixed' : ''}`}
        style={{ transform: `translateY(${offsetY > 800 ? 0 : offsetY * 0.8}px)` }}
      >
        <h1>
         Lost House
        </h1>
        <h3>Место, где хочется жить</h3>
      </div>
    </div>
  );
};

export default Paralax;

