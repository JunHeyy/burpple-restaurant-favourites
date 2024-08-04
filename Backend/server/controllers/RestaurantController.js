const restaurantModel = require('../models/RestaurantModel');

// Create
const createRestaurant = async (req, res) => {
    try {
        const newRestaurant = req.body;

        const { id } = await restaurantModel.createRestaurant(newRestaurant);
        res.status(201).json({ message: 'Restaurant created!', id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Read all
const getAllRestaurants = async (req, res) => {
    try {
        console.log('IN the get all restaurant function');
        const results = await restaurantModel.getAllRestaurants();
        console.log('Found restaurant', results)
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Read by ID
const getRestaurantById = async (req, res) => {
    const { id } = req.params;
    try {
        const results = await restaurantModel.getRestaurantById(id);
        if (results.length === 0) return res.status(404).json({ message: 'Restaurant not found' });
        res.status(200).json(results[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update
const updateRestaurant = async (req, res) => {
    const { id } = req.params;
    const updatedRestaurant = req.body;
    try {
        const result = await restaurantModel.updateRestaurant(id, updatedRestaurant);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Restaurant not found' });
        res.status(200).json({ message: 'Restaurant updated!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete
const deleteRestaurant = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await restaurantModel.deleteRestaurant(id);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Restaurant not found' });
        res.status(200).json({ message: 'Restaurant deleted!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    createRestaurant,
    getAllRestaurants,
    getRestaurantById,
    updateRestaurant,
    deleteRestaurant
};
