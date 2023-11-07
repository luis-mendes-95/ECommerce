/* eslint-disable prettier/prettier */
import { randomUUID } from "crypto"

export class Instrucao {
    readonly id: string
    createdAt: string
    lastEditted: string
    changeMaker: string  

    descricao: string

    os_id: string
    itemOs_id: string

    constructor(){
        this.id = randomUUID()
    }
}