import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {      
      email: '',
      password: ''
    }
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
         handleSubmit = (e) => {
            e.preventDefault();
            this.props.onRegister(this.state.password, this.state.email);
        }
        render(){
        return (
            <>
                <p className="login__title">Регистрация</p>
                <form className="login__form" onSubmit={this.handleSubmit}>
                    <input className="login__input" type="email" value={this.state.email} onChange={this.changeEmail} required id="Email" name="Email" placeholder="Email" />
                    <input className="login__input" type="password" value={this.state.password} onChange={this.changePassword} required id="password" name="password" placeholder="Пароль" />
                    <div className="login__button-container">
                        <button type="submit" className="login__link" onClick={this.props.onLoginClick} >Зарегистрироваться</button>
                    </div>
                    <Link to="sign-in" className="login__submit">Уже зарегистрированы? Войти</Link>
                </form>
            </>
        );
    }
  }

  export default withRouter(Register);
