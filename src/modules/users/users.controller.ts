import { ClassSerializerInterceptor, Controller, Get, UseInterceptors,Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { User } from "./entities/user.entity";
import { customResponse,customInterface} from "src/shared/utils/response.util";
import { CreateUserDto } from "./dto/create-usser.dto";

@Controller('v1/users')
export class UsersController{
    constructor(private readonly userService: UsersService ){}

    @ApiOperation({summary:"Get all users"})
    @ApiResponse({status:200, description:'Return all users.'})
    @UseInterceptors(ClassSerializerInterceptor) //to hide the exclude which is the password
    @Get('/getAll')
    async findAll(){
      return this.userService.findAll();
    }

    @Post('/create-user')
    async create(){

    }
    
}
