/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsArray } from "class-validator";

export class CreateUserHistoryDto {

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
  cpf_cnpj: string;

  @IsString()
  @IsNotEmpty()
  nome_razao_social: string;

  @IsString()
  apelido_nome_fantasia: string;

  @IsArray()
  tags: string[];

  @IsString()
  inscricao_estadual: string;

  @IsString()
  inscricao_municipal: string;

  @IsString()
  cep: string;

  @IsString()
  rua: string;

  @IsString()
  numero: string;

  @IsString()
  complemento: string;

  @IsString()
  bairro: string;

  @IsString()
  cidade: string;

  @IsString()
  estado: string;

  @IsString()
  telefone: string;

  @IsString()
  celular: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  site: string;

  @IsString()
  descricao: string;

  @IsArray()
  colaboradores: string[];

  @IsArray()
  fornecedores: string[];

  @IsString()
  @IsNotEmpty()
  user_id: string;


}
