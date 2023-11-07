/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator"

export class CreateFileDTO {

    @IsString()
    @IsNotEmpty()
    createdAt: string

    @IsString()
    @IsNotEmpty()
    lastEditted: string

    @IsString()
    @IsNotEmpty()
    changeMaker: string  




    @IsString()
    filename: string

    @IsString()
    filetype: string
    
    @IsString()
    filesize: string

    @IsString()
    link: string




    

    @IsString()
    user_id: string

    @IsString()
    client_id: string

    @IsString()
    os_id?: string

    @IsString()
    itemOs_id?: string

    @IsString()
    instrucao_id?: string


}