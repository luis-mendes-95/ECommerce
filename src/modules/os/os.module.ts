/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { OsService } from './os.service';
import { OsController } from './os.controller';
import { OsRepository } from './repositories/os.repository';
import { PrismaService } from 'src/database/prisma.service';
import { OssPrismaRepository } from './repositories/prisma/os-prisma.repository';
import { OsHistoryModule } from '../os-histories/os-history.module';
import { OsHistoryService } from '../os-histories/os-history.service';

@Module({
  imports: [OsHistoryModule],
  controllers: [OsController],
  providers: [
    OsService,
    PrismaService,
    {
      provide: OsRepository,
      useClass: OssPrismaRepository
    },
    OsHistoryService,
  ],
})
export class OsModule {}
