const mongoose = require('mongoose');

const weatherLogSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  ip: String,
  type: { type: String, enum: ['city', 'geo'] },
  query: String,
});

module.exports = mongoose.model('WeatherLog', weatherLogSchema);
