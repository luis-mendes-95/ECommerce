/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator"

export class CreateVendaDTO {

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
    colaborador: string

    @IsString()
    client_id:  string | null

    @IsString()
    @IsNotEmpty()
    user_id:  string

}