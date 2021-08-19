import React from 'react';
import logo from './../images/Vector.svg'; // Путь к изображению внутри сборки

function Header() {
  return (
    <header className="header root__section">
      <img className="header__logo" src={logo} alt="Логотип" />
    </header>
  );
}

export default Header;