import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {

  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  const changeName = (e) => {
    setName(e.target.value);
  }

  const changeLink = (e) => {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onAddPlace({
      name,
      link,
    });
  }

  React.useEffect(
    () => {
      setName('');
      setLink('');
    },
    [isOpen]
  );


  return (
    <PopupWithForm name="add" title="Новое место" isOpen={isOpen} onClose={onClose} buttonText="Создать" onSubmit={handleSubmit}>
      <div className="form__container">
        <input value={name} onChange={changeName} type="text" className="popup__input popup__input_type_text" id="add" name="name" placeholder="Название" required />
        <span className="popup__input-error add-error"></span>
        <input value={link} onChange={changeLink} type="url" className="popup__input popup__input_type_link" id="url" name="link" placeholder="Ссылка на картинку" required />
        <span className="popup__input-error url-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;