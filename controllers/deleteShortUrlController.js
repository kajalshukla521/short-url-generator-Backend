const asyncHandler = require('express-async-handler');
const { StatusCodes } = require('http-status-codes');
const ShortURL = require('../models/shortUrlModel');

const deleteShortURlController = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const deletedUrl = await ShortURL.findByIdAndDelete(id);

    if (!deletedUrl) {
        return res.status(StatusCodes.NOT_FOUND).json({ error: 'Short URL not found' });
    }

    return res.status(StatusCodes.OK).json({
        message: 'Short URL deleted successfully',
        data: deletedUrl
    });
});

module.exports = deleteShortURlController;
