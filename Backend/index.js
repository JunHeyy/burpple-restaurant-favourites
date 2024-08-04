const mysql = require('mysql2');
// create a new MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'password',
    database: 'mydb',

});
// connect to the MySQL database
// connection.connect((error) => {
//     if (error) {
//         console.error('Error connecting to MySQL database:', error);
//     } else {
//         console.log('Connected to MySQL database!');
//     }
// });

// // Connect to the database
// connection.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");

//     // SQL statement to create the table
//     const sql = `
//         CREATE TABLE IF NOT EXISTS restaurants (
//             id VARCHAR(255) PRIMARY KEY,
//             name VARCHAR(255) NOT NULL,
//             numOfReviews INT NOT NULL,
//             location VARCHAR(255) NOT NULL,
//             cuisine VARCHAR(255) NOT NULL,
//             cost VARCHAR(50) NOT NULL
//         );
//     `;

//     // Execute the SQL statement
//     connection.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Table created");
//     });
// });
// close the MySQL connection
// connection.end();



