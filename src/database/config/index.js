// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

module.exports = {
  development: {
    dialect: 'postgres',
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    host: process.env.PG_HOST,
    port: +process.env.PG_PORT,
    logging: false,
    define: { timestamps: true },
    acquire: 100 * 1000, // 100 seconds
  },
  test: {
    dialect: 'postgres',
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    host: process.env.PG_HOST,
    port: +process.env.PG_PORT,
    logging: console.log,
    define: { timestamps: true },
    acquire: 100 * 1000, // 100 seconds
  },
  production: {
    dialect: 'postgres',
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    host: process.env.PG_HOST,
    port: +process.env.PG_PORT,
    logging: console.log,
    define: { timestamps: true },
    acquire: 100 * 1000, // 100 seconds
  },
};
