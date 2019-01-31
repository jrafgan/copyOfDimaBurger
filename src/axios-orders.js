import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-tsyganov.firebaseio.com/'
});

export default instance;
