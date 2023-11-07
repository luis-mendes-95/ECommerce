/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { FileRepository } from './repositories/file.repository';
import { PrismaService } from 'src/database/prisma.service';
import { FilesPrismaRepository } from './repositories/prisma/file-prisma.repository';

@Module({
  imports: [/*FileHistoryModule*/],
  controllers: [FileController],
  providers: [
    FileService,
    PrismaService,
    {
      provide: FileRepository,
      useClass: FilesPrismaRepository
    },
    //FileHistoryService
  ],
})
export class FilesModule {}
