/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator"

export class CreateClienteHistoryDTO {

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
    cliente_id:  string

    vendas: string[]

    os: string[]
    
    arquivos: string[]
    
    receivables: string[]
    
    compras: string[]
    
    payables: string[]

}