import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UserModel } from './user.model';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Get()
  //TODO: Check with guard
  findAll(): Promise<UserModel[]> {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() body: CreateUserDto): Promise<UserModel> {
    return this.usersService.create(body);
  }
}
