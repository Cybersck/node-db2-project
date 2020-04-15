db = require('../data/carsDb');

exports.getCars = (req, res) => {
    db.get().then(cars => res.status(200).send(cars)).catch(err => console.log(err));
}

exports.addCar = (req, res) => {
    let newCar = req.car;
    if (req.car.transmission === undefined) { newCar = {...newCar, transmission: 'unknown'}}
    if (req.car.title === undefined) { newCar = {...newCar, title: 'unknown'}}

    db.insert(newCar)
    .then(car => res.status(201).send({message: 'Success', car: car}))
    .catch(err => console.log(err));
}