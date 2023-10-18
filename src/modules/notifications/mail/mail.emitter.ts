import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

import { ORDER_SUBMITTED, USER_REGISTERED } from '@Emitter/emitter.constants';
import { MailService } from '@Modules/notifications/mail/mail.service';
import { CreateOrderDto } from '@Modules/orders/dto';
import { UserModel } from '@Modules/users/user.model';

@Injectable()
export class MailEmitter {
  constructor(private readonly mailService: MailService) {}

  @OnEvent(USER_REGISTERED)
  async sendRegistrationEmail(user: UserModel) {
    await this.mailService.sendUserInvitation(user);
  }

  @OnEvent(ORDER_SUBMITTED)
  async sendOrderConfirmationEmail({
    orderDto,
    user,
  }: {
    orderDto: CreateOrderDto;
    user: UserModel;
  }) {
    await this.mailService.sendOrderConfirmation(orderDto, user);
  }
}
