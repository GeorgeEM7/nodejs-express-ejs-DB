const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "georGe0",
    database: "blog",
});

module.exports = pool;
