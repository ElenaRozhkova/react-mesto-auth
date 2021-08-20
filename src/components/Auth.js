export const BASE_URL = 'https://auth.nomoreparties.co';

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
  .then((result) => {
    if (result.ok) {
      return result.json();
    } else return Promise.reject(`Что-то пошло не так: ${result.status}`);
  });
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
  .then((response => response.json()))
  .then((data) => {
    if (data.token){
      localStorage.setItem('jwt', data.token);
      return data;
    } 
  })
  .catch(err => console.log(err))
};

export const getContent = (jwt) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    "Authorization" : `Bearer ${jwt}`
    }})
    .then(res => res.json())
    .then(data => data)
  } 



