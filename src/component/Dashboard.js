import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Grid, Typography } from '@mui/material';
import "./Dashboard.css"

function Dashboard() {
    const [city, setCity] = useState('');
    const navigate = useNavigate();

    const handleGetWeather = () => {
        if (city) {
            navigate(`/weather-details?city=${encodeURIComponent(city)}`);
        } else {
            alert('Please enter a city name');
        }
    };

    return (
        <div className="background">
            <Grid container className="weather-container" spacing={2} alignItems="center" justifyContent="center">
                <Grid item xs={12}>
                    <Typography variant="h1" align="center" className="weather-heading" gutterBottom>
                        Weather Forecast
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Enter a city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        variant="outlined"
                        fullWidth
                        className="weather-input"
                    />
                </Grid>
                <Grid item xs={6} container justifyContent="center"> {/* Adjust the xs value to change the width */}
                    <Button
                        variant="contained"
                        onClick={handleGetWeather}
                        fullWidth
                        className="weather-button"
                        style={{ width: '50%' }} // Adjust the width as needed
                    >
                        Get Weather
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default Dashboard;
