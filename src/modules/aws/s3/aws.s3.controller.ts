import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AwsS3Service } from '@Modules/aws/s3/aws.s3.service';
import GetSignatureDto from '@Modules/aws/s3/dto/get-signature-dto';

@ApiTags('AWS')
@Controller('aws')
export class Aws {
  constructor(private readonly awsS3Service: AwsS3Service) {}

  @Get('evaporate')
  getSignature(@Query() query: GetSignatureDto) {
    return this.awsS3Service.getSignature(query);
  }
}
