/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ReceivableService } from './receivable.service';
import { ReceivableController } from './receivable.controller';
import { ReceivableRepository } from './repositories/receivable.repository';
import { PrismaService } from 'src/database/prisma.service';
import { ReceivablesPrismaRepository } from './repositories/prisma/receivable-prisma.repository';

@Module({
  imports: [],
  controllers: [ReceivableController],
  providers: [
    ReceivableService,
    PrismaService,
    {
      provide: ReceivableRepository,
      useClass: ReceivablesPrismaRepository
    },
  ],
})
export class ReceivablesModule {}
