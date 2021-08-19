import React from 'react';
import { CurrentUserContext } from "./../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
    `card__vector-delete ${isOwn ? 'card__vector-delete_type_activ' : ''}`
  );

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `card__vector-like ${isLiked ? 'card__vector_active' : ''}`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <article className="card" id={card._id}>
      <img className="card__image" src={card.link} alt={card.name} onClick={handleClick} />
      <div className="card__text">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-group">
          <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
          <label className="card__amount-like">{card.likes.length}</label>
        </div>
      </div>
      <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick} />
    </article>

  );
}

export default Card;