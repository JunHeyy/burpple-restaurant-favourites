import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import restaurantReducer from './reducers/restaurantReducers'; // Adjust the path as needed

const rootReducer = combineReducers({
    restaurants: restaurantReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
