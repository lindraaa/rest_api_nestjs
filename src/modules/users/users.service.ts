import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { customInterface, customResponse } from "src/shared/utils/response.util";

@Injectable()

export class UsersService{
    constructor(
        @InjectRepository(User)
        private readonly UserRepository:Repository<User>
    ){}
    
    async findAll():Promise<customInterface<User[]>>{
        const data = await this.UserRepository.find();
        return customResponse('List of users',data);    
    }
    
}