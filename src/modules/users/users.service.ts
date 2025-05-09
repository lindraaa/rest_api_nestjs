import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { customInterface, customResponse } from "src/shared/utils/response.util";
import { CreateUserDto } from "./dto/create-usser.dto";

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

    async findOne(id:number):Promise<customInterface<User|null>>{
        const data = await this.UserRepository.findOne({where:{id}})
        if(!data) return customResponse("User id not found",null,204)
        return customResponse("User found",data);
    }   

    async create(createUserDto:CreateUserDto){
        const data = this.UserRepository.create(createUserDto);
        return customResponse("User add successfully",data);

    }

}