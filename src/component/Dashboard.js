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
                    <Typography variant="h2" align="center" className="weather-heading" gutterBottom>
                        Weather Forecast
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Enter a city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        variant="outlined"
                        fullWidth
                        className="weather-input"
                        style={{ border: "2px solid black", borderRadius: "5px" }}
                    />
                </Grid>
                <Grid item xs={12} md={6} container justifyContent="center">
                    <Button
                        variant="contained"
                        onClick={handleGetWeather}
                        fullWidth
                        className="weather-button"
                        style={{ width: '50%', background: "none", border: "1px solid #fff", color: "black" }} // Adjust the width as needed
                    >
                        Get Weather
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default Dashboard;
