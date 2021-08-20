import React from 'react';
import logo from './../images/Vector.svg'; // Путь к изображению внутри сборки
import { Route, Switch} from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';

function Header(props) {
  const history = useHistory();

  function signOut(){
    localStorage.removeItem('jwt');
    history.push('/sign-in');
  }
  return (
    <header className="header root__section">
      <img className="header__logo" src={logo} alt="Логотип" />
      <Switch >
      <Route path = "/sign-in"><Link to="/sign-up" className="header__text">Регистрация</Link></Route>
      <Route path = "/sign-up"><Link to="/sign-in" className="header__text">Войти</Link></Route> 
      <Route path = "/">
        <div className="header__elements">
        <div className="header__text">{props.email}</div>
        <div className="header__text" onClick={signOut}>Выйти</div>
        </div>
      </Route> 
      </Switch >
    </header>
  );
}

export default Header;