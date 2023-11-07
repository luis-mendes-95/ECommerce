import { Module } from '@nestjs/common';
import { ProdutosHistoriesService } from './produtos-histories.service';
import { ProdutosHistoriesController } from './produtos-histories.controller';
import { ProdutosHistoriesRepository } from './repositories/produto-history.repository';
import { ProdutosHistoriesInMemoryRepository } from './repositories/in-memory/produtos-histories.in-memory.repository';
import { ProdutosHistoriesPrismaRepository } from './repositories/prisma/produto-history.prisma.repository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [ProdutosHistoriesController],
  providers: [
    ProdutosHistoriesService,
    PrismaService,
    {
      provide: ProdutosHistoriesRepository,
      useClass: ProdutosHistoriesPrismaRepository
    }
  ],
  exports: [ProdutosHistoriesService, ProdutosHistoriesRepository],
})
export class ProdutosHistoriesModule {}
