export class MessageResponse {
  constructor(msg?: string) {
    this.message = msg || '';
  }

  message: string;
}
