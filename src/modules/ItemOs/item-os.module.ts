/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ItemOsService } from './item-os.service';
import { ItemOsController } from './item-os.controller';
import { ItemOsRepository } from './repositories/item-os.repository';
import { PrismaService } from 'src/database/prisma.service';
import { ItemOssPrismaRepository } from './repositories/prisma/item-os-prisma.repository';

@Module({
  controllers: [ItemOsController],
  providers: [
    ItemOsService,
    PrismaService,
    {
      provide: ItemOsRepository,
      useClass: ItemOssPrismaRepository
    },
  ],
})
export class ItemOssModule {}
