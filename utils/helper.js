const getShortString = (maxLimit = 11) => {
    return Math.random().toString(36).substring(3, maxLimit);
};

module.exports = { getShortString };
