// import { FETCH_RESTAURANTS, ADD_RESTAURANT, EDIT_RESTAURANT, DELETE_RESTAURANT } from '../types';
// import { fetchAllRestaurants as apiFetchAllRestaurants, createRestaurant as apiCreateRestaurant, deleteRestaurant as apiDeleteRestaurant, updateRestaurant as apiUpdateRestaurant } from "../../api/RestaurantAPI";
// import { message } from 'antd';
// const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// export const fetchRestaurants = () => async (dispatch) => {
//     try {
//         const response = await apiFetchAllRestaurants();
//         const mappedResponse = response.map(item => ({
//             ...item,
//             numOfReviews: item.numOfReviews || getRandomNumber(0, 80),
//             listOfReviews: item.listOfReviews || [],
//         }));
//         // dispatch(setRestaurants(mappedResponse));
//         dispatch({
//             type: FETCH_RESTAURANTS,
//             payload: mappedResponse,
//         })

//     } catch (error) {
//         console.error('Error fetching restaurants:', error);
//         message.error('Failed to fetch restaurants.');
//     }
// };
// export const addRestaurant = (restaurant) => async (dispatch) => {
//     try {
//         // Call the API to create the restaurant
//         const response = await apiCreateRestaurant(restaurant);
//         // If no error, we can simply dispatch the new restaurant with a random review
//         const newRestaurant = {
//             id: response.id, // Adjust based on your actual API response
//             numOfReviews: 0 || getRandomNumber(0, 80), // We are getting random nunber of reviews, assuming we have somewhere to retrieve it.
//             ...restaurant,
//         };

//         // Dispatch action to update Redux store
//         // dispatch(addRestaurantSuccess(newRestaurant));
//         dispatch({ type: ADD_RESTAURANT, payload: newRestaurant });

//         message.success('Restaurant added successfully!');
//     } catch (error) {
//         console.error('Error adding restaurant:', error);
//         message.error('Failed to add restaurant.');
//     }
// };


// // Edit Restaurant Action
// export const editRestaurant = (restaurant) => async (dispatch) => {
//     try {
//         const response = await apiUpdateRestaurant(restaurant.id, restaurant);
//         dispatch({
//             type: EDIT_RESTAURANT,
//             payload: restaurant // Assuming the response contains the updated restaurant details
//         });

//         message.success('Restaurant updated!');
//     } catch (error) {
//         console.error('Error updating restaurant:', error);
//         message.error('Failed to update restaurant.');
//     }
// };

// // Delete Restaurant Action
// export const handleDeleteRestaurant = (id) => async (dispatch) => {
//     try {
//         await apiDeleteRestaurant(id);
//         dispatch({
//             type: DELETE_RESTAURANT,
//             payload: id
//         });

//         message.success('Restaurant deleted!');
//     } catch (error) {
//         console.error('Error deleting restaurant:', error);
//         message.error('Failed to delete restaurant.');
//     }
// };
// // // Action creators for restaurants
// // export const setRestaurants = (restaurants) => ({
// //     type: SET_RESTAURANTS,
// //     payload: restaurants,
// // });

// // export const addRestaurantSuccess = (restaurant) => ({
// //     type: ADD_RESTAURANT,
// //     payload: restaurant,
// // });

// // export const editRestaurantSuccess = (restaurant) => ({
// //     type: EDIT_RESTAURANT,
// //     payload: restaurant,
// // });

// // export const deleteRestaurant = (id) => ({
// //     type: DELETE_RESTAURANT,
// //     payload: id,
// // });



import { Restaurant, } from '../../types/Restaurant'
import { FETCH_RESTAURANTS, ADD_RESTAURANT, EDIT_RESTAURANT, DELETE_RESTAURANT } from '../types';
import { message } from 'antd';

// Mock data
let mockRestaurants = [
    new Restaurant(1, 'Ahma Noodle', 5, 'Bishan', 'Singaporean', '$', []),
    new Restaurant(2, 'Ah gong Fish Soup', 10, 'Ang Mo Kio', 'Singaporean', '$$', [])
];

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const fetchRestaurants = () => async (dispatch) => {
    try {
        // Simulate fetching data from a "database"
        const response = mockRestaurants.map(item => ({
            ...item,
            numOfReviews: item.numOfReviews || getRandomNumber(0, 80),
            listOfReviews: item.listOfReviews || [],
        }));

        dispatch({
            type: FETCH_RESTAURANTS,
            payload: response,
        });

    } catch (error) {
        console.error('Error fetching restaurants:', error);
        message.error('Failed to fetch restaurants.');
    }
};

export const addRestaurant = (restaurant) => async (dispatch) => {
    try {
        // Simulate adding a restaurant
        const newRestaurant = {
            id: mockRestaurants.length + 1, // Simple ID generation for example
            numOfReviews: getRandomNumber(0, 80),
            ...restaurant,
        };
        mockRestaurants = [...mockRestaurants, newRestaurant];

        dispatch({
            type: ADD_RESTAURANT,
            payload: newRestaurant,
        });

        message.success('Restaurant added successfully!');
    } catch (error) {
        console.error('Error adding restaurant:', error);
        message.error('Failed to add restaurant.');
    }
};

export const editRestaurant = (restaurant) => async (dispatch) => {
    try {
        // Simulate updating a restaurant
        mockRestaurants = mockRestaurants.map(r =>
            r.id === restaurant.id ? { ...r, ...restaurant } : r
        );

        dispatch({
            type: EDIT_RESTAURANT,
            payload: restaurant,
        });

        message.success('Restaurant updated!');
    } catch (error) {
        console.error('Error updating restaurant:', error);
        message.error('Failed to update restaurant.');
    }
};

export const handleDeleteRestaurant = (id) => async (dispatch) => {
    try {
        // Simulate deleting a restaurant
        mockRestaurants = mockRestaurants.filter(r => r.id !== id);

        dispatch({
            type: DELETE_RESTAURANT,
            payload: id,
        });

        message.success('Restaurant deleted!');
    } catch (error) {
        console.error('Error deleting restaurant:', error);
        message.error('Failed to delete restaurant.');
    }
};
