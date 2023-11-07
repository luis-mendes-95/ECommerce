/* eslint-disable prettier/prettier */
import { randomUUID } from "crypto"

export class Payable {
    readonly id: string
    createdAt: string
    lastEditted: string
    changeMaker: string  

    status: string
    amount: string
    payments: string[]
    description: string

    compra_id: string
    user_id: string
    client_id: string
    vendaId: string
    osId: string
    itemOsId: string

    constructor(){
        this.id = randomUUID()
    }
}