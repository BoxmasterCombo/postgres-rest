import { Injectable } from '@nestjs/common';

import {
  CreditCardGateway,
  PAYMENT_METHOD,
  PaymentGateway,
} from './payment.gateway';

@Injectable()
export class PaymentService {
  private paymentGateways: Record<string, PaymentGateway> = {};

  constructor() {
    /**
     * Register Credit Card payment gateway
     **/
    this.registerPaymentGateway(
      PAYMENT_METHOD.CREDIT_CARD,
      new CreditCardGateway(),
    );
  }

  public registerPaymentGateway(
    paymentMethod: PAYMENT_METHOD,
    gateway: PaymentGateway,
  ) {
    this.paymentGateways[paymentMethod] = gateway;
  }

  public async processPayment(order: any, paymentMethod: PAYMENT_METHOD) {
    const gateway = this.paymentGateways[paymentMethod];

    if (!gateway) {
      throw new Error('Unsupported payment method!');
    }

    await gateway.processPayment(order);
  }
}
