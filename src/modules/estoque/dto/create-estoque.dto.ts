import { IsNotEmpty, IsString } from "class-validator"

export class CreateEstoqueDTO {
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
    user_id:  string
}