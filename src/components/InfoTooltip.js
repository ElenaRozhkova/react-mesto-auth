import React from 'react';

function InfoTooltip ({ isOpen, onClose, text, logo}) {

  return (
    <div className={`popup  ${isOpen ? "popup_opened" : ""}`}>
    <div className={`popup__container`}>
    <div className="popup__form" >
          <fieldset className="popup__form-set">
            <button type="button" onClick={onClose} className="popup__close">
              <div className="popup__close-icon"></div>
            </button>
            <div className="popup__form-registered">
            <img className="popup__logo" src={logo} alt="Логотип" />
            <div className="popup__registered">{text}</div> 
            </div>          
          </fieldset>
    </div>
      
    </div>
  </div>

  
  );
}

export default InfoTooltip;