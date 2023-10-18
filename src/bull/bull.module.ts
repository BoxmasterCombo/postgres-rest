import { BullModule } from '@nestjs/bull';
import { DynamicModule } from '@nestjs/common';

export const MyBullModule: DynamicModule = BullModule.forRoot({
  redis: {
    host: process.env.REDIS_HOST,
    port: +process.env.REDIS_PORT,
  },
});
