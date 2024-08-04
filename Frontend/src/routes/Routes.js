import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes as ImportedRoute,
} from "react-router-dom";

import { RestaurantList, Error } from "../pages";



const RoutesComponent = () => {
    return (
        <Router>
            <div>
                <ImportedRoute>
                    <Route path="/" element={<RestaurantList />} />
                    <Route path="/error" element={<Error />} />
                </ImportedRoute>
            </div>
        </Router>
    );
};

export default RoutesComponent;
