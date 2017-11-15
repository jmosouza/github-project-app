import axios from 'axios'

export default function () {
  axios.defaults.baseURL = 'https://api.github.com'
  axios.defaults.headers.common['Accept'] = 'application/json, application/vnd.github.inertia-preview+json'
}