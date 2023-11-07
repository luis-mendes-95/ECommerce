/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { FileRepository } from "../file.repository";
import { CreateFileDTO } from "../../dto/create-file.dto";
import { File } from "../../entities/file.entity";
import { PrismaService } from "src/database/prisma.service";
import { plainToInstance } from "class-transformer";
import { UpdateFileDto } from "../../dto/update-file.dto";
import { randomUUID } from "node:crypto";

@Injectable()
export class FilesPrismaRepository implements FileRepository {
    
    constructor(private prisma: PrismaService){}
    async delete(id: string): Promise<void> {
        await this.prisma.file.delete({
            where: { id },
        });
    }

    async update(id: string, data: UpdateFileDto): Promise<File> {

        const file = await this.prisma.file.update({
            where: {id},
            data: {...data}
        })

        return plainToInstance(File, file)
    }

    async create(data: CreateFileDTO): Promise<File> {
        const file = new File()
        Object.assign(file, {
            ...data
        })

        const newFile = await this.prisma.file.create({
            data: {...file}
        })

        return plainToInstance(File, newFile)
    }

    async findOne(id: string): Promise<File> {
        const file = await this.prisma.file.findUnique({
            where: { id },
            include: {
                client: true,
                instrucao: true,
                itemOs: true,
                os: true,
                user: true
            }
        });
        return plainToInstance(File, file)
    }

    async findAll(group: string): Promise<object | File[]> {
        const files = await this.prisma.file.findMany()
        return plainToInstance(File, files)
    }
    
}