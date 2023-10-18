import { Module } from '@nestjs/common';

import { MailModule } from '@Modules/notifications/mail/mail.module';

@Module({
  imports: [MailModule],
  exports: [MailModule],
})
export class NotificationModule {}
