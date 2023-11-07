/* eslint-disable prettier/prettier */
import { Exclude } from "class-transformer";
import { randomUUID } from "crypto";

export class User {
    readonly id: string;
    
    createdAt: string;
    lastEditted: string;
    changeMaker: string;
    cpf_cnpj: string;
    nome_razao_social: string;
    apelido_nome_fantasia: string;
    tags: string[];
    inscricao_estadual: string;
    inscricao_municipal: string;
    cep: string;
    rua: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
    telefone: string;
    celular: string;
    email: string;
    
    @Exclude()
    senha: string;
    
    site: string;
    descricao: string;
    colaboradores: string[];
    fornecedores: string[];

    constructor(){
        this.id = randomUUID();
    }
}
