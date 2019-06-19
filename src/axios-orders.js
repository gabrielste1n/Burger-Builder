import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-project-66d94.firebaseio.com/'
});

export default instance;