import { Global, Module } from '@nestjs/common';

import { S3Module } from '@Modules/aws/s3/s3.module';
import { SesModule } from '@Modules/aws/ses/ses.module';

@Global()
@Module({
  imports: [S3Module, SesModule],
  exports: [S3Module, SesModule],
})
export class AwsModule {}
