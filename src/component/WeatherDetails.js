import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Box, CircularProgress } from '@mui/material';
import { getWeatherDetails } from '../Services/WeatherService';
import './css/weather.css'
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

// Function to get current time in 12-hour format
function getCurrentTime() {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours) as 12 AM
    // Add leading zero to minutes if necessary
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return `${hours}:${minutes} ${period}`;
}

// WeatherDetails component
function WeatherDetails() {
    const location = useLocation();
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentTime, setCurrentTime] = useState(getCurrentTime()); // Initialize with current time

    // Fetch weather data based on location
    useEffect(() => {
        const fetchData = async () => {
            try {
                const city = new URLSearchParams(location.search);

                const response = await getWeatherDetails(city);
                setWeather(response);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchData();
    }, [location.search]);

    // Update current time every minute
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(getCurrentTime());
        }, 60000); // 60000 milliseconds = 1 minute

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <>
            <div id="back">
                <div className='blurr'></div>

                {loading ? (
                    <CircularProgress color="primary" />
                ) : (
                    <div className='weather-image-container'>
                        <div className='back-weather-img'>
                            <div className='top-left'>
                                <p>Buch<span>arest, RO</span></p>
                            </div>
                            <div className='top-right'>
                                <LocationOnOutlinedIcon />
                                <p>{weather.city_name} {weather.country_code} <br /> {currentTime}</p>
                            </div>
                            <div className='right-bottom'>
                                <p>LATEST LOCATION    <MapOutlinedIcon /></p>
                            </div>
                            <div className='bottom-div'>
                                <div className='text'>
                                    <p>  <WbSunnyOutlinedIcon /> WEATHER</p>
                                </div>
                                <div className='text1'>
                                    <p> <CelebrationOutlinedIcon />NEWS & EVENTS</p>
                                </div>
                                <div className='text2'>
                                    <p> <PermMediaOutlinedIcon />GALARY(30)</p>
                                </div>
                            </div>
                        </div>
                        <div className='content-weather-img'>
                            <div className='blurr2'></div>
                            <div className='content-desc'>
                                <div className='center'>
                                    <div className='cen'>
                                        <span>{weather.data[0].dewpt} <sup>o</sup></span>
                                        <div className='day'>MONDAY 27th</div>
                                    </div>
                                    <div className='img-cen'>
                                        <div className='img-container'>
                                            <ThunderstormOutlinedIcon />
                                            <p>4 kmph /{weather.data[0].dewpt} <sup>o</sup></p>
                                        </div>
                                    </div>
                                </div>
                                {/* Display weather forecast for the upcoming days */}
                                <div className='day1'>
                                    <div className='day2'>TUE</div>
                                    <CloudQueueIcon />
                                    <div>{weather.data[1].dewpt}<sup>o</sup></div>
                                </div>

                                <div className='day1'>
                                    <div className='day2'>WED</div>
                                    <WbSunnyOutlinedIcon style={{ color: "yellow" }} />
                                    <div>{weather.data[2].dewpt}<sup>o</sup></div>
                                </div>

                                <div className='day1'>
                                    <div className='day2'>THU</div>
                                    <CloudQueueIcon />
                                    <div>{weather.data[3].dewpt}<sup>o</sup></div>
                                </div>

                                <div className='day1'>
                                    <div className='day2'>FRI</div>
                                    <ThunderstormOutlinedIcon />
                                    <div>{weather.data[4].dewpt}<sup>o</sup></div>
                                </div>

                                <div className='day1'>
                                    <div className='day2'>SAT</div>
                                    <CloudQueueIcon />
                                    <div>{weather.data[5].dewpt}<sup>o</sup></div>
                                </div>

                                <div className='day1'>
                                    <div className='day2'>SUN</div>
                                    <CloudQueueIcon style={{ color: "#fff" }} />
                                    <div>{weather.data[6].dewpt}<sup>o</sup></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default WeatherDetails;
