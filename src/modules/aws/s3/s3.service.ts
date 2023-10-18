import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class S3Service {
  private logger = new Logger('S3Service');

  async getPresignedUrl(params: any) {
    // Generate presigned URL with S3
    this.logger.log('Generating presigned URL with S3');

    return params;
  }
}
