/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ReceivableService } from './receivable.service';
import { CreateReceivableDTO } from './dto/create-receivable.dto';
import { group } from 'console';
import { UpdateReceivableDto } from './dto/update-receivable.dto';

@Controller('receivables')
export class ReceivableController {
  constructor(private readonly receivableService: ReceivableService) {}

  @Post('')
  create(@Body() createReceivableDTO: CreateReceivableDTO){
    return this.receivableService.create(createReceivableDTO)
  }

  @Get('')
  findAll(@Query('group') group: string | undefined) {
    return this.receivableService.findAll(group)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.receivableService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateReceivableDto) {
    return this.receivableService.update(id, data)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.receivableService.delete(id)
  }
}
