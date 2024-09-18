import axios from 'axios';
import Cookies from 'js-cookie';

// Initialize axios instance with base URL and headers
const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    timeout: 5000,
    headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
        'Content-Type': 'application/json',
    },
});

export default api;
