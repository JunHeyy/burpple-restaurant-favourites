const mysql = require('mysql2/promise'); // Import promise-based MySQL module

// Create a connection pool
// In real scenerio we should use .env
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'mydb',
    password: 'password',
    port: 3306,
    // waitForConnections: true,
    // connectionLimit: 10,
    // queueLimit: 0
});
// Test the connection
const testConnection = async () => {
    try {
        const connection = await pool.getConnection(); // Get a connection from the pool
        console.log('Connected to the database successfully!!');
        await connection.query('SELECT 1'); // Simple query to test the connection
        connection.release(); // Release the connection back to the pool
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
    }
};

// Call the test function
testConnection();


// const pool = mysql.createPool({
//     host: process.env.DB_HOST || 'localhost',
//     user: process.env.DB_USER || 'root',
//     database: process.env.DB_NAME || 'mydb',
//     password: process.env.DB_PASSWORD || 'password',
//     port: 3306,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });

// Export the pool with promise support
module.exports = pool; // No need to call .promise() here; pool is already promise-based
