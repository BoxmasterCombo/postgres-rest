import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { PushNotification } from '../notification.interfaces';
import { NotificationService } from '../notification.service';

@ApiTags('Notifications')
@Controller('push-notification')
export class PushNotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  sendPushNotification(notification: PushNotification): void {
    this.notificationService.sendPushNotification(notification);
  }
}
