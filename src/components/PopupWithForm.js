import React from 'react';

function PopupWithForm(props) {

  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
      <div className={`popup__container popup__container-${props.name}`}>
        <form className={`popup__form popup__form-${props.name}`} onSubmit={props.onSubmit}>
          <fieldset className="popup__form-set">
            <button type="button" onClick={props.onClose} className={`popup__close popup__close_type_${props.name}`}>
              <div className="popup__close-icon"></div>
            </button>
            <h2 className="popup__title">{props.title}</h2>
            {props.children}
            <button type="submit" className={`popup__button popup__button_type_${props.name}`}> {props.buttonText} </button>
          </fieldset>
        </form>
      </div>
    </div>

  );
}

export default PopupWithForm;