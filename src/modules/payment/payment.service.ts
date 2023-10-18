import { Injectable } from '@nestjs/common';

import {
  BitcoinGateway,
  CreditCardGateway,
  PAYMENT_METHOD,
  PaymentGateway,
  PayPalGateway,
} from './payment.gateway';

@Injectable()
export class PaymentService {
  private paymentGateways: Record<string, PaymentGateway> = {};

  constructor() {
    this.registerPaymentMethods();
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

  /**
   * Register payment gateways
   * @private
   * @returns {void}
   */
  private registerPaymentMethods() {
    this.registerPaymentGateway(
      PAYMENT_METHOD.CREDIT_CARD,
      new CreditCardGateway(),
    );
    this.registerPaymentGateway(PAYMENT_METHOD.PAYPAL, new PayPalGateway());
    this.registerPaymentGateway(PAYMENT_METHOD.Bitcoin, new BitcoinGateway());
  }
}
