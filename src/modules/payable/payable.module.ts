/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PayableService } from './payable.service';
import { PayableController } from './payable.controller';
import { PayableRepository } from './repositories/payable.repository';
import { PrismaService } from 'src/database/prisma.service';
import { PayablesPrismaRepository } from './repositories/prisma/payable-prisma.repository';

@Module({
  imports: [],
  controllers: [PayableController],
  providers: [
    PayableService,
    PrismaService,
    {
      provide: PayableRepository,
      useClass: PayablesPrismaRepository
    },
  ],
})
export class PayablesModule {}
