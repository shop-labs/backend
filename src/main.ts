import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from 'src/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.setGlobalPrefix('api');
  app.enableVersioning({ type: VersioningType.URI });

  const config = new DocumentBuilder()
    .setTitle('')
    .setDescription('')
    .setVersion('')
    .addTag('')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
