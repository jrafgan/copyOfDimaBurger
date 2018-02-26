import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://test-burger-react.firebaseio.com/'
});

export default instance;