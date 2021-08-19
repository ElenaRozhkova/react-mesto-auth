import React from 'react';
import logo from './../images/Vector.svg'; // Путь к изображению внутри сборки

function Header(props) {
  return (
    <header className="header root__section">
      <img className="header__logo" src={logo} alt="Логотип" />
      {props.children}
    </header>
  );
}

export default Header;