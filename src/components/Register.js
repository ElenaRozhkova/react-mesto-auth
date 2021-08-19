import React from 'react';
import Header from './Header';

function Register (props) {
    function handleSubmit  (e)  {
        e.preventDefault();
    }
    console.log(props);
    
  return (
      <>
  <Header>
   <div className="header__text">Войти</div>
  </Header>
  <p className="login__title">Регистрация</p>
  <form  className="login__form" onSubmit={handleSubmit}>
          <input className="login__input" required id="Email" name="Email" type="text" placeholder="Email" />
          <input className="login__input" required id="password" name="password" type="password" placeholder="Пароль" />
          <div className="login__button-container">
          <button type="submit" className="login__link"  onClick={props.onLoginClick} >Зарегистрироваться</button>
          </div>
          <div className="login__submit">Уже зарегистрированы? Войти</div>          
  </form>
  </>
  );
}

export default Register ;