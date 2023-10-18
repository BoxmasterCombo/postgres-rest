// Extending the payment service without modifying existing code (Open-Closed Principle)
export abstract class PaymentGateway {
  abstract processPayment(order: any): Promise<void>;
}

export class CreditCardGateway implements PaymentGateway {
  async processPayment(order: any): Promise<void> {
    // Process credit card payment

    return order;
  }
}

export class PayPalGateway implements PaymentGateway {
  async processPayment(order: any): Promise<void> {
    // Process PayPal payment

    return order;
  }
}

export class BitcoinGateway implements PaymentGateway {
  async processPayment(order: any): Promise<void> {
    // Process Bitcoin payment

    return order;
  }
}

export enum PAYMENT_METHOD {
  CREDIT_CARD = 'credit-card',
  PAYPAL = 'paypal',
  Bitcoin = 'bitcoin',
}
