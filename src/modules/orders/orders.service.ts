import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

import { ORDER_SUBMITTED } from '@Emitter/emitter.constants';
import { CreateOrderDto, UpdateOrderDto } from '@Modules/orders/dto';
import { UserModel } from '@Modules/users/user.model';

@Injectable()
export class OrdersService {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  async submitOrder(orderDto: CreateOrderDto, user: UserModel) {
    // Process order
    // Send email to customer
    this.eventEmitter.emit(ORDER_SUBMITTED, { orderDto, user });

    return orderDto;
  }

  async updateOrder(orderDto: UpdateOrderDto) {
    // TODO: Implement this
    // Process order

    return orderDto;
  }
}
