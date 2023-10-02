import { SequelizeModule } from '@nestjs/sequelize';
import * as databaseConfig from './database.config';
import { UserModel } from '../modules/users/user.model';

export const DatabaseModule = SequelizeModule.forRoot({
  ...databaseConfig,
  models: [UserModel],
});
