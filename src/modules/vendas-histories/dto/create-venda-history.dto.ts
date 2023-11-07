/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator"

export class CreateVendaHistoryDTO {
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
    itens: string[]
    os: string[]
    receivables: string[]
    payables: string[]
    colaborador: string
    venda_id: string
}