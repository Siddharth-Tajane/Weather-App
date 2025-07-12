const router = require('express').Router();
const ctrl = require('../controllers/weatherController');

router.get('/weather', ctrl.getByCity);
router.get('/weather/geo', ctrl.getByGeo);
router.get('/weather', async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: 'City required' });

  const apiKey = process.env.OWM_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch from OpenWeather' });
  }
});


module.exports = router;
