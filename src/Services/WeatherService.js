// api.js
import axios from 'axios';

const API_KEY = '8ff6b1c427824112b02b9f92f1485bbb';
const API_BASE_URL = 'https://api.weatherbit.io/v2.0/history/energy';

export const getWeatherDetails = async (city) => {

    // Get current date
    const currentDate = new Date();

    // Format the current date to 'YYYY-MM-DD' format
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    // Calculate start date by subtracting 7 days from the current date
    const startDate = new Date(currentDate);
    startDate.setDate(startDate.getDate() - 7);
    const formattedStartDate = `${startDate.getFullYear()}-${String(startDate.getMonth() + 1).padStart(2, '0')}-${String(startDate.getDate()).padStart(2, '0')}`;

    // Convert current date to 'YYYY-MM-DD' format
    const endDate = formattedDate;

    console.log("Start Date:", formattedStartDate);
    console.log("End Date:", endDate);


    const threshold = 63;
    const units = 'I';
    const tp = 'daily';
    console.log(city);
    const url = `${API_BASE_URL}?city=${city}&start_date=${formattedStartDate}&end_date=${endDate}&threshold=${threshold}&units=${units}&tp=${tp}&key=${API_KEY}`;

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
