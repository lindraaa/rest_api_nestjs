import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'users'})

export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar",nullable:false})
    name:string;

    @Column({type:"varchar",nullable:false, unique:true})
    email:string;

    @Exclude() // remove from the response 
    @Column({type:"varchar",nullable:true})
    password:string

    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;
}