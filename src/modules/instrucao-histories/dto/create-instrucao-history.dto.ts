/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator"

export class CreateInstrucaoHistoryDTO {
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

    arquivos: string[]
    @IsString()
    @IsNotEmpty()
    instrucao_id:  string
}