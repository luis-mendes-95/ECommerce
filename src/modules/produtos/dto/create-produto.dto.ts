/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsArray, IsOptional } from "class-validator";

export class CreateProdutoDto {

  @IsString()
  @IsNotEmpty()
  createdAt: string;

  @IsString()
  @IsNotEmpty()
  lastEditted: string;

  @IsString()
  @IsNotEmpty()
  changeMaker: string;

  @IsString()
  @IsNotEmpty()
  categoria: string;

  @IsString()
  marca: string;

  @IsString()
  modelo: string;

  @IsString()
  cod: string;

  @IsString()
  nome: string;

  @IsString()
  descricao: string;

  @IsString()
  imagem_principal: string;

  @IsArray()
  imagens: string[];

  @IsString()
  custo: string;

  @IsString()
  preco: string;

  @IsString()
  user_id: string;

  @IsString()
  @IsOptional()
  estoque_id?: string | null;

}
