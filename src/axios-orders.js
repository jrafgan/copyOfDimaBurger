import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-project-js3.firebaseio.com/'
});

export default instance;
