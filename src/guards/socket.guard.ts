/* eslint-disable complexity */
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { WsException } from '@nestjs/websockets';
import { Socket } from 'socket.io';

import { jwtConstants } from '@Modules/auth/auth.constants';
import { IPayloadInterface } from '@Modules/auth/interfaces/payload.interface';
import { UserModel } from '@Modules/users/user.model';
import { UserService } from '@Modules/users/user.service';

@Injectable()
export class SocketGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const client = context.switchToWs().getClient<Socket>();

      const token = this.getHandshakeQueryParam(client, 'token');

      if (token) {
        const user = await this.getUserFromToken({ token });

        context.switchToHttp().getRequest().user = user;

        return Boolean(user);
      }

      return false;
    } catch (err) {
      throw new WsException(err.message);
    }
  }

  async connectAuth(client: Socket): Promise<UserModel> {
    try {
      const token = this.getHandshakeQueryParam(client, 'token');

      if (!token || token === 'undefined') return null;

      return this.getUserFromToken({ token });
    } catch (err) {
      Logger.log('socket connection error', err);
    }
  }

  async getUserFromToken({ token }: { token: string }): Promise<UserModel> {
    const { id }: IPayloadInterface = this.jwtService.verify(token, {
      secret: jwtConstants.secret,
    });

    const user = await this.userService.findOne({ id });

    if (!user) throw new UnauthorizedException('Unauthorized');

    return user;
  }

  getHandshakeQueryParam(client: Socket, paramName: string): string | null {
    if (client.handshake.query[paramName]) {
      return Array.isArray(client.handshake.query[paramName])
        ? client.handshake.query[paramName][0]
        : client.handshake.query[paramName].toString();
    }

    return null;
  }
}
