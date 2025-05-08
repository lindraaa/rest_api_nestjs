import { ClassSerializerInterceptor, Controller, Get, UseInterceptors } from "@nestjs/common";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { User } from "./entities/user.entity";

@Controller('v1/users')
export class UsersController{
    constructor(private readonly userService: UsersService ){}

    @ApiOperation({summary:"Get all users"})
    @ApiResponse({status:200, description:'Return all users.'})
    @UseInterceptors(ClassSerializerInterceptor) //to hide the exclude which is the password
    @Get('/getAll')
    findAll():Promise<User[]>{
        return this.userService.findAll()
    }
}
