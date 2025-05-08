import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [DatabaseModule, UsersModule],
  // controllers: [AppController],
  // providers: [AppService],
    controllers:[],
    providers:[]
})
export class AppModule {}
