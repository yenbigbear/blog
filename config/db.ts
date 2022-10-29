import mysql from 'mysql2';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'jack10020214',
  port: 3306,
  database: 'sg'
});

/*
const pool = mysql.createPool({
    host: 'containers-us-west-44.railway.app',
    user: 'root',
    password: 'tCQuZpZTqjGhMrXJ9Ql1',
    port: 6222,
    database: 'railway'
  });
*/

export { pool };
