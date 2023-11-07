/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './repositories/users.repository';
import { PrismaService } from 'src/database/prisma.service';
import { UsersPrismaRepository } from './repositories/prisma/user-prisma.repository';
import { UsersHistoriesModule } from '../users-histories/users-histories.module';
import { UsersHistoriesService } from '../users-histories/users-histories.service';

@Module({
  imports: [UsersHistoriesModule],
  controllers: [UsersController],
  providers: [
    UsersService, 
    PrismaService,
    {
      provide: UsersRepository,
      useClass: UsersPrismaRepository
    },
    UsersHistoriesService,
  ],
  exports: [UsersService],
})
export class UsersModule {}
