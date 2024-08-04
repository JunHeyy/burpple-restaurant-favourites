


const pool = require('../config/db'); // Import the pool from db.js

const { v4: uuidv4 } = require('uuid'); // Import the uuid function

const createRestaurant = async (restaurant) => {
    const connection = await pool.getConnection();
    try {
        // Generate a GUID
        const id = uuidv4();

        const [result] = await connection.query(
            'INSERT INTO restaurants (id, name, location, cuisine, cost) VALUES (?, ?, ?, ?, ?)',
            [id, restaurant.name, restaurant.location, restaurant.cuisine, restaurant.cost]
        );
        return { id }; // Return an object with the ID
    } finally {
        connection.release();
    }
}

// const getAllRestaurants = async () => {
//     // console.log('Attempting to get restaurant from Model')
//     const connection = await pool.getConnection();

//     try {
//         const [rows] = await connection.query('SELECT * FROM restaurants');
//         console.log('THis is rows', rows)
//         return rows;
//     } finally {
//         connection.release();
//         console.log('Error querying the database: ' + error.message);
//     }
// };
const getAllRestaurants = async () => {
    console.log('Attempting to get restaurant from Model');
    const connection = await pool.getConnection();
    try {
        const [rows] = await connection.query('SELECT * FROM restaurants');
        console.log('Rows retrieved:', rows);
        return rows;
    } catch (error) {
        console.error('Error querying the database:', error.message); // Log errors here
        throw error; // Ensure errors are propagated
    } finally {
        connection.release();
    }
};

const getRestaurantById = async (id) => {
    const connection = await pool.getConnection();
    try {
        const [rows] = await connection.query('SELECT * FROM restaurants WHERE id = ?', [id]);
        return rows;
    } catch (error) {
        console.error('Error querying the database:', error.message); // Log errors here
        throw error; // Ensure errors are propagated
    } finally {
        connection.release();
    }
};

const updateRestaurant = async (id, updatedRestaurant) => {
    const connection = await pool.getConnection();
    try {
        const [result] = await connection.query(
            'UPDATE restaurants SET name = ?, location = ?, cuisine = ?, cost = ? WHERE id = ?',
            [updatedRestaurant.name, updatedRestaurant.location, updatedRestaurant.cuisine, updatedRestaurant.cost, id]
        );
        return result;
    } catch (error) {
        console.error('Error querying the database:', error.message); // Log errors here
        throw error; // Ensure errors are propagated
    } finally {
        connection.release();
    }
};

const deleteRestaurant = async (id) => {
    const connection = await pool.getConnection();
    try {
        const [result] = await connection.query('DELETE FROM restaurants WHERE id = ?', [id]);
        return result;
    } catch (error) {
        console.error('Error querying the database:', error.message); // Log errors here
        throw error; // Ensure errors are propagated
    } finally {
        connection.release();
    }
};

module.exports = {
    createRestaurant,
    getAllRestaurants,
    getRestaurantById,
    updateRestaurant,
    deleteRestaurant
};
