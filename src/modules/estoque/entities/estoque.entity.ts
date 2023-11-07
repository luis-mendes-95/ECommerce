import { randomUUID } from "crypto"

export class Estoque {
    readonly id: string
    createdAt: string
    lastEditted: string
    changeMaker: string  
    nome: string
    user_id:  string

    constructor(){
        this.id = randomUUID()
    }
}