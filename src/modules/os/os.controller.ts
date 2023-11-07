/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { OsService } from './os.service';
import { CreateOsDTO } from './dto/create-os.dto';
import { group } from 'console';
import { UpdateOsDto } from './dto/update-os.dto';

@Controller('os')
export class OsController {
  constructor(private readonly osService: OsService) {}

  @Post('')
  create(@Body() createOsDTO: CreateOsDTO){
    return this.osService.create(createOsDTO)
  }

  @Get('')
  findAll(@Query('group') group: string | undefined) {
    return this.osService.findAll(group)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.osService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateOsDto) {
    return this.osService.update(id, data)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.osService.delete(id)
  }
}
