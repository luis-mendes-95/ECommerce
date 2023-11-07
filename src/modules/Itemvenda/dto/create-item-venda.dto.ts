/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator"

export class CreateItemVendaDTO {

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
    description: string

    @IsString()
    venda_id: string
    
    @IsString()
    produto_id: string

}