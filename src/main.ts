import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
 //swagger for users only 
  const usersConfig = new DocumentBuilder()
    .setTitle('REST API Documentation')
    .setDescription('Implementing CRUD functionality using NestJS')
    .setVersion('1.0')
    // .addTag('test')
    .build();
  const usersDocument = SwaggerModule.createDocument(app, usersConfig);
  SwaggerModule.setup('swagger/api', app, usersDocument);


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
