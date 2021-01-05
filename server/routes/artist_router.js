const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    console.log(`In /songs GET`);
    const queryText = `SELECT * FROM "artists"`;
    pool.query(queryText)
        .then((result) => {
            console.log(result);
            res.send(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
    
});

router.post('/', (req, res) => {
    
    res.sendStatus(201);
});

module.exports = router;