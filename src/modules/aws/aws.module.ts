import { Global, Module } from '@nestjs/common';

import { S3Service } from '@Modules/aws/s3/s3.service';
import { SesService } from '@Modules/aws/ses/ses.service';

@Global()
@Module({
  providers: [S3Service, SesService],
})
export class AwsModule {}
