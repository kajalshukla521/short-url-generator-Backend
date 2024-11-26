const express = require('express');
const { getShortURlController, createShortURlController, updateShortURlController, partialUpdateShortURlController, deleteShortURlController } = require('../controllers/ShortURlController');
const router = express.Router();

// GET
router.get('/', getShortURlController)
router.post('/', createShortURlController)
router.put('/', updateShortURlController)
router.patch('/', partialUpdateShortURlController)
router.delete('/', deleteShortURlController)
const shortUrlRouter = router;
module.exports = shortUrlRouter;