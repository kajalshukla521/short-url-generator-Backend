const asyncHandler = require('express-async-handler');
const { StatusCodes } = require('http-status-codes');
const ShortURL = require('../models/shortUrlModel');

const updateShortURlController = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { originalUrl, shortUrl } = req.body;

    const updatedUrl = await ShortURL.findByIdAndUpdate(
        id,
        { originalUrl, shortUrl },
        { new: true }
    );

    if (!updatedUrl) {
        return res.status(StatusCodes.NOT_FOUND).json({ error: 'Short URL not found' });
    }

    return res.status(StatusCodes.OK).json({
        message: 'Short URL updated successfully',
        data: updatedUrl
    });
});

module.exports = updateShortURlController;
