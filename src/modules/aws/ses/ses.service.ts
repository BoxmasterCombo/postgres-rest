import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class SesService {
  private logger = new Logger('SesService');

  constructor() {}

  // TODO: Implement this method
  async sendEmail(params: any) {
    // Send email with SES
    this.logger.log('Sending email with SES');

    return params;
  }
}
