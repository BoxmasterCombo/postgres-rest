import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { WhereOptions } from 'sequelize';

import { UserAttributes } from '@Modules/users/interfaces';
import { UserScopeEnum } from '@Modules/users/user.scope';

import { CreateUserDto } from './dto/create-user.dto';
import { UserModel } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel)
    private userModel: typeof UserModel,
  ) {}
  async findAll(): Promise<UserModel[]> {
    return this.userModel.findAll();
  }

  async findOne(
    where: WhereOptions<UserAttributes>,
  ): Promise<UserModel | undefined> {
    return this.userModel.findOne({ where });
  }

  async create(payload: CreateUserDto): Promise<UserModel> {
    return this.userModel.create(payload);
  }

  async update(
    where: WhereOptions<UserAttributes>,
    fields: Partial<UserAttributes>,
  ): Promise<number> {
    const [affectedCount] = await this.userModel.update(
      { ...fields },
      { where },
    );

    return affectedCount;
  }

  async destroy(where: WhereOptions<UserAttributes>): Promise<number> {
    return this.userModel.destroy({ where });
  }

  async getUnverifiedUsers(): Promise<Array<Pick<UserModel, 'id' | 'email'>>> {
    return this.userModel.scope(UserScopeEnum.unverified).findAll();
  }
}
