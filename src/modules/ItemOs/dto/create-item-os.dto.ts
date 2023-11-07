/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator"

export class CreateItemOsDTO {

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
    tipo_arte: string

    colaboradores: string[]

    @IsString()
    os_id: string

    @IsString()
    produto_id: string



}