import { Module } from '@nestjs/common';

import { MailModule } from '@Modules/notifications/mail/mail.module';
import { UserModule } from '@Modules/users/user.module';

import { CronJobService } from './cron-job.service';

@Module({
  imports: [MailModule, UserModule],
  providers: [CronJobService],
  exports: [CronJobService],
})
export class CronJobModule {}
