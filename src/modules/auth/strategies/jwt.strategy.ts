import { Injectable, NotFoundException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { IPayloadInterface } from '@Modules/auth/interfaces/payload.interface';
import { UserService } from '@Modules/users/user.service';

import { jwtConstants } from '../auth.constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate({ id }: IPayloadInterface) {
    const user = await this.userService.findOne({ id });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
