const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// '/artist' GET ROUTE
router.get('/', (req, res) => {
    //Get Data and sort from young to old 
    const queryText = `SELECT * FROM "artists" ORDER BY "birthdate" DESC;`;
    pool.query(queryText)
        .then((result) => {
            // console.log(result);
            res.send(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
});

// '/artist' POST ROUTE
router.post('/', (req, res) => {
    // console.log(req.body);
    const queryText = `INSERT INTO "artists"("name", "birthdate")
    VALUES ($1, $2);`;
    //no tricks today. Database protected. 
    pool.query(queryText, [req.body.name, req.body.birthdate])
        .then((result) => {
            // console.log(result);
            res.sendStatus(201);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
});

module.exports = router;