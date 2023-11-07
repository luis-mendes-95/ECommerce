/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { OsController } from './os-history.controller';
import { OsHistoryRepository } from './repositories/os-history.repository';
import { PrismaService } from 'src/database/prisma.service';
import { OssHistoriesPrismaRepository } from './repositories/prisma/os-histories-prisma.repository';
import { OsHistoryService } from './os-history.service';

@Module({
  controllers: [OsController],
  providers: [
    OsHistoryService,
    PrismaService,
    {
      provide: OsHistoryRepository,
      useClass: OssHistoriesPrismaRepository
    }
  ],
  exports: [OsHistoryService, OsHistoryRepository],
})
export class OsHistoryModule {}
