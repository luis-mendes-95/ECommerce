/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { PayableService } from './payable.service';
import { CreatePayableDTO } from './dto/create-payable.dto';
import { group } from 'console';
import { UpdatePayableDto } from './dto/update-payable.dto';

@Controller('payables')
export class PayableController {
  constructor(private readonly payableService: PayableService) {}

  @Post('')
  create(@Body() createPayableDTO: CreatePayableDTO){
    return this.payableService.create(createPayableDTO)
  }

  @Get('')
  findAll(@Query('group') group: string | undefined) {
    return this.payableService.findAll(group)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.payableService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdatePayableDto) {
    return this.payableService.update(id, data)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.payableService.delete(id)
  }
}
