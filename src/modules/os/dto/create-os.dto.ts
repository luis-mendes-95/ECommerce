/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator"

export class CreateOsDTO {

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
    descricao: string

    @IsString()
    @IsNotEmpty()
    client_id:  string | null

    @IsString()
    @IsNotEmpty()
    user_id:  string

    @IsString()
    venda_id?:  string

}