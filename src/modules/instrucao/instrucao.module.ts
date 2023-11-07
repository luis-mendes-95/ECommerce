/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { InstrucaoService } from './instrucao.service';
import { InstrucaoController } from './instrucao.controller';
import { InstrucaoRepository } from './repositories/instrucao.repository';
import { PrismaService } from 'src/database/prisma.service';
import { InstrucaosPrismaRepository } from './repositories/prisma/instrucao-prisma.repository';
import { InstrucaoHistoryModule } from '../instrucao-histories/instrucao-history.module';
import { InstrucaoHistoryService } from '../instrucao-histories/instrucao-history.service';

@Module({
  imports: [InstrucaoHistoryModule],
  controllers: [InstrucaoController],
  providers: [
    InstrucaoService,
    PrismaService,
    {
      provide: InstrucaoRepository,
      useClass: InstrucaosPrismaRepository
    },
    InstrucaoHistoryService
  ],
})
export class InstrucaosModule {}
