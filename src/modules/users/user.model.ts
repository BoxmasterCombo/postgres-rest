import {
  AllowNull,
  Column,
  DataType,
  Default,
  Index,
  Table,
  Unique,
} from 'sequelize-typescript';

import { BaseModel } from '../_shared/base.model';
import { UserAttributes, UserCreationAttributes } from './interfaces';

@Table({ tableName: 'users' })
export class UserModel extends BaseModel<
  UserAttributes,
  UserCreationAttributes
> {
  @AllowNull(false)
  @Column(DataType.STRING(100))
  firstName: string;

  @AllowNull(false)
  @Column(DataType.STRING(100))
  lastName: string;

  @AllowNull(false)
  @Column(DataType.STRING(100))
  email: string;

  @AllowNull
  @Column(DataType.STRING(30))
  phoneNumber?: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  password: string;

  @Index
  @AllowNull
  @Unique
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  token: string;

  // Virtual Columns
  @Column(DataType.VIRTUAL)
  get name(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  @Column(DataType.VIRTUAL)
  get nameWithInitial(): string {
    return `${this.firstName.substring(1, 0)}${this.lastName.substring(1, 0)}`;
  }

  // Methods
  async touch(): Promise<void> {
    // Updating only "updatedAt" for tracking activity
    this.changed('updatedAt', true);

    await this.save();
  }
}
