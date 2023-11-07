/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { VendaController } from './vendas-history.controller';
import { VendaHistoryRepository } from './repositories/vendas-history.repository';
import { PrismaService } from 'src/database/prisma.service';
import { VendasHistoriesPrismaRepository } from './repositories/prisma/vendas-histories-prisma.repository';
import { VendaHistoryService } from './vendas-history.service';

@Module({
  controllers: [VendaController],
  providers: [
    VendaHistoryService,
    PrismaService,
    {
      provide: VendaHistoryRepository,
      useClass: VendasHistoriesPrismaRepository
    }
  ],
  exports: [VendaHistoryService, VendaHistoryRepository],
})
export class VendaHistoryModule {}
