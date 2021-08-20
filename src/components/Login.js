import React from 'react';
import { withRouter } from 'react-router-dom';
import * as Auth from './Auth.js';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);

  }

  changeEmail = (e) => {
    this.setState({
      email: e.target.value
    });    
  }

   changePassword = (e) => {
    this.setState({
      password: e.target.value
    }); 
  }
  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(e){
    e.preventDefault();
    // здесь нужно будет добавить логин
    if (!this.state.email || !this.state.password){
      return;
    }

    Auth.authorize(this.state.password, this.state.email)
    .then((data) => {
      if (data.token) {
        localStorage.setItem('jwt', data.token);
        console.log(this.state.email);
        this.props.handleEmail(this.state.email);
        this.setState({
          email: '',
          password: ''
        }, () => {

          this.props.handleLogin(data.token); // обновляем стейт внутри App.js
          this.props.history.push('/'); // и переадресуем пользователя! 
        })
      }
    })
      // нужно проверить, есть ли у данных jwt
      // сбросьте стейт, затем в колбэке установите
      // стейт loggedIn родительского App как true,
      // затем перенаправьте его в /diary
  
    .catch(err => console.log(err));
  }
  render(){
  return (
      <>
  <p className="login__title">Вход</p>
  <form  className="login__form" onSubmit={this.handleSubmit}>
          <input className="login__input" type="email" value={this.state.email} onChange={this.changeEmail} required id="Email" name="Email" type="text" placeholder="Email" />
          <input className="login__input" type="password" value={this.state.password} onChange={this.changePassword} required id="password" name="password" type="password" placeholder="Пароль" />
          <div className="login__button-container">
          <button type="submit" className="login__link">Войти</button>
          </div>
  </form>
  </>
  );
}
}

export default withRouter(Login);