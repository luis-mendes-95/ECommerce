/* eslint-disable prettier/prettier */
import { CreateUserHistoryDto } from "../dto/create-user-history.dto";
import { UpdateUserHistoryDto } from "../dto/update-user.dto";
import { UserHistory } from "../entities/user-history.entity";

export abstract class UsersHistoriesRepository {
    abstract create(data: CreateUserHistoryDto): Promise<UserHistory> | UserHistory;
}