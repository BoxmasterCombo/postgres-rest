import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const message: any = exception.getResponse();

    if (typeof message.message === 'object') {
      return response.status(status).json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: httpAdapter.getRequestUrl(request),
        message: message.message[0],
        error: message.error || '',
      });
    } else if (typeof message.message === 'string') {
      return response.status(status).json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: httpAdapter.getRequestUrl(request),
        message: message.message,
        error: message.error || '',
      });
    }

    return response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: httpAdapter.getRequestUrl(request),
      message: 'Something went wrong',
      error: message.error || '',
    });
  }
}
