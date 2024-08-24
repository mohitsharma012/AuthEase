const express = require('express');

const {getDashboard}  = require('../Controllers/dashboardController');
const {isAuthorized} = require('../Middleware/isAuthorized');


const dashboardRouter = express.Router();


dashboardRouter.get('/get-data',isAuthorized ,getDashboard);


module.exports = dashboardRouter; // Directly export the router

