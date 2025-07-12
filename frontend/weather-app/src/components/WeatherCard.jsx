import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ data }) => {
  return (
    <div className="weather-card">
      <h2>{data.name}, {data.sys.country}</h2>
      <img
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt={data.weather[0].description}
      />
      <h3>{Math.round(data.main.temp)}°C</h3>
      <p>{data.weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;
