import { PartialType } from '@nestjs/swagger';

import { CreateOrderDto } from '@Modules/orders/dto/create-order.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
