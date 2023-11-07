/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersHistoriesService } from './users-histories.service';
import { UsersController } from './users-histories.controller';
import { UsersHistoriesRepository } from './repositories/users-histories.repository';
import { PrismaService } from 'src/database/prisma.service';
import { UsersHistoriesPrismaRepository } from './repositories/prisma/user-history-prisma.repository';

@Module({
  controllers: [UsersController],
  providers: [
    UsersHistoriesService, 
    PrismaService,
    {
      provide: UsersHistoriesRepository,
      useClass: UsersHistoriesPrismaRepository
    }
  ],
  exports: [UsersHistoriesService, UsersHistoriesRepository],
})
export class UsersHistoriesModule {}
