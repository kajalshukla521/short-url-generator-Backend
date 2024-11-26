require('dotenv').config(); 
const express = require('express');
const connectDatabase = require('./config/db');

const app = express();
const hostname = process.env.HOSTNAME ?? 'localhost';
const port = process.env.PORT ?? 5000;

// Connect to Database
connectDatabase();

// Middleware
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
