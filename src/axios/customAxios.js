import axios from 'axios';

const customAxios = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000,
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});

export default customAxios;