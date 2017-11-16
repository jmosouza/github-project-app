import axios from 'axios';

export function configureAxios() {
  axios.defaults.baseURL = 'https://api.github.com';
  axios.defaults.headers.common.Accept = 'application/json, application/vnd.github.inertia-preview+json';
}

export function setCredentials({ username, password }) {
  axios.defaults.auth = { username, password };
}
