const knex = require('knex');

const configurations = require('../../knexfile');

const config = configurations.development;

const connection = knex(config);

module.exports = connection;