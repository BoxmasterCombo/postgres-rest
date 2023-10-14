import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { setupSwagger } from 'src/swagger/swagger';

import { AppModule } from './app.module';

const PORT = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    abortOnError: false,
    cors: true,
  });

  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  app.setGlobalPrefix('/api');

  setupSwagger(app);

  await app.listen(PORT);
}

bootstrap()
  .then(() =>
    console.log(`Application is running on: http://localhost:${PORT}`),
  )
  .catch(console.error);
