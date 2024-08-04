// Assuming RestaurantReview is a class or object defined elsewhere in your code
const RestaurantReview = require('./RestaurantReview');

class Restaurant {
    constructor(id, name, numOfReviews, location, cuisine, cost, listOfReviews = []) {
        this.id = id;
        this.name = name;
        this.numOfReviews = numOfReviews;
        this.location = location;
        this.cuisine = cuisine;
        this.cost = cost;
        this.listOfReviews = listOfReviews;
    }
}

class CreateRestaurant {
    constructor(name, location, cuisine, cost, listOfReviews = []) {
        this.name = name;
        this.location = location;
        this.cuisine = cuisine;
        this.cost = cost;
        this.listOfReviews = listOfReviews;
    }
}

class UpdateRestaurant {
    constructor(id, name = null, location = null, cuisine = null, cost = null, listOfReviews = []) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.cuisine = cuisine;
        this.cost = cost;
        this.listOfReviews = listOfReviews;
    }
}

module.exports = {
    Restaurant,
    CreateRestaurant,
    UpdateRestaurant
};
