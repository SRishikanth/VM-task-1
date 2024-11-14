// db/connections.js
require('dotenv').config({ path: __dirname + '/.env' });
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME, 
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database: driverprofile');
});

module.exports = db;

