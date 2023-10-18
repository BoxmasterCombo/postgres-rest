import { Injectable } from '@nestjs/common';

import { CreateOrderDto, UpdateOrderDto } from '@Modules/orders/dto';

@Injectable()
export class OrdersService {
  constructor() {}

  async submitOrder(orderDto: CreateOrderDto) {
    // TODO: Implement this
    // Process order
    // Send email to customer
    // Save order on the Database

    return orderDto;
  }

  async updateOrder(orderDto: UpdateOrderDto) {
    // TODO: Implement this
    // Process order

    return orderDto;
  }
}
