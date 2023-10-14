import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

import { UserCreationAttributes } from '../interfaces';

export class CreateUserDto implements UserCreationAttributes {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  phoneNumber?: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
