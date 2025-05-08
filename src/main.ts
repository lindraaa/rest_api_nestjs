import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 //swagger for users only 
  const usersConfig = new DocumentBuilder()
    .setTitle('Users API Documentation')
    .setDescription('API for managing users')
    .setVersion('1.0')
    .addTag('users')
    .build();
  const usersDocument = SwaggerModule.createDocument(app, usersConfig);
  SwaggerModule.setup('api/users', app, usersDocument);


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
