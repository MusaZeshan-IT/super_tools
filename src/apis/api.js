import axios from 'axios';
import Cookies from 'js-cookie';

// Initialize axios instance with base URL and headers
const api = axios.create({
    baseURL: '/api/',
    timeout: 10000,
    headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
        'Content-Type': 'application/json',
    },
});

export default api;
