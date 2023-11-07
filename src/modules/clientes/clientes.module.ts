/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ClienteService } from './clientes.service';
import { ClienteController } from './clientes.controller';
import { ClienteRepository } from './repositories/clientes.repository';
import { PrismaService } from 'src/database/prisma.service';
import { ClientesPrismaRepository } from './repositories/prisma/cliente-prisma.repository';
import { ClienteHistoryModule } from '../clientes-histories/cliente-history.module';
import { ClienteHistoryService } from '../clientes-histories/cliente-history.service';

@Module({
  imports: [ClienteHistoryModule],
  controllers: [ClienteController],
  providers: [
    ClienteService,
    PrismaService,
    {
      provide: ClienteRepository,
      useClass: ClientesPrismaRepository
    },
    ClienteHistoryService,
  ],
})
export class ClientesModule {}
