/* eslint-disable prettier/prettier */
import { randomUUID } from "crypto"

export class ItemVenda {
    readonly id: string
    createdAt: string
    lastEditted: string
    changeMaker: string  

    description: string

    produto_id: string
    venda_id: string

    constructor(){
        this.id = randomUUID()
    }
}