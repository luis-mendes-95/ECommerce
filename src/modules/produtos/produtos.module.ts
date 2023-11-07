/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { ProdutosRepository } from './repositories/produtos.repository';
import { PrismaService } from 'src/database/prisma.service';
import { ProdutosPrismaRepository } from './repositories/prisma/produto-prisma.repository';
import { ProdutosHistoriesModule } from '../produtos-histories/produtos-histories.module';
import { ProdutosHistoriesService } from '../produtos-histories/produtos-histories.service';

@Module({
  imports: [ProdutosHistoriesModule],
  controllers: [ProdutosController],
  providers: [
    ProdutosService, 
    PrismaService,
    {
      provide: ProdutosRepository,
      useClass: ProdutosPrismaRepository
    },
    ProdutosHistoriesService,
  ],
  exports: [ProdutosService],
})
export class ProdutosModule {}
