const asyncHandler = require('express-async-handler');
const { StatusCodes } = require('http-status-codes');
const ShortURL = require('../models/shortUrlModel');

const getShortURlController = asyncHandler(async (req, res) => {
    const shortURLs = await ShortURL.find();

    if (!shortURLs || shortURLs.length === 0) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            error: 'Unable to fetch URL information',
            data: shortURLs
        });
    }

    return res.status(StatusCodes.OK).json({
        message: 'Short URLs fetched successfully',
        data: shortURLs
    });
});

module.exports = getShortURlController;
