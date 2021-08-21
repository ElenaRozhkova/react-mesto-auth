export const BASE_URL = 'https://auth.nomoreparties.co';

const getResponseData=(res)=>{
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
}
return res.json();
}

export const register = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "password": password,
      "email": email
      })
  })
  .then(res => getResponseData(res));
};

export const authorize = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "password": password,
      "email": email
      })
  })
  .then(res => getResponseData(res));
};

export const getContent = (jwt) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    "Authorization" : `Bearer ${jwt}`
    }})
    .then(res => getResponseData(res));
  };



