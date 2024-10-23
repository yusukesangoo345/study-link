const express = require('express');
const path = require('path');
const router = express.Router();

// 学年ごとのルート
router.get('/elementary', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/elementary.html'));
});

router.get('/elementary/grade1', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/grade1.html'));
});

router.get('/elementary/grade1/math', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/grade1-math.html'));
});

// ここに他の学年や科目のルートを追加できます
router.get('/elementary/grade2', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/grade2.html'));
});

// 中学・高校・大学向けのスペースを開けておくため、同様のルートを追加できます

module.exports = router;
