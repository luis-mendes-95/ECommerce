/* eslint-disable prettier/prettier */
import { randomUUID } from "crypto"

export class Compra {
    readonly id: string
    createdAt: string
    lastEditted: string
    changeMaker: string  

    description: string

    user_id: string
    supplier_id: string

    constructor(){
        this.id = randomUUID()
    }
}