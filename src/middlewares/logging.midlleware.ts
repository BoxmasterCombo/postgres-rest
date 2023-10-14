import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware<Request, Response> {
  private readonly logger = new Logger(`HTTP`);

  use(req: Request, res: Response, next: NextFunction) {
    const { statusCode } = res;

    if (statusCode >= 400) {
      this.logger.error(
        `Logging HTTP request ${req.method} ${req.originalUrl} ${res.statusCode}`,
      );
    } else if (statusCode >= 300) {
      this.logger.warn(
        `Logging HTTP request ${req.method} ${req.originalUrl} ${res.statusCode}`,
      );
    } else {
      this.logger.log(
        `Logging HTTP request ${req.method} ${req.originalUrl} ${res.statusCode}`,
      );
    }

    next();
  }
}
