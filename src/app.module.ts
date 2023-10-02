import { Module } from '@nestjs/common';
import { MyConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [MyConfigModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
