const asyncHandler = require('express-async-handler');
const { StatusCodes } = require('http-status-codes');
const ShortURL = require('../models/shortUrlModel');
const { getShortString } = require('../utils/helper');

const createShortURlController = asyncHandler(async (req, res) => {
    const { originalUrl } = req.body;

    if (!originalUrl) {
        return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Original URL is required' });
    }

    const shortUrl = getShortString();

    const newShortURL = await ShortURL.create({
        originalUrl,
        shortUrl,
    });

    return res.status(StatusCodes.CREATED).json({
        message: 'Short URL created successfully',
        data: newShortURL
    });
});

module.exports = createShortURlController;
