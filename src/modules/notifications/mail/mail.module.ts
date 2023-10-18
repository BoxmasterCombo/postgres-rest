import { Module } from '@nestjs/common';

import { AwsSesModule } from '@Modules/aws/ses/aws.ses.module';
import { MailService } from '@Modules/notifications/mail/mail.service';

@Module({
  imports: [AwsSesModule],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
