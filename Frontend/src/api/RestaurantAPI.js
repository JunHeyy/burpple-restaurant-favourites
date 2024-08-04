import { Get, Post, Put, Delete } from "./API";

// Fetch all restaurants
const fetchAllRestaurants = async () => {
    const response = await Get("/restaurants", {});
    console.log(response);
    return response;
};

// Create a new restaurant
const createRestaurant = async (restaurant) => {
    const response = await Post("/restaurants", restaurant);
    return response;
};

// Get a single restaurant by ID
const getRestaurant = async (id) => {
    const response = await Get(`/restaurants/${id}`, {});
    return response;
};

// Update a restaurant by ID
const updateRestaurant = async (id, restaurant) => {
    const response = await Put(`/restaurants/${id}`, restaurant);
    return response;
};

// Delete a restaurant by ID
const deleteRestaurant = async (id) => {
    const response = await Delete(`/restaurants/${id}`);
    return response;
};

export { fetchAllRestaurants, createRestaurant, getRestaurant, updateRestaurant, deleteRestaurant };
