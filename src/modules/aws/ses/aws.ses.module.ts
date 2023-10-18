import { Module } from '@nestjs/common';

import { AwsSesService } from '@Modules/aws/ses/aws.ses.service';

@Module({
  providers: [AwsSesService],
  exports: [AwsSesService],
})
export class AwsSesModule {}
