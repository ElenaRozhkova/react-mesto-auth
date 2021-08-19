import React from 'react';
import union from './../images/Union.png';

function InfoTooltip ({ isOpen, onClose}) {
  //const [name, setName] = React.useState('');
  //const [description, setDescription] = React.useState("");


  return (

    <div className={`popup  ${isOpen ? "popup_opened" : ""}`}>
    <div className={`popup__container`}>
    <form className="popup__form" >
          <fieldset className="popup__form-set">
            <button type="button" onClick={onClose} className="popup__close">
              <div className="popup__close-icon"></div>
            </button>
            <div className="popup__form-registered">
            <img className="popup__logo" src={union} alt="Логотип" />
            <div className="popup__registered">Вы успешно зарегистрировались!</div> 
            </div>          
          </fieldset>
        </form>
      
    </div>
  </div>

  
  );
}

export default InfoTooltip;