import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { MyConfigModule } from '../../config/config.module';

@Module({
  imports: [MyConfigModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class MyTestModule {}
