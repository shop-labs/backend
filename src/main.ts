import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.setGlobalPrefix('api');
  app.enableVersioning({ type: VersioningType.URI });

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
