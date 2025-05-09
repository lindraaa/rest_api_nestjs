import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { customInterface, customResponse } from "src/shared/utils/response.util";
import { CreateUserDto } from "./dto/create-usser.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

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

    async create(createUserDto:CreateUserDto):Promise<customInterface<User>>{
        const data = this.UserRepository.create(createUserDto);
        const res = await this.UserRepository.save(data) 
        return customResponse("User add successfully",res);
    }
    async update(id:number,updateUserDto: UpdateUserDto):Promise<customInterface<User|null>>{
        const data = await this.UserRepository.findOne({where:{id}})
        if(!data) return customResponse("User id not found",null,204)
        const updated = this.UserRepository.merge(data,updateUserDto);
        const res = await this.UserRepository.save(updated)
        return customResponse("User update successfully",res);

    }
    async destroy(id:number):Promise<customInterface<any>>{
        const data = await this.UserRepository.findOne({where:{id}})
        if(!data) return customResponse("User id not found",null,204)
        const res = await this.UserRepository.delete(id);
        return customResponse("User delete successfully",data);

    }
}