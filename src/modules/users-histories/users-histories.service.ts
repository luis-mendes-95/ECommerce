/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { CreateUserHistoryDto } from './dto/create-user-history.dto';
import { UpdateUserHistoryDto } from './dto/update-user.dto';
import { UsersHistoriesRepository } from './repositories/users-histories.repository';

@Injectable()
export class UsersHistoriesService {

  constructor(private usersHistoriesRepository: UsersHistoriesRepository) {}

  async create(createUserDto: CreateUserHistoryDto) {
 
    const user = await this.usersHistoriesRepository.create(createUserDto)

    return user
    
  }

}
