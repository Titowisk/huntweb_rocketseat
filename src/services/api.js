import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/api',
});
// http://rocketseat-node.herokuapp.com/api
export default api;
