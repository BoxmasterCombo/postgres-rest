import { Module } from '@nestjs/common';

import { AwsSesModule } from '@Modules/aws/ses/aws.ses.module';

import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
  imports: [AwsSesModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
