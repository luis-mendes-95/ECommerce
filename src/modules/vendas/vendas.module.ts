/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { VendaService } from './vendas.service';
import { VendaController } from './vendas.controller';
import { VendaRepository } from './repositories/vendas.repository';
import { PrismaService } from 'src/database/prisma.service';
import { VendasPrismaRepository } from './repositories/prisma/vendas-prisma.repository';
import { VendaHistoryModule } from '../vendas-histories/vendas-history.module';
import { VendaHistoryService } from '../vendas-histories/vendas-history.service';

@Module({
  imports: [VendaHistoryModule],
  controllers: [VendaController],
  providers: [
    VendaService,
    PrismaService,
    {
      provide: VendaRepository,
      useClass: VendasPrismaRepository
    },
    VendaHistoryService,
  ],
})
export class VendasModule {}
