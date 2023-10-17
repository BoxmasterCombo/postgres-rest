import { SequelizeModule } from '@nestjs/sequelize';
import * as databaseConfig from './database.config';
import { UserModel } from '../modules/users/user.model';
import { Model } from 'sequelize-typescript';
import { importModelsFromModulesDirectory } from './database.models';

const importedModels: Model[] = importModelsFromModulesDirectory();

console.log(importedModels, 'importedModels2');

export const DatabaseModule = SequelizeModule.forRoot({
  ...databaseConfig,
  models: [UserModel],
});
