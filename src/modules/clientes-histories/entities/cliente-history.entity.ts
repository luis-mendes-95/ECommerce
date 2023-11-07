/* eslint-disable prettier/prettier */
import { randomUUID } from "crypto"

export class ClienteHistory {
    readonly id: string
    createdAt: string
    lastEditted: string
    changeMaker: string  

    cpf_cnpj: string
    nome_razao_social: string
    apelido_nome_fantasia: string
    tags: string[]    
    inscricao_estadual: string
    inscricao_municipal: string
    cep: string    
    rua: string    
    numero: string    
    complemento: string    
    bairro: string    
    cidade: string    
    estado: string    
    telefone: string   
    celular: string    
    email: string   
    site: string    
    descricao: string
    
    cliente_id:  string

    constructor(){
        this.id = randomUUID()
    }
}