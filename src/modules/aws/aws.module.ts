import { Global, Module } from '@nestjs/common';

import { AwsS3Module } from '@Modules/aws/s3/aws.s3.module';
import { AwsSesModule } from '@Modules/aws/ses/aws.ses.module';

@Global()
@Module({
  imports: [AwsS3Module, AwsSesModule],
  exports: [AwsS3Module, AwsSesModule],
})
export class AwsModule {}
