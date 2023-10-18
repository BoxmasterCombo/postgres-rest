import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Aws')
@Controller('s3')
export class S3Controller {}
