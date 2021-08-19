import React from 'react';
import Header from './Header';

function Login() {
  return (
      <>
  <Header>
   <div className="header__text">Регистрация</div>
  </Header>
  <p className="login__title">Вход</p>
  <form  className="login__form">
          <input className="login__input" required id="Email" name="Email" type="text" placeholder="Email" />
          <input className="login__input" required id="password" name="password" type="password" placeholder="Пароль" />
          <div className="login__button-container">
          <button type="submit" className="login__link">Войти</button>
          </div>
  </form>
  </>
  );
}

export default Login;