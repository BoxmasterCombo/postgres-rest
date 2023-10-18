import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { MessageResponse } from '@Modules/_shared/responses/message.response';
import { AuthService } from '@Modules/auth/auth.service';
import { LoginDto } from '@Modules/auth/dto/login.dto';
import { RegisterDto } from '@Modules/auth/dto/register.dto';
import { TokenResponse } from '@Modules/auth/responses/token.response';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: LoginDto): Promise<TokenResponse> {
    return this.authService.login(body);
  }

  @Post('register')
  async register(@Body() body: RegisterDto): Promise<MessageResponse> {
    return this.authService.register(body);
  }
}
