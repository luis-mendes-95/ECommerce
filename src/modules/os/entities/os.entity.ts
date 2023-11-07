/* eslint-disable prettier/prettier */
import { randomUUID } from "crypto"

export class Os {
    readonly id: string
    createdAt: string
    lastEditted: string
    changeMaker: string  

    descricao: string

    user_id:  string
    client_id: string
    venda_id?: string

    constructor(){
        this.id = randomUUID()
    }
}