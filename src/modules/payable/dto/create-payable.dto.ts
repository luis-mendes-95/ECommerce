/* eslint-disable prettier/prettier */
import { IsArray, IsNotEmpty, IsString } from "class-validator"

export class CreatePayableDTO {

    @IsString()
    @IsNotEmpty()
    createdAt: string

    @IsString()
    @IsNotEmpty()
    lastEditted: string

    @IsString()
    @IsNotEmpty()
    changeMaker: string  

    @IsString()
    status: string

    @IsString()
    amount: string

    @IsArray()
    payments: string[]

    @IsString()
    description: string

    @IsString()
    compra_id: string
    
    @IsString()
    user_id: string
        
    @IsString()
    client_id: string

    @IsString()
    venda_id: string

    @IsString()
    os_id: string

    @IsString()
    itemOs_id: string

    

}