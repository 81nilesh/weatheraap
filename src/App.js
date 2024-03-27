import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import WeatherDetails from './component/WeatherDetails';

function App() {
  return (
    <Router>
      <div>
        {/* Dashboard component is rendered outside of Routes */}
        {/* <Dashboard /> */}

        {/* Routes component should directly contain Route components */}
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/weather-details" element={<WeatherDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
