import { Module } from '@nestjs/common';

import { MyConfigModule } from '@Config/config.module';
import { DatabaseModule } from '@Database/database.module';
import { UserModule } from '@Modules/users/user.module';

@Module({
  imports: [MyConfigModule, DatabaseModule, UserModule],
})
export class AppModule {}
