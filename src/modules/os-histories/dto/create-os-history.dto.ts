/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator"

export class CreateOsHistoryDTO {
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

    itens: string[]
    instrucoes: string[]

    @IsString()
    client: string
    
    files: string[]
    payables: string[]
    receivables: string[]

    @IsString()
    os_id: string


}