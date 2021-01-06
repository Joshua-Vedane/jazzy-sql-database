const pg = require('pg');

//Setup PG to connect with Database
const Pool = pg.Pool;
const pool = new Pool ({
    database: 'jazzy_sql',
    host: 'localhost',
    port: 5432,
})

//cookie crumb trail 
pool.on('connect', () => {
    console.log('PG CONNECTED');
})
pool.on('error', (error)=>{
    console.log(error);
})

//the box is open 
module.exports = pool; 