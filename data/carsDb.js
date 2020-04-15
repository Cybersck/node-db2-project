const db = require('./dbConfig');

module.exports = {
    get,
    insert
}

function get() {
    return db('cars');
}

function getByID(id) {
    return db('cars').where({id}).first();
}

function insert(car) {
    return db('cars').insert(car).then(ids => {
        return getByID(ids[0]);
    });
}

