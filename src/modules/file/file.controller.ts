/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { FileService } from './file.service';
import { CreateFileDTO } from './dto/create-file.dto';
import { group } from 'console';
import { UpdateFileDto } from './dto/update-file.dto';

@Controller('files')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('')
  create(@Body() createFileDTO: CreateFileDTO){
    return this.fileService.create(createFileDTO)
  }

  @Get('')
  findAll(@Query('group') group: string | undefined) {
    return this.fileService.findAll(group)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fileService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateFileDto) {
    return this.fileService.update(id, data)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fileService.delete(id)
  }
}
