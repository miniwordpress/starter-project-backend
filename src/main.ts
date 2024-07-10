import { NestFactory } from '@nestjs/core';
import { UsersModule } from './module/user-module';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);
  await app.listen(8080);
}
bootstrap();
