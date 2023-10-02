import { Dialect } from 'sequelize/lib/sequelize';
import { ModelOptions } from 'sequelize/lib/model';

export interface IDatabase {
  username: string;
  password: string;
  database: string;
  host: string;
  port: number;
  dialect: Dialect;
  logging: typeof console.log | boolean;
  define: ModelOptions;
  acquire: number;
}
