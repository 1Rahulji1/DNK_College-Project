// db.js

import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

// Create a connection pool
const connection = mysql.createPool({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: process.env.port || 3306,       // optional, default port
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});



// Test the connection
connection.getConnection((err, connection) => {
  if (err) {
    console.error('❌ Database connection failed:', err.message);
  } else {
    console.log('✅ Database pool connected successfully');
    connection.release(); // release the connection back to pool
  }
});

export default connection;
