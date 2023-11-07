/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator"

export class CreateClienteDTO {

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
    cpf_cnpj: string

    @IsString()
    nome_razao_social: string

    @IsString()
    apelido_nome_fantasia: string

    tags: string[]

    @IsString()
    inscricao_estadual: string

    @IsString()
    inscricao_municipal: string

    @IsString()
    cep: string

    @IsString()
    rua: string

    @IsString()
    numero: string

    @IsString()
    complemento: string

    @IsString()
    bairro: string

    @IsString()
    cidade: string

    @IsString()
    estado: string

    @IsString()
    telefone: string

    @IsString()
    celular: string

    @IsString()
    email: string

    @IsString()
    site: string

    @IsString()
    descricao: string

    @IsString()
    @IsNotEmpty()
    user_id:  string

}