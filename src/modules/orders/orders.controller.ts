import { Body, Controller, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { CurrentUser } from '@Decorators/user.decorator';
import { AccessTokenGuard } from '@Guards/auth.guard';
import { CreateOrderDto, UpdateOrderDto } from '@Modules/orders/dto';
import { UserModel } from '@Modules/users/user.model';

import { OrdersService } from './orders.service';

@ApiTags('Orders')
@Controller('orders')
@ApiBearerAuth()
@UseGuards(AccessTokenGuard)
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post()
  public async submitOrder(
    @Body() body: CreateOrderDto,
    @CurrentUser() user: UserModel,
  ) {
    // Create order
    const createdOrder: any = await this.ordersService.submitOrder(body, user);

    // Return created order
    return createdOrder;
  }

  @Patch()
  public async updateOrder(@Body() body: UpdateOrderDto) {
    // Update order
    const updateOrder: any = await this.ordersService.updateOrder(body);

    // Return updated order
    return updateOrder;
  }
}
