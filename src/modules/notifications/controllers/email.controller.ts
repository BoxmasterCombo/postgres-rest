import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { EmailNotification } from '../notification.interfaces';
import { NotificationService } from '../notification.service';

@ApiTags('Notifications')
@Controller('email')
export class EmailController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  sendEmail(notification: EmailNotification): void {
    this.notificationService.sendEmail(notification);
  }
}
