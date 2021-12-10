import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'http://localhost:3000',
  // baseURL: 'https://jsonplaceholder.typicode.com/',
  withCredentials: true,
});

export default instance;
