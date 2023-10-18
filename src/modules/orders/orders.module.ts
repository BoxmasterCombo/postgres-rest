import { Module } from '@nestjs/common';

import { SesService } from '@Modules/aws/ses/ses.service';

import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
  imports: [],
  controllers: [OrdersController],
  providers: [OrdersService, SesService],
})
export class OrdersModule {}
