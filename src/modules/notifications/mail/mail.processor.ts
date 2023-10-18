import {
  OnQueueActive,
  OnQueueCompleted,
  OnQueueError,
  OnQueueFailed,
  OnQueueStalled,
  Process,
  Processor,
} from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

import { MAIL_PROCESSOR, MAIL_QUEUE } from '@Bull/bull.constants';
import { MailService } from '@Modules/notifications/mail/mail.service';

@Processor(MAIL_PROCESSOR)
export class MailProcessor {
  private readonly logger = new Logger(MailProcessor.name);

  constructor(private readonly mailService: MailService) {}

  @Process(MAIL_QUEUE)
  async sendMail(job: Job) {
    const { data } = job;

    this.logger.log(`Sending email to ${data.to}`);

    await this.mailService.sendMail(data);
  }

  @OnQueueActive()
  onActive(job: Job) {
    this.logger.log(`Job ${job.name} active`);
  }

  @OnQueueStalled()
  onStalled(job: Job) {
    this.logger.warn(`Job ${job.name} stalled`);
  }

  @OnQueueCompleted()
  onCompleted(job: Job) {
    this.logger.log(`Job ${job.name} completed`);
  }

  @OnQueueFailed()
  onFailed(job: Job, error: any) {
    this.logger.error(`Job ${job.name} failed: ${error.message}`);
  }

  @OnQueueError()
  onError(job: Job, error: any) {
    this.logger.error(`Job ${job.name} error: ${error.message}`);
  }
}
