import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from "./../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState("");

  const changeName = (e) => {
    setName(e.target.value);
  }

  const changeDescription = (e) => {
    setDescription(e.target.value);
  }

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isOpen} onClose={onClose} buttonText="Сохранить" onSubmit={handleSubmit}>
      <div className="form__container">
        <input type="text" value={name || ''} onChange={changeName} className="popup__input popup__input_type_name" id="name" name="nameInput" placeholder="Имя" required />
        <span className="popup__input-error name-error"></span>
        <input type="text" value={description || ''} onChange={changeDescription} className="popup__input popup__input_type_job" id="job" name="jobInput" placeholder="О себе" required />
        <span className="popup__input-error job-error"></span>
      </div>
    </PopupWithForm>

  );
}

export default EditProfilePopup;