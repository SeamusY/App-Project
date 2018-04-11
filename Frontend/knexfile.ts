import config from './config';

module.exports = {

  development: {
    debug: true,
    client: 'postgresql',
    connection: {
      host: config.db.host,
      port: config.db.port,
      database: config.db.name,
      user: config.db.username,
      password: config.db.password
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  testing: {
    client: 'postgresql',
    connection: {
      host: config.db.host,
      port: config.db.port,
      database: config.db.name,
      user: config.db.username,
      password: config.db.password
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  staging: {
    client: 'postgresql',
    connection: {
      host: config.db.host,
      port: config.db.port,
      database: config.db.name,
      user: config.db.username,
      password: config.db.password
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: config.db.host,
      port: config.db.port,
      database: config.db.name,
      user: config.db.username,
      password: config.db.password
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
