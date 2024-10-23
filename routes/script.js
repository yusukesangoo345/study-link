const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/home.html'));
});

router.get('/courses', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/course.html'));
});

module.exports = router;
