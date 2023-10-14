import { Module } from '@nestjs/common';

import { MyConfigModule } from '@Config/config.module';
import { DatabaseModule } from '@Database/database.module';

@Module({
  imports: [MyConfigModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class MyTestModule {}
