import axios from 'axios';

export default axios.create({
    baseUrl: 'https://api.openweathermap.org/data/2.5/'
});