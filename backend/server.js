const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const weatherRoutes = require('./routes/weather');

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: '*', // Or restrict to specific domains
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type',
};


app.use(cors(corsOptions));
 // ✅ Allows frontend to fetch from Render
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Mount API routes
app.use('/api', weatherRoutes);

// Health check
app.get('/', (req, res) => {
  res.send('Weather API is running...');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
