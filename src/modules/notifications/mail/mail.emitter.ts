import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { Queue } from 'bull';

import { MAIL_PROCESSOR, MAIL_QUEUE } from '@Bull/bull.constants';
import { ORDER_SUBMITTED, USER_REGISTERED } from '@Emitter/emitter.constants';
import { CreateOrderDto } from '@Modules/orders/dto';
import { UserModel } from '@Modules/users/user.model';

@Injectable()
export class MailEmitter {
  constructor(@InjectQueue(MAIL_PROCESSOR) private readonly mailQueue: Queue) {}

  @OnEvent(USER_REGISTERED)
  async sendRegistrationEmail(user: UserModel) {
    await this.mailQueue.add(MAIL_QUEUE, user, {
      removeOnComplete: true,
      removeOnFail: true,
    });
  }

  @OnEvent(ORDER_SUBMITTED)
  async sendOrderConfirmationEmail({
    orderDto,
    user,
  }: {
    orderDto: CreateOrderDto;
    user: UserModel;
  }) {
    await this.mailQueue.add(
      MAIL_QUEUE,
      { user, orderDto },
      {
        removeOnComplete: true,
        removeOnFail: true,
      },
    );
  }
}
