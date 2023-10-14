import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

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

  async create(payload: CreateUserDto): Promise<UserModel> {
    return this.userModel.create(payload);
  }
}
