import * as dotenv from 'dotenv';
import { Options } from 'sequelize';

dotenv.config();

const environment = process.env.NODE_ENV;
type DbType = 'development' | 'test' | 'production';

const DbConfig: Record<DbType, Options> = {
  development: {
    dialect: 'postgres',
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    host: process.env.PG_HOST,
    port: +process.env.PG_PORT,
    logging: false,
    define: { timestamps: true },
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
  },
};

module.exports = DbConfig[environment];
