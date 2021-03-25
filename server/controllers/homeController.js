const router = require('express').Router();

router.get('/express_backend', (req, res) => {
    res.json({ express: 'YOUR EXPRESS BACKEND IS RUNNING.' });
});

module.exports = router;