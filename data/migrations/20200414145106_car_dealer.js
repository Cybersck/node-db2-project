
exports.up = function(knex) {
  return knex.schema.createTable('cars', t => {
      t.increments('id').unsigned().primary();
      t.string('vin').notNullable().unique();
      t.string('make').notNullable();
      t.string('model').notNullable();
      t.decimal('mileage').notNullable();
      t.string('transmission').nullable();
      t.string('title').nullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
