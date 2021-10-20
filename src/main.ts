import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.use(helmet({ contentSecurityPolicy: false }));
  const config = new DocumentBuilder()
    .setTitle('Pay Gate API')
    .setDescription('The API for crypto pay gate')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const port = parseInt(process.env.PORT, 10) || 3000;
  await app.listen(port);
  return port;
}
bootstrap().then((port) => {
  Logger.log(
    `Document setup on: http://localhost:${port}/${process.env.DOCS_PATH}`,
    'NestApplication',
  );
  return Logger.log(
    `Application started at: http://localhost:${port}/${process.env.BASE_PATH}`,
    'NestApplication',
  );
});