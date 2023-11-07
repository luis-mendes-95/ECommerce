import { IsNotEmpty, IsString } from "class-validator"

export class CreateEstoqueHistoryDTO {
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
    @IsNotEmpty()
    nome: string
    @IsString()
    @IsNotEmpty()
    estoque_id:  string
}