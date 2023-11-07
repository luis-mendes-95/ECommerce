/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator"

export class CreateProdutoHistoryDTO {
    @IsString()
    @IsNotEmpty()
    createdAt: string
    @IsString()
    @IsNotEmpty()
    changeMaker: string
    @IsString()
    @IsNotEmpty()
    product_id: string
    @IsString()
    @IsNotEmpty()
    categoria: string
    @IsString()
    @IsNotEmpty()
    marca: string
    @IsString()
    @IsNotEmpty()
    modelo: string
    @IsString()
    @IsNotEmpty()
    cod: string
    @IsString()
    @IsNotEmpty()
    nome: string
    @IsString()
    @IsNotEmpty()
    descricao: string
    imagem_principal: string
    imagens: string[] | null
    @IsString()
    @IsNotEmpty()
    custo: string
    @IsString()
    @IsNotEmpty()
    preco: string
    @IsString()
    qtd: string
}