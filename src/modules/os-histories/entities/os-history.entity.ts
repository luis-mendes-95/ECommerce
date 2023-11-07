/* eslint-disable prettier/prettier */
import { randomUUID } from "crypto"

export class OsHistory {
    readonly id: string
    createdAt: string
    lastEditted: string
    changeMaker: string  
    descricao: string
    itens: string[]
    instrucoes: string[]
    client: string
    files: string[]
    payables: string[]
    receivables: string[]
    os_id: string

    constructor(){
        this.id = randomUUID()
    }
}