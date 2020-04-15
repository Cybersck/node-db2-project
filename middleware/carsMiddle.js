//VIN, make, model, and mileage
exports.validateCar = (req, res, next) => {
    if (req.body.vin === undefined ||
        req.body.make === undefined ||
        req.body.model === undefined ||
        req.body.mileage === undefined) {
            res.status(400).send('Missing Required Data');
        } else {
            req.car = req.body;
            next();
        }
}