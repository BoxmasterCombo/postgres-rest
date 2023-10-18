import { Module } from '@nestjs/common';

import {
  EmailController,
  PushNotificationController,
  SMSController,
} from '@Modules/notifications/controllers';
import { NotificationService } from '@Modules/notifications/notification.service';

@Module({
  controllers: [EmailController, PushNotificationController, SMSController],
  providers: [NotificationService],
})
export class NotificationModule {}
