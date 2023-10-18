import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';

import { MAIL_PROCESSOR } from '@Bull/bull.constants';
import { AwsSesModule } from '@Modules/aws/ses/aws.ses.module';
import { MailEmitter } from '@Modules/notifications/mail/mail.emitter';
import { MailService } from '@Modules/notifications/mail/mail.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: MAIL_PROCESSOR,
    }),
    AwsSesModule,
  ],
  providers: [MailService, MailEmitter],
  exports: [MailService],
})
export class MailModule {}
