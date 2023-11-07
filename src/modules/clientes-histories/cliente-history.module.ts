/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ClienteController } from './cliente-history.controller';
import { ClienteHistoryRepository } from './repositories/clientes-history.repository';
import { PrismaService } from 'src/database/prisma.service';
import { ClientesHistoriesPrismaRepository } from './repositories/prisma/clientes-histories-prisma.repository';
import { ClienteHistoryService } from './cliente-history.service';

@Module({
  controllers: [ClienteController],
  providers: [
    ClienteHistoryService,
    PrismaService,
    {
      provide: ClienteHistoryRepository,
      useClass: ClientesHistoriesPrismaRepository
    }
  ],
  exports: [ClienteHistoryService, ClienteHistoryRepository],
})
export class ClienteHistoryModule {}
