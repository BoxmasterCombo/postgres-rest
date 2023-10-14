import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserModel } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';

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
    const user = await this.usersService.create(body);
    // Something

    return user;
  }
}
