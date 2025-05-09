import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class UpdateUserDto{
    @IsString()
    @IsOptional()
    name:string
    
    @IsEmail()
    @IsOptional()
    email:string
    
    @IsOptional()
    @IsString()
    password:string
}
