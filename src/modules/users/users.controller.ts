import { ClassSerializerInterceptor, Controller, Get, UseInterceptors,Post, Put, Delete, Param } from "@nestjs/common";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";


@Controller('v1/users')
export class UsersController{
    constructor(private readonly userService: UsersService ){}

    @ApiOperation({summary:"Get all users"})
    @ApiResponse({status:200, description:'Return all users.'})
    @UseInterceptors(ClassSerializerInterceptor) //to hide the exclude which is the password
    @Get('/getAll')
    findAll(){
      return this.userService.findAll();
    }

    @ApiOperation({summary:"Get user by id"})
    @ApiResponse({status:200, description:"Return User"})
    @ApiResponse({status:400, description:"User id not found"})
    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/getbyid/:id')
    findOne(@Param("id") id:number){
        return this.userService.findOne(id)

    }

    @ApiOperation({summary:"Create a user"})
    @ApiResponse({status:200, description:"User added successfully"})
    @UseInterceptors(ClassSerializerInterceptor)
    @Post('/create-user')
    create(){

    }

    @ApiOperation({summary:"Update a user"})
    @ApiResponse({status:200, description:"User added successfully"})
    @ApiResponse({status:400, description:"User id not found"})
    @UseInterceptors(ClassSerializerInterceptor)
    @Put('/update/:id')
    update(){

    }

    @ApiOperation({summary:"Delete a user"})
    @ApiResponse({status:200, description:"User deleted successfully"})
    @ApiResponse({status:400, description:"User id not found"})
    @Delete('/delete/:id')
    delete(){

    }
    
}
