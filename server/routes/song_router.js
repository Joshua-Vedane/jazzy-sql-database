const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');



//to move to song_router.js
router.get('/', (req, res) => {
    console.log(`In /songs GET`);
    res.sendStatus(200);
});

router.post('/', (req, res) => {
    console.log(`in /songs POST`);
    res.sendStatus(200);
});


module.exports = router; 