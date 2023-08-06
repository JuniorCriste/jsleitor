const sqlite3 = require('sqlite3').verbose();
let sql;
const db = new sqlite3.DataBase('../db/jf', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
});

//create table