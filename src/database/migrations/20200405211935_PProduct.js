
exports.up = function(knex) {
    return knex.schema.createTable('product', function (table){
        table.increments('id');
        table.string('title').notNullable ();
        table.string('description');
        table.string('url').notNullable ();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('product');
};
