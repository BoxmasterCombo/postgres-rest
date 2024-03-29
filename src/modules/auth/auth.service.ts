import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';

import { USER_REGISTERED } from '@Emitter/emitter.constants';
import { MessageResponse } from '@Modules/_shared/responses/message.response';
import { LoginDto } from '@Modules/auth/dto/login.dto';
import { RegisterDto } from '@Modules/auth/dto/register.dto';
import { IPayloadInterface } from '@Modules/auth/interfaces/payload.interface';
import { TokenResponse } from '@Modules/auth/responses/token.response';
import { CreateUserDto } from '@Modules/users/dto/create-user.dto';
import { UserService } from '@Modules/users/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private eventEmitter: EventEmitter2,
  ) {}

  async login(body: LoginDto): Promise<TokenResponse> {
    const user = await this.userService.findOne({ email: body.email });

    if (!user) {
      throw new NotFoundException('User');
    }

    const passwordMatches = await this.comparePassword(
      body.password,
      user.password,
    );

    if (!passwordMatches) {
      throw new ForbiddenException('Incorrect Email or Password');
    }

    const payload: IPayloadInterface = { id: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(body: RegisterDto): Promise<MessageResponse> {
    const password = await this.hashPassword(body.password);
    const userPayload: CreateUserDto = { ...body, password };

    const user = await this.userService.create(userPayload);

    // Send email via emitter
    this.eventEmitter.emit(USER_REGISTERED, { user });

    return new MessageResponse(`We've sent verification email`);
  }

  async comparePassword(comp1: string, comp2: string): Promise<boolean> {
    return compare(comp1, comp2);
  }

  public hashPassword(password: string): Promise<string> {
    return hash(password, 10);
  }
}
