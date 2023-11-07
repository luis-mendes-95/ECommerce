/* eslint-disable prettier/prettier */
import { randomUUID } from "crypto"

export class ItemOs {
    readonly id: string
    createdAt: string
    lastEditted: string
    changeMaker: string  

    descricao: string
    tipo_arte: string
    colaboradores: string[]

    produto_id: string
    os_id: string

    constructor(){
        this.id = randomUUID()
    }
}