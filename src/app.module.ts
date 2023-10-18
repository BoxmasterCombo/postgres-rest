import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

import { MyBullModule } from '@Bull/bull.module';
import { MyConfigModule } from '@Config/config.module';
import { DatabaseModule } from '@Database/database.module';
import { MyEmitterModule } from '@Emitter/emitter.module';
import { HttpExceptionFilter } from '@Filters/http-exception.filter';
import { LoggingMiddleware } from '@Middlewares/logging.midlleware';
import { Modules } from '@Modules/index';
import { SocketGatewayModule } from '@SocketGateway/socket-gateway.module';

@Module({
  imports: [
    MyConfigModule,
    MyBullModule,
    DatabaseModule,
    MyEmitterModule,
    SocketGatewayModule,
    ...Modules,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
