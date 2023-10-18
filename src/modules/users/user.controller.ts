import { Controller, Get } from '@nestjs/common';

import { UserModel } from './user.model';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Get()
  findAll(): Promise<UserModel[]> {
    return this.usersService.findAll();
  }
}
