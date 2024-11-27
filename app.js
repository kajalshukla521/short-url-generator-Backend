require('dotenv').config();
const express = require('express');
const connectDatabase = require('./config/db');
const shortUrlRoutes = require('./routes/shortUrlRoutes');
const app = express();

// Server Configuration
const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 5000;

// Connect to Database
connectDatabase();

// Middleware
app.use(express.json());

// Routes
app.use('/api', shortUrlRoutes);

// Handle Invalid Routes
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
