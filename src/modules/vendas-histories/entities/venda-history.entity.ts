/* eslint-disable prettier/prettier */
import { randomUUID } from "crypto"

export class VendaHistory {
    readonly id: string
    createdAt: string
    lastEditted: string
    changeMaker: string  
    description: string
    itens: string[]
    os: string[]
    receivables: string[]
    payables: string[]
    colaborador: string
    venda_id: string

    constructor(){
        this.id = randomUUID()
    }
}