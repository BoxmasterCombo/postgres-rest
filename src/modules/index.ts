import { AuthModule } from '@Modules/auth/auth.module';
import { AwsModule } from '@Modules/aws/aws.module';
import { NotificationModule } from '@Modules/notifications/notification.module';
import { OrdersModule } from '@Modules/orders/orders.module';
import { PaymentModule } from '@Modules/payment/payment.module';
import { UserModule } from '@Modules/users/user.module';

export const Modules = [
  AuthModule,
  AwsModule,
  NotificationModule,
  OrdersModule,
  PaymentModule,
  UserModule,
];
