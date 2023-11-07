/* eslint-disable prettier/prettier */
import { randomUUID } from "node:crypto";

export class ProductHistory {
    readonly id: string
    createdAt: string
    changeMaker: string
    product_id: string
    categoria: string
    marca: string
    modelo: string
    cod: string
    nome: string
    descricao: string
    imagem_principal: string | null
    imagens: string[] | null
    custo: string
    preco: string
    qtd: string

    constructor(){
        this.id = randomUUID()
    }
}

