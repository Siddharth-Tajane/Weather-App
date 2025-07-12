const axios = require('axios');
const WeatherLog = require('../models/WeatherLog');

const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = process.env.OWM_API_KEY;

async function logRequest(req, type, query) {
  await WeatherLog.create({ ip: req.ip, type, query });
}

exports.getByCity = async (req, res) => {
  const { city } = req.query;
  if (!city) return res.status(400).json({ error: 'City is required' });
  try {
    await logRequest(req, 'city', city);
    const r = await axios.get(API_URL, { params: { q: city, units: 'metric', appid: API_KEY } });
    res.json(r.data);
  } catch (err) {
    res.status(500).json({ error: err.response?.data?.message || err.message });
  }
};

exports.getByGeo = async (req, res) => {
  const { lat, lon } = req.query;
  if (!lat || !lon) return res.status(400).json({ error: 'Latitude and longitude are required' });
  if (isNaN(lat) || isNaN(lon)) return res.status(400).json({ error: 'Invalid coordinates' });
  try {
    await logRequest(req, 'geo', `${lat},${lon}`);
    const r = await axios.get(API_URL, { params: { lat, lon, units: 'metric', appid: API_KEY } });
    res.json(r.data);
  } catch (err) {
    res.status(500).json({ error: err.response?.data?.message || err.message });
  }
};
