import React from "react";
import './../pages/index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import InfoTooltip from './InfoTooltip';
import ProtectedRoute from './ProtectedRoute';
import * as Auth from './Auth.js';

import union from './../images/Union.png';
import union2 from './../images/Union2.svg';

import ImagePopup from './ImagePopup';
import api from "./../utils/api";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import { CurrentUserContext } from "./../contexts/CurrentUserContext";
import { Route, Switch, withRouter, useHistory } from 'react-router-dom';

function App() {

    // Хук, управляющий внутренним состоянием
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
    
    const [selectedCard, setSelectedCard] = React.useState({});
    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setСards] = React.useState([]);
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [myemail, setMyemail] = React.useState("");
    
    const [text, setText] = React.useState("");
    const [logo, setLogo] = React.useState("");

    const history = useHistory();

    React.useEffect(() => {
        api.getUserInfo()
            .then((user) => {
                setCurrentUser(user);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);


    React.useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                closeAllPopups();
            }
        };
        document.addEventListener('keydown', handleEsc);
        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, []);

    React.useEffect(() => {
        const closeByOverlay = (evt) => {
            if (evt.target.classList.contains('popup')) {
                closeAllPopups();
            }
        }
        document.addEventListener('click', (evt) => closeByOverlay(evt));

        return () => {
            document.removeEventListener('click', (evt) => closeByOverlay(evt));
        };
    }, []);


    React.useEffect(() => {
        api.getInitialCards()
            .then((res) => {
                setСards(res);
            })
            .catch(err => console.log(err))
    }, [])


    function handleUpdateUser(profile) {
        api.setUserInfo(profile.name, profile.about)
            .then((user) => {
                setCurrentUser(user);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function handleUpdateAvatar(url) {
        api.setUserAvatar(url.avatar)
            .then((user) => {
                let copy = Object.assign({}, currentUser);
                copy.avatar = user.avatar;
                setCurrentUser(copy);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function handleAddPlaceSubmit(card) {
        api.addCard(card.name, card.link)
            .then((newCard) => {
                setСards([newCard, ...cards]);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleLoginClick(value) {
        setIsInfoTooltipOpen(value);
    }


    
    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        //setIsInfoTooltipOpen(false);
        setSelectedCard({});
    }
    function closePopupNew() {
        setIsInfoTooltipOpen(false);
        history.push('/sign-in');
    }


    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            // Формируем новый массив на основе имеющегося, подставляя в него новую карточку и обновляем стейт
            setСards((state) => cards.map((c) => c._id === card._id ? newCard : c));
        });
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(() => {
                // Формируем новый массив на основе имеющегося, удаляя из него карточку card._id
                var newCards = cards.filter(function(c) {
                    return c._id !== card._id;
                });
                // Обновляем стейт
                setСards(newCards);
            })
            .catch((err) => {
                console.log(err);
            })
    }


    function handleLogin(calGoal) {
        setLoggedIn(true);
    }

    const onRegister = (password,email) => {
    Auth.register(password, email).
    then((res) => {
        if(res){ 
            setText ("Вы успешно зарегистрировались!" ); 
            setLogo(union);                              
            handleLoginClick(true);
        } 
      })
      .catch((err) => {
        console.log(err);
        setText ("Что-то пошло не так! Попробуйте ещё раз." );
        setLogo(union2);  
            handleLoginClick(true);    
    })
    }

    React.useEffect(() => {
        tokenCheck();       
    }, []);

    function tokenCheck () {
        // если у пользователя есть токен в localStorage,
        // эта функция проверит валидность токена
          const jwt = localStorage.getItem('jwt');
          console.log(jwt);
        if (jwt){
          // проверим токен
          Auth.getContent(jwt).then((res) => {
            if (res){
                      // авторизуем пользователя

              setLoggedIn(true);
              history.push("/");
        }
      } );
    }
}

function handleEmail (email){
    setMyemail(email);
}

    return ( <>
        <CurrentUserContext.Provider value = { currentUser } >
        <div className = "root-page" / >
        <div className = "root" >
        <Header email={myemail} / >
        <Switch >
        <Route path = "/sign-in" >
            <Login handleEmail={handleEmail} handleLogin={handleLogin} / >
        </Route>

        <Route path = "/sign-up" >
            <Register onRegister={onRegister} onLoginClick = {handleLoginClick}/ >
            <InfoTooltip isOpen = { isInfoTooltipOpen }
            onClose = { closePopupNew } 
            text = {text}  
            logo = {logo}      
         /> 
        </Route>

        <ProtectedRoute
          path="/"
          loggedIn={loggedIn}
          component={Main}
          cards = { cards }
          onCardLike = { handleCardLike }
          onCardDelete = { handleCardDelete }
          onCardClick = { handleCardClick }
          onEditAvatar = { handleEditAvatarClick }
          onEditProfile = { handleEditProfileClick }
          onAddPlace = { handleAddPlaceClick }
        />
        </Switch> 

        {loggedIn && <Footer />}

        </div> 
        <EditProfilePopup isOpen = { isEditProfilePopupOpen }
        onClose = { closeAllPopups }
        onUpdateUser = { handleUpdateUser }
        /> 
        <EditAvatarPopup isOpen = { isEditAvatarPopupOpen }
        onClose = { closeAllPopups }
        onUpdateAvatar = { handleUpdateAvatar }
        /> 
        <AddPlacePopup isOpen = { isAddPlacePopupOpen }
        onClose = { closeAllPopups }
        onAddPlace = { handleAddPlaceSubmit }
        /> 
        <ImagePopup card = { selectedCard }
        onClose = { closeAllPopups }
        /> 
        </CurrentUserContext.Provider> 
        </>
    );
}

export default withRouter(App);