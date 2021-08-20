import React from 'react';
import logo from './../images/Vector.svg'; // Путь к изображению внутри сборки
import { Route, Switch} from 'react-router-dom';

function Header(props) {
  return (
    <header className="header root__section">
      <img className="header__logo" src={logo} alt="Логотип" />
      <Switch >
      <Route path = "/sign-in"><div className="header__text">Регистрация</div></Route> 
      <Route path = "/sign-up"><div className="header__text">Войти</div></Route> 
      <Route path = "/">
        <div className="header__elements">
        <div className="header__text">Email</div>
        <div className="header__text">Выйти</div>
        </div>
      </Route> 
      </Switch >
    </header>
  );
}

export default Header;