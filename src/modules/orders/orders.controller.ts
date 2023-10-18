import { Body, Controller, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AwsSesService } from '@Modules/aws/ses/aws.ses.service';
import { CreateOrderDto, UpdateOrderDto } from '@Modules/orders/dto';

import { OrdersService } from './orders.service';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(
    private ordersService: OrdersService,
    private sesService: AwsSesService,
  ) {}

  @Post()
  public async submitOrder(@Body() body: CreateOrderDto) {
    // Create order
    const createdOrder: any = await this.ordersService.submitOrder(body);

    // Send email to customer
    // await this.sesService.sendEmail({});

    // Return created order
    return createdOrder;
  }

  @Patch()
  public async updateOrder(@Body() body: UpdateOrderDto) {
    // Update order
    const updateOrder: any = await this.ordersService.updateOrder(body);

    // Send email to customer
    // await this.sesService.sendEmail({});

    // Return updated order
    return updateOrder;
  }
}
