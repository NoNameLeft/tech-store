function errorHandler(err, req, res, next) {
    if (!err) return;

    res.json({ error: err })
}

module.exports = errorHandler;