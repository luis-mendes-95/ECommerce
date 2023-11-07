import { Module } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { EstoqueController } from './estoque.controller';
import { EstoqueRepository } from './repositories/estoque.repository';
import { PrismaService } from 'src/database/prisma.service';
import { EstoquesPrismaRepository } from './repositories/prisma/estoques-prisma.repository';
import { EstoqueHistoryModule } from '../estoque-histories/estoque-history.module';
import { EstoqueHistoryService } from '../estoque-histories/estoque-history.service';

@Module({
  imports: [EstoqueHistoryModule],
  controllers: [EstoqueController],
  providers: [
    EstoqueService,
    PrismaService,
    {
      provide: EstoqueRepository,
      useClass: EstoquesPrismaRepository
    },
    EstoqueHistoryService,
  ],
})
export class EstoqueModule {}
