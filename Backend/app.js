const express = require('express');
const bodyParser = require('body-parser');
const restaurantRoutes = require('./server/routes/RestaurantRoutes');
const restaurantController = require('./server/controllers/RestaurantController');
const cors = require('cors');

const app = express();
// const router = express.Router();
app.use(cors());

const port = process.env.PORT || 3001;

app.use(bodyParser.json()); // Middleware to parse JSON bodies

app.use('/api', restaurantRoutes); // Routes for restaurant

// Route to create a new restaurant
// router.post('/restaurants', restaurantController.createRestaurant);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
