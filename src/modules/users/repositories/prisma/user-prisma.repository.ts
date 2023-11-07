/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { UsersRepository } from "../users.repository";
import { CreateUserDto } from "../../dto/create-user.dto";
import { UpdateUserDto } from "../../dto/update-user.dto";
import { User } from "../../entities/user.entity";
import { PrismaService } from "src/database/prisma.service";
import { plainToInstance } from "class-transformer";

@Injectable()
export class UsersPrismaRepository implements UsersRepository {
    constructor(private prisma: PrismaService){}

    async create(data: CreateUserDto): Promise<User> {
        const user = new User()
        Object.assign(user, {
            ...data
        })
    
        const newUser = await this.prisma.user.create({
            data: {...user}
        })

        newUser.tags = newUser.tags.filter(tag => tag !== 'Administrador');

        return plainToInstance(User, newUser)
    }

    async findAll(): Promise<User[]> {
        const users = await this.prisma.user.findMany()
        return users
    }

    async findOne(id: string): Promise<User> {
        const user = await this.prisma.user.findUnique({
                where: {id},
                include: {
                    versions: true,
                    clientes: true,
                    produtos: true,
                    estoques: true,
                    vendas: true,
                    receivables: true,
                    payables: true,
                    compras: true,
                    arquivos: true,
                    os: true,
                }
            })
        return plainToInstance(User, user)
        }

    async findByEmail(email: string): Promise<User> {
        const user = await this.prisma.user.findUnique({
            where: {email}
        })
    return user;
    }

    async update(id: string, data: UpdateUserDto): Promise<User> {
        const user = await this.prisma.user.update({
            where: {id},
            data: {...data}
        })
        return plainToInstance(User, user)
    }

    async delete(id: string): Promise<void> {
        await this.prisma.user.delete(
            {
                where: {id}
            }
        )
    }
    
}