import { SequelizeModule } from '@nestjs/sequelize';

import { UserModel } from '@Modules/users/user.model';

import * as databaseConfig from './database.config';

export const DatabaseModule = SequelizeModule.forRoot({
  ...databaseConfig,
  models: [UserModel],
});
