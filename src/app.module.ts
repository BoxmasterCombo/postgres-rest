import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { MyConfigModule } from '@Config/config.module';
import { DatabaseModule } from '@Database/database.module';
import { LoggingMiddleware } from '@Middlewares/logging.midlleware';
import { Modules } from '@Modules/index';

@Module({
  imports: [MyConfigModule, DatabaseModule, ...Modules],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
