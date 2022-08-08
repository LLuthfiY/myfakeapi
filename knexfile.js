// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/database.sqlite'
    }
  },

  staging: {
    client: 'sqlite3',
    connection: {
      filename: './database/database.sqlite'
    }
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: './database/database.sqlite'
    }
  }

};
