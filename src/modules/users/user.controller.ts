import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { Roles } from '@Decorators/roles.decorator';
import { CurrentUser } from '@Decorators/user.decorator';
import { AccessTokenGuard } from '@Guards/auth.guard';
import { RolesGuard } from '@Guards/roles.guard';
import { ROLES } from '@Modules/_shared/enums/roles.enum';

import { UserModel } from './user.model';
import { UserService } from './user.service';

@ApiTags('Users')
@Controller('users')
@ApiBearerAuth()
@UseGuards(AccessTokenGuard, RolesGuard)
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Get('me')
  getMe(@CurrentUser() user: UserModel): Promise<UserModel> {
    return this.usersService.findOne({ id: user.id });
  }

  @Get()
  @Roles(ROLES.ADMIN)
  findAll(): Promise<UserModel[]> {
    return this.usersService.findAll();
  }
}
