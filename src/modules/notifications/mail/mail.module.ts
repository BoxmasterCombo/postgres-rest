import { Module } from '@nestjs/common';

import { AwsSesModule } from '@Modules/aws/ses/aws.ses.module';
import { MailEmitter } from '@Modules/notifications/mail/mail.emitter';
import { MailService } from '@Modules/notifications/mail/mail.service';

@Module({
  imports: [AwsSesModule],
  providers: [MailService, MailEmitter],
  exports: [MailService],
})
export class MailModule {}
