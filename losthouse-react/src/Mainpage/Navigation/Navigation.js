import React, { useEffect, useState } from 'react';
import "./Navigation.scss";

const Navigation = () => {
const [visible, setVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  const handleMouseEnter = () => {
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  useEffect(() => {
    let timer;
    if (visible) {
      timer = setTimeout(() => setTextVisible(true), 120); // Match this duration with CSS transition
    } else {
      setTextVisible(false);
    }

    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <div
      className={`allcard nav-container ${visible ? 'visible' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!visible && (
        <div className="hover-text">
          <span>Наведите, чтобы открыть меню</span>
        </div>
      )}
      <div className="nav-menu">
        {textVisible && (
          <>
            <div className="nav-title">Lost House</div>
            <a href="#installation">
              <i class="fa-solid fa-folder"></i> Главная
            </a>
            <a href="#dashboard">
              <i class="fa-solid fa-arrow-right-to-bracket"></i> Вход
            </a>
            <a href="#default">
              <i class="fa-solid fa-address-card"></i> Регистрация
            </a>
            <a href="#analytic">
              <i class="fa-solid fa-house"></i> Каталог домов
            </a>
            <a href="#analytic">
              <i class="fa-solid fa-map-location-dot"></i> Мы на карте
            </a>
            <a href="#saas">
              <i class="fa-solid fa-phone"></i> Контакты
            </a>  
          </>
        )}
      </div>
    </div>
  );
};

export default Navigation;

