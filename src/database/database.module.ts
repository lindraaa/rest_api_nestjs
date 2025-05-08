import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
@Module({
    imports:[
        ConfigModule.forRoot({
            isGlobal: true,
          }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: parseInt(process.env.DB_PORT as string),            
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: [],
            synchronize: true,
          }) 
    ]

    
})
export class DatabaseModule{}