import React from 'react';
import * as Auth from './Auth.js';
import { Link, history } from 'react-router-dom';
import { withRouter } from 'react-router-dom';



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
    //const [username, setUsername] = React.useState('');
    //const [email, setEmail] = React.useState("");
    //const [password, setPassword] = React.useState("");
    //const [confirmPassword, setConfirmPassword] = React.useState('');

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
            Auth.register(this.state.password, this.state.email).then((res) => {
              console.log("hallo", res);
                if(res){
               
                   this.props.history.push('/sign-in');
                   
                  /*this.setState({
                    message: ''
                  }, () => {
                    this.props.history.push('/login');
                  })
                } else {
                  this.setState({
                    message: 'Что-то пошло не так!'
                  })*/
                }
              });
        }
        render(){
        return (
            <>
                <p className="login__title">Регистрация</p>
                <form className="login__form" onSubmit={this.handleSubmit}>
                    <input className="login__input" type="email" value={this.state.email} onChange={this.changeEmail} required id="Email" name="Email" type="text" placeholder="Email" />
                    <input className="login__input" type="password" value={this.state.password} onChange={this.changePassword} required id="password" name="password" type="password" placeholder="Пароль" />
                    <div className="login__button-container">
                        <button type="submit" className="login__link" onClick={this.props.onLoginClick} >Зарегистрироваться</button>
                    </div>
                    <div className="login__submit">Уже зарегистрированы? Войти</div>
                </form>
            </>
        );
    }
  }

  export default withRouter(Register);
