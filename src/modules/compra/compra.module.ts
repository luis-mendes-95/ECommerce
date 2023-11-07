/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CompraService } from './compra.service';
import { CompraController } from './compra.controller';
import { CompraRepository } from './repositories/compra.repository';
import { PrismaService } from 'src/database/prisma.service';
import { ComprasPrismaRepository } from './repositories/prisma/compra-prisma.repository';

@Module({
  imports: [],
  controllers: [CompraController],
  providers: [
    CompraService,
    PrismaService,
    {
      provide: CompraRepository,
      useClass: ComprasPrismaRepository
    },

  ],
})
export class ComprasModule {}
