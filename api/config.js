const knex = require('knex');

const config = {
    client: 'sqlite3',
    connection: {
        filename: 'none',
    },
    useNullAsDefault: true,
};

module.exports = knex(config); 