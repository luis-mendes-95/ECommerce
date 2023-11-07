/* eslint-disable prettier/prettier */
import { plainToInstance } from 'class-transformer';
import { CreateUserHistoryDto } from '../../dto/create-user-history.dto';
import { UpdateUserHistoryDto } from '../../dto/update-user.dto';
import { UserHistory } from '../../entities/user-history.entity';
import { UsersHistoriesRepository } from '../users-histories.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersHistoriesInMemoryRepository implements UsersHistoriesRepository {


  private database: UserHistory[] = [];

  create(data: CreateUserHistoryDto): UserHistory | Promise<UserHistory> {

    const newUserHistory = new UserHistory();

    Object.assign(newUserHistory, {
      ...data,
    });

    this.database.push(newUserHistory);

    return plainToInstance(UserHistory, newUserHistory);
  }
 
  findAll(): UserHistory[] | Promise<UserHistory[]> {
    return plainToInstance(UserHistory, this.database)
  }
  
  findOne(id: string): UserHistory | Promise<UserHistory> {
    const user = this.database.find((user) => user.id === id)
    return plainToInstance(UserHistory, user);
  }

  findByEmail(email: string): UserHistory | Promise<UserHistory> {
    const user = this.database.find((user) => user.email === email)
    return plainToInstance(UserHistory, user);
  }

  update(id: string, data: UpdateUserHistoryDto): UserHistory | Promise<UserHistory> {
    const userIndex = this.database.findIndex(user => user.id === id)
    this.database[userIndex] = {
      ...this.database[userIndex],
      ...data
    }
    return plainToInstance(UserHistory, this.database[userIndex])
  }
  
  delete(id: string): void | Promise<void> {
    const userIndex = this.database.findIndex(user => user.id === id)
    this.database.splice(userIndex, 1)
  }
}
