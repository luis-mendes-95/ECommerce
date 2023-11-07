/* eslint-disable prettier/prettier */
import { randomUUID } from "crypto"

export class Venda {
    readonly id: string
    createdAt: string
    lastEditted: string
    changeMaker: string  
    description: string
    colaborador: string
    user_id:  string
    client_id: string | null

    constructor(){
        this.id = randomUUID()
    }
}