import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { MyConfigModule } from '@Config/config.module';
import { DatabaseModule } from '@Database/database.module';
import { LoggingMiddleware } from '@Middlewares/logging.midlleware';
import { AuthModule } from '@Modules/auth/auth.module';
import { UserModule } from '@Modules/users/user.module';

@Module({
  imports: [MyConfigModule, DatabaseModule, UserModule, AuthModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
