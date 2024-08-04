import { FETCH_RESTAURANTS, ADD_RESTAURANT, EDIT_RESTAURANT, DELETE_RESTAURANT } from '../types';

const initialState = {
    restaurants: [],
};

const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RESTAURANTS:
            return { ...state, restaurants: action.payload };
        // Add new restaurant to the end of the list
        case ADD_RESTAURANT:
            return { ...state, restaurants: [...state.restaurants, action.payload] };
        case EDIT_RESTAURANT:
            return {
                ...state,
                restaurants: state.restaurants.map(r =>
                    r.id === action.payload.id ? { ...r, ...action.payload } : r
                ),
            };
        case DELETE_RESTAURANT:
            return {
                ...state,
                restaurants: state.restaurants.filter(r => r.id !== action.payload),
            };
        default:
            return state;
    }
};

export default restaurantReducer;
