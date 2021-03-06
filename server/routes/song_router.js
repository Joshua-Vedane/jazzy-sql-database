const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// '/song' GET ROUTE
router.get('/', (req, res) => {
    // console.log(`In /songs GET`);
    // Get Data and sort by song title
    const queryText = `SELECT * FROM "song" ORDER BY "title";`;
    pool.query(queryText)
        .then((result) => {
            // console.log(result);
            res.send(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
});

// '/song' POST ROUTE
router.post('/', (req, res) => {
    console.log(`in /songs POST`);
    // console.log(req.body);
    const queryText = `INSERT INTO "song"("title", "length", "released")
    VALUES ($1, $2, $3);`;
    pool.query(queryText, [req.body.title, req.body.length, req.body.released])
        .then((result) => {
            // console.log(result);
            res.sendStatus(201);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
});

module.exports = router; 