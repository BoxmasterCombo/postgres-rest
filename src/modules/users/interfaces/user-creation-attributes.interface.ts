import { Optional } from 'sequelize';

import { BaseAttributes } from '../../_shared/interfaces/base.interface';
import { UserAttributes } from './user-attributes.interface';

export interface UserCreationAttributes
  extends Optional<UserAttributes, keyof BaseAttributes> {}
