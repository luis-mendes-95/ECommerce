import { randomUUID } from "crypto"

export class EstoqueHistory {
    readonly id: string
    createdAt: string
    lastEditted: string
    changeMaker: string  
    nome: string
    estoque_id:  string

    constructor(){
        this.id = randomUUID()
    }
}