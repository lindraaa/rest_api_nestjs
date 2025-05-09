import { ApiResponse } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateUserDto{
    // @ApiResponse({description:"The name of the user"})
    @IsString()
    @IsNotEmpty()
    name:string

    @IsEmail()
    @IsNotEmpty()
    email:string

    @IsOptional()
    @IsString()
    password:string
}
