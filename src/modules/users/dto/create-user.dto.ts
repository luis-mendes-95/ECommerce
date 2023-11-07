/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsEmail, IsArray, MinLength } from "class-validator";
import { hashSync } from "bcryptjs";
import { Transform } from "class-transformer";

export class CreateUserDto {

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

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Transform(({value}: {value: string}) => hashSync(value, 10), {
    groups: ['transform'],
  })
  senha: string;

  @IsString()
  site: string;

  @IsString()
  descricao: string;

  @IsArray()
  colaboradores: string[];

  @IsArray()
  fornecedores: string[];


}
