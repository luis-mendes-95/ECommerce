import { Module } from '@nestjs/common';
import { EstoqueController } from './estoque-history.controller';
import { EstoqueHistoryRepository } from './repositories/estoque-history.repository';
import { PrismaService } from 'src/database/prisma.service';
import { EstoquesHistoriesPrismaRepository } from './repositories/prisma/estoques-histories-prisma.repository';
import { EstoqueHistoryService } from './estoque-history.service';

@Module({
  controllers: [EstoqueController],
  providers: [
    EstoqueHistoryService,
    PrismaService,
    {
      provide: EstoqueHistoryRepository,
      useClass: EstoquesHistoriesPrismaRepository
    }
  ],
  exports: [EstoqueHistoryService, EstoqueHistoryRepository],
})
export class EstoqueHistoryModule {}
