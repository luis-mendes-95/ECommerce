/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ItemVendaService } from './item-vendas.service';
import { ItemVendaController } from './item-vendas.controller';
import { ItemVendaRepository } from './repositories/item-vendas.repository';
import { PrismaService } from 'src/database/prisma.service';
import { ItemVendasPrismaRepository } from './repositories/prisma/item-vendas-prisma.repository';

@Module({
  controllers: [ItemVendaController],
  providers: [
    ItemVendaService,
    PrismaService,
    {
      provide: ItemVendaRepository,
      useClass: ItemVendasPrismaRepository
    },
  ],
})
export class ItemVendasModule {}
