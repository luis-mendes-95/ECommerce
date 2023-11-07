/* eslint-disable prettier/prettier */

import { randomUUID } from "crypto";

export class Produto {
    readonly id: string;

    createdAt: string;
    lastEditted: string;
    changeMaker: string;
    categoria: string;
    marca: string;
    modelo: string;
    cod: string;
    nome: string;
    descricao: string;
    imagem_principal: string;
    imagens: string[];
    custo: string;
    preco: string;
    estoque_id?: string;
    user_id: string;

    constructor() {
        this.id = randomUUID();
    }
}

