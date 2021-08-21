import React from 'react';
import logo from './../images/Vector.svg'; // Путь к изображению внутри сборки
import { Link, Route, Switch} from 'react-router-dom';

function Header({email, onSignOut}) {

  return (
    <header className="header root__section">
      <img className="header__logo" src={logo} alt="Логотип" />
      <Switch >
      <Route path = "/sign-in"><Link to="/sign-up" className="header__text">Регистрация</Link></Route>
      <Route path = "/sign-up"><Link to="/sign-in" className="header__text">Войти</Link></Route> 
      <Route path = "/">
        <div className="header__elements">
        <div className="header__text">{email}</div>
        <div className="header__signout" onClick={onSignOut}>Выйти</div>
        </div>
      </Route> 
      </Switch >
    </header>
  );
}

export default Header;