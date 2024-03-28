// Importing necessary modules from React and Material-UI
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Grid, Typography } from '@mui/material';
import "./Dashboard.css" // Importing custom CSS for styling

// Creating a functional component named Dashboard
function Dashboard() {
    // Using state to manage the input field value for city
    const [city, setCity] = useState('');
    // useNavigate hook from react-router-dom for navigation
    const navigate = useNavigate();

    // Function to handle getting weather information
    const handleGetWeather = () => {
        // Checking if a city is entered
        if (city) {
            // Navigating to the weather-details page with the city as a query parameter
            navigate(`/weather-details?city=${encodeURIComponent(city)}`);
        } else {
            // Alerting the user if no city is entered
            alert('Please enter a city name');
        }
    };

    // Rendering the UI elements
    return (
        <div className="background"> {/* Outer div with background class */}
            <Grid container className="weather-container" spacing={2} alignItems="center" justifyContent="center"> {/* Container for weather elements */}
                <Grid item xs={12}>
                    <Typography variant="h2" align="center" className="weather-heading" gutterBottom> {/* Heading for weather */}
                        Weather Forecast
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Enter a city" // Label for input field
                        value={city} // Value of input field bound to state
                        onChange={(e) => setCity(e.target.value)} // Handling input field change
                        variant="outlined" // Outlined variant for input field
                        fullWidth // Taking full width of the container
                        className="weather-input" // Custom class for styling input field
                        style={{ border: "2px solid black", borderRadius: "5px" }} // Inline style for additional styling
                    />
                </Grid>
                <Grid item xs={12} md={6} container justifyContent="center"> {/* Container for button */}
                    <Button
                        variant="contained" // Contained variant for button
                        onClick={handleGetWeather} // Click event handler for button
                        fullWidth // Taking full width of the container
                        className="weather-button" // Custom class for styling button
                        style={{ width: '50%', background: "none", border: "1px solid #fff", color: "black" }} // Inline style for additional styling
                    >
                        Get Weather {/* Button text */}
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default Dashboard; // Exporting the Dashboard component
