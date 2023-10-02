import { IDatabase } from './database.interface';
import * as DbConfig from './config';

const environment = process.env.NODE_ENV;

module.exports = DbConfig[environment] as IDatabase;
