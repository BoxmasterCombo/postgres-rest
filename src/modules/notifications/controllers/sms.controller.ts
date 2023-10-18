import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { SMSNotification } from '../notification.interfaces';
import { NotificationService } from '../notification.service';

@ApiTags('Notifications')
@Controller('sms')
export class SMSController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  sendSMS(notification: SMSNotification): void {
    this.notificationService.sendSMS(notification);
  }
}
