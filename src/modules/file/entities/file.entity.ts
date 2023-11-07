/* eslint-disable prettier/prettier */
import { randomUUID } from "crypto"

export class File {
    readonly id: string
    createdAt: string
    lastEditted: string
    changeMaker: string  

    filename: string
    filetype: string
    filesize: string
    link:     string

    user_id: string
    client_id: string
    
    os_id?: string | null
    itemOs_id?: string | null
    instrucao_id?: string | null

    constructor(){
        this.id = randomUUID()
    }
}