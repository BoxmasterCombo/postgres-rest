import { Injectable } from '@nestjs/common';

import {
  EmailNotification,
  PushNotification,
  SMSNotification,
} from '@Modules/notifications/notification.interfaces';

@Injectable()
export class NotificationService {
  sendEmail(notification: EmailNotification): void {
    // TODO: Logic to send email notification
  }

  sendSMS(notification: SMSNotification): void {
    // TODO: Logic to send SMS notification
  }

  sendPushNotification(notification: PushNotification): void {
    // TODO: Logic to send push notification
  }
}
