import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import Footer from '../components/Footer';
import '../styles/globals.css';

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchByCity = async (city) => {
    setLoading(true); setError(''); setData(null);
    try {
      const res = await fetch(`/api/weather?city=${city}`);
      const json = await res.json();
      if (res.ok) setData(json);
      else throw new Error(json.error);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchByGeo = () => {
    if (!navigator.geolocation) return setError('Geolocation not supported');
    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        setLoading(true); setError(''); setData(null);
        try {
          const res = await fetch(`/api/weather/geo?lat=${coords.latitude}&lon=${coords.longitude}`);
          const json = await res.json();
          if (res.ok) setData(json);
          else throw new Error(json.error);
        } catch (e) {
          setError(e.message);
        } finally {
          setLoading(false);
        }
      },
      () => setError('Location access denied')
    );
  };

  return (
    <div className="app-wrapper">
      <div className="weather-container">
        <h1 className="title">🌤 Weather App</h1>
        <SearchBar onWeatherData={setData} onSearch={fetchByCity} onGeo={fetchByGeo} />
        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {data && (
          <div className="weather-card-wrapper">
            <WeatherCard data={data} />
          </div>
        )}
      </div>

      {/* ✅ Add the footer here */}
      <Footer />
    </div>
  );
}
