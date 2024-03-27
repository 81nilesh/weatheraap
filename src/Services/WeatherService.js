// api.js
import axios from 'axios';

const API_KEY = '8ff6b1c427824112b02b9f92f1485bbb';
const API_BASE_URL = 'https://api.weatherbit.io/v2.0/history/energy';

export const getWeatherDetails = async (city) => {
    const startDate = '2024-03-03';
    const endDate = '2024-03-10';
    const threshold = 63;
    const units = 'I';
    const tp = 'daily';
    console.log(city);
    const url = `${API_BASE_URL}?city=${city}&start_date=${startDate}&end_date=${endDate}&threshold=${threshold}&units=${units}&tp=${tp}&key=${API_KEY}`;

    try {
        const response = await axios.get(url);
        console.log('====================================');
        console.log(response.data);
        console.log('====================================');
        return response.data;
    } catch (error) {
        throw error;
    }
};
