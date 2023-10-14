import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { MyConfigModule } from '@Config/config.module';
import { DatabaseModule } from '@Database/database.module';
import { LoggingMiddleware } from '@Middlewares/logging.midlleware';
import { UserModule } from '@Modules/users/user.module';

@Module({
  imports: [MyConfigModule, DatabaseModule, UserModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
