const express = require('express');
const getShortURlController = require('../controllers/getShortUrlController');

const updateShortURlController = require('../controllers/updateShortUrlController');
const deleteShortURlController = require('../controllers/deleteShortUrlController');
const createShortURlController = require('../controllers/createShortUrlControllers');

const router = express.Router();

// GET - Fetch all short URLs
router.get('/getshorturl', getShortURlController);

// POST - Create a new short URL
router.post('/createshorturl',createShortURlController );

// PUT - Update a short URL (Full update)
router.put('/updateshorturl/:id', updateShortURlController);

// DELETE - Remove a short URL by ID
router.delete('/deleteshorturl/:id', deleteShortURlController);

module.exports = router;
