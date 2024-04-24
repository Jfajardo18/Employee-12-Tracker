const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employees_tracker',
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the employees_tracker database.');
});

module.exports = connection;