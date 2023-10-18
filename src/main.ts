import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const globalPrefix = "api";
  app.setGlobalPrefix(globalPrefix);
  const options = new DocumentBuilder()
    .setTitle("PRUEBA")
    .setDescription("DOCUMENTACIÓN DE PRODUCER")
    .setVersion("v1.0.0")
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("/api/producer/docs/", app, document);
  let port = 3000
  await app.listen(port, () => {
    Logger.log(`http://localhost:${port}/api/producer/docs/`);
  });
}

bootstrap().catch((error) => {
  Logger.error(`❌  Error starting server, ${error}`, "", "Bootstrap", false);
  throw error;
});

