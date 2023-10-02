import {
  AllowNull,
  Column,
  DataType,
  Index,
  Table,
  Unique,
} from 'sequelize-typescript';
import { BaseModel } from '../_shared/base.model';

@Table({ tableName: 'users' })
export class UserModel extends BaseModel {
  @AllowNull(false)
  @Column({ type: DataType.STRING(100) })
  firstName: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING(100) })
  lastName: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING(100) })
  email: string;

  @AllowNull
  @Column({ type: DataType.STRING(30) })
  phoneNumber?: string;

  @Column({ type: DataType.STRING, allowNull: true })
  password: string;

  @Index
  @AllowNull
  @Unique
  @Column({ type: DataType.STRING })
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
