import { UseFilters } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

import { WsExceptionFilter } from '@Filters/ws-exception.filter';
import { SocketGuard } from '@Guards/socket.guard';
import { UserModel } from '@Modules/users/user.model';

export type SocketWithUser = Socket & { user: UserModel };

@UseFilters(new WsExceptionFilter())
@WebSocketGateway({
  path: '/socket.io',
  namespace: '/socket.io',
  transports: ['websocket', 'polling'],
  cors: {
    origins: [process.env.APP_URL],
    methods: ['GET', 'POST'],
    credentials: true,
  },
  allowEIO3: true,
})
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(protected _socketGuard: SocketGuard) {}

  @WebSocketServer()
  server: Server;

  async handleConnection(client: SocketWithUser): Promise<void> {
    const user = await this._socketGuard.connectAuth(client);

    if (user) {
      client.user = user;

      client.join(user.id.toString());

      console.log(`User connected: ${client.id}`);
    }
  }

  async handleDisconnect(client: SocketWithUser): Promise<void> {
    const user = await this._socketGuard.connectAuth(client);

    if (user) {
      client.user = user;

      client.leave(user.id.toString());

      console.log(`User disconnected: ${client.id}`);
    }
  }

  broadcastToUserId(
    socket: Socket,
    userId: number,
    event: string,
    data: any,
  ): void {
    if (socket) {
      socket.broadcast.to(userId.toString()).emit(event, data);
    } else {
      this.server.compress(true).to(userId.toString()).emit(event, data);
    }
  }
}
