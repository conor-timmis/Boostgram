const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware setup
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(bodyParser.json());

// Use authRoutes
app.use('/api', authRoutes);

// Connect to MongoDB (adjust the connection string to match your database)
mongoose.connect('mongodb://localhost:27017/boostgram', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

// Start the server
app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
