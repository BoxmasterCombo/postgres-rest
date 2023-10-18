import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

import { MailService } from '@Modules/notifications/mail/mail.service';
import { UserService } from '@Modules/users/user.service';

@Injectable()
export class CronJobService {
  private logger = new Logger(CronJobService.name);

  constructor(
    private readonly mailService: MailService,
    private readonly userService: UserService,
  ) {}

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async checkAndSendQuestSchedules(): Promise<void> {
    const unverifiedUsers = await this.userService.getUnverifiedUsers();

    this.logger.log(
      `Sending reminder to ${unverifiedUsers.length} unverified users`,
    );

    await Promise.all(unverifiedUsers.map(this.mailService.sendUserAcceptance));
  }
}
