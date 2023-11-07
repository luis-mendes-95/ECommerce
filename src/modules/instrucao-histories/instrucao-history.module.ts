/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { InstrucaoController } from './instrucao-history.controller';
import { InstrucaoHistoryRepository } from './repositories/instrucao-history.repository';
import { PrismaService } from 'src/database/prisma.service';
import { InstrucaosHistoriesPrismaRepository } from './repositories/prisma/instrucao-histories-prisma.repository';
import { InstrucaoHistoryService } from './instrucao-history.service';

@Module({
  controllers: [InstrucaoController],
  providers: [
    InstrucaoHistoryService,
    PrismaService,
    {
      provide: InstrucaoHistoryRepository,
      useClass: InstrucaosHistoriesPrismaRepository
    }
  ],
  exports: [InstrucaoHistoryService, InstrucaoHistoryRepository],
})
export class InstrucaoHistoryModule {}
