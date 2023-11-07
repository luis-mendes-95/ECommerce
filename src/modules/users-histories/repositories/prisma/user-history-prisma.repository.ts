/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { UsersHistoriesRepository } from "../users-histories.repository";
import { CreateUserHistoryDto } from "../../dto/create-user-history.dto";
import { UpdateUserHistoryDto } from "../../dto/update-user.dto";
import { UserHistory } from "../../entities/user-history.entity";
import { PrismaService } from "src/database/prisma.service";
import { plainToInstance } from "class-transformer";

@Injectable()
export class UsersHistoriesPrismaRepository implements UsersHistoriesRepository {
    constructor(private prisma: PrismaService){}

    async create(data: CreateUserHistoryDto): Promise<UserHistory> {
        const userHistory = new UserHistory()
        Object.assign(userHistory, {
            ...data
        })
    
        const newUser = await this.prisma.userHistory.create({
            data: {...userHistory}
        })

        return plainToInstance(UserHistory, newUser)
    }
    
}