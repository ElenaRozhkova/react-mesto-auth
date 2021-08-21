import React from 'react';
import avatar from "./../images/avataricon.svg";
import Card from './Card';
import { CurrentUserContext } from "./../contexts/CurrentUserContext";
import Footer from './Footer';


function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);
    return (
        <>
        <main className="content">
            <section className="profile root__section">
                <div className="profile__avatar-info">
                    <div className="profile__change-avatar">
                        <div className="profile__avatar" style={{ backgroundImage: `url(${currentUser.avatar})` }} />
                        <img onClick={props.onEditAvatar} className="profile__edit-icon" src={avatar} alt="Редактировать" />
                    </div>
                    <div className="profile__info">
                        <div className="profile__info-name">
                            <h1 className="profile__name">{currentUser.name}</h1>
                            <button onClick={props.onEditProfile} type="button" className="profile__edit-button" aria-label="Редактировать">
                            </button>
                        </div>
                        <p className="profile__job">{currentUser.about}</p>
                    </div>
                </div>
                <button type="button" onClick={props.onAddPlace} className="profile__add-button" aria-label="Добавить">
                </button>
            </section>

            <section className="cards root__section" id="cards">
                {props.cards.map((card, i) => (
                    <Card onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} key={card._id} card={card} onCardClick={props.onCardClick} />
                ))}
            </section>
        </main>
        <Footer />
        </>

    );
}

export default Main;