import React from 'react';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
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

  handleSubmit(e){
    e.preventDefault();
    // здесь нужно будет добавить логин
    if (!this.state.email || !this.state.password){
      return;
    }
    this.props.onLogin(this.state.password, this.state.email);

  }
  render(){
  return (
      <>
  <p className="login__title">Вход</p>
  <form  className="login__form" onSubmit={this.handleSubmit}>
          <input className="login__input" type="email" value={this.state.email} onChange={this.changeEmail} required id="Email" name="Email" placeholder="Email" />
          <input className="login__input" type="password" value={this.state.password} onChange={this.changePassword} required id="password" name="password" placeholder="Пароль" />
          <div className="login__button-container">
          <button type="submit" className="login__link">Войти</button>
          </div>
  </form>
  </>
  );
}
}

export default withRouter(Login);