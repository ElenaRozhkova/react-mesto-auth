class Api {
    constructor(options) {
        this._token = options.token;
        this._url = options.url;
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

    getInitialCards() {
        return fetch(`${this._url}/cards`, {
                headers: {
                    authorization: this._token
                }
            })
            .then(res => this._getResponseData(res))
    }


    getUserInfo () {
        return fetch(`${this._url}/users/me`, {
                headers: {
                    authorization: this._token
                }
            })
            .then(res => this._getResponseData(res));
    }

    setUserInfo(userName, userJob) {
        return fetch(`${this._url}/users/me`, {
                method: 'PATCH',
                headers: {
                    authorization: this._token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: userName,
                    about: userJob
                })
            })
            .then(res => this._getResponseData(res));

    }


    addCard(cardName, cardLink) {
        return fetch(`${this._url}/cards`, {
                method: 'POST',
                headers: {
                    authorization: this._token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: cardName,
                    link: cardLink
                })
            })
            .then(res => this._getResponseData(res))
    }


    changeLikeCardStatus(id, isLiked) {
        return fetch(`${this._url}/cards/likes/${id}`, {
                method: `${isLiked ? 'PUT' : 'DELETE'}`,
                headers: {
                    authorization: this._token
                }
            })
            .then(res => this._getResponseData(res))
    }


    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
                method: 'DELETE',
                headers: {
                    authorization: this._token
                }
            })
            .then(res => this._getResponseData(res))
    }

    setUserAvatar(url) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: url
            })
        }).then(res => this._getResponseData(res))

    }

}

 const api = new Api({
    url: `https://mesto.nomoreparties.co/v1/cohort-25`,
    token: 'e2f184c2-a2b5-47dc-b13c-5faef2aabe75'
});

export default api;