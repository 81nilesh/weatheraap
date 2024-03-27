import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Box, CircularProgress } from '@mui/material';
// import { getWeatherDetails } from '../services/weatherService';
import { getWeatherDetails } from '../Services/WeatherService';
import './css/weather.css'


function WeatherDetails() {
    const location = useLocation();
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            console.log('====================================');
            console.log('====================================');
            try {
                const city = new URLSearchParams(location.search);
                console.log(`city : ${city}`);

                const response = await getWeatherDetails(city);
                setWeather(response);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchData();
    }, [location.search]);

    return (
        <>
            <div id="back">
                <div className='blurr'></div>

                {loading ? (
                    <CircularProgress color="primary" />
                ) : (
                    <div className='weather-image-container'>
                        <div className='back-weather-img'>

                        </div>
                        <div className='content-weather-img'>
                            <div className='content-desc'>
                                
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </>
    );
}

export default WeatherDetails;
