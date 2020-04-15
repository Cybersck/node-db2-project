const express = require('express');
const router = express.Router();
const carsMiddle = require('../middleware/carsMiddle');
const carsController = require('../controllers/carsController');


router.get('/', carsController.getCars);
router.post('/', carsMiddle.validateCar, carsController.addCar)

module.exports = router;
