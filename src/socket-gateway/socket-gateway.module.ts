import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { SocketGuard } from '@Guards/socket.guard';
import { UserModule } from '@Modules/users/user.module';
import { SocketGateway } from '@SocketGateway/socket.gateway';

@Module({
  imports: [UserModule],
  providers: [SocketGateway, SocketGuard, JwtService],
  exports: [SocketGateway],
})
export class SocketGatewayModule {}
