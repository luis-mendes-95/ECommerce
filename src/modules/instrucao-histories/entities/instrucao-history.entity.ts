/* eslint-disable prettier/prettier */
import { randomUUID } from "crypto"

export class InstrucaoHistory {
    readonly id: string
    createdAt: string
    lastEditted: string
    changeMaker: string  
    descricao: string
    arquivos: string[]
    instrucao_id:  string

    constructor(){
        this.id = randomUUID()
    }
}