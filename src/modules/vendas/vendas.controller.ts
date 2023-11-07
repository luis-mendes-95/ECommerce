/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { VendaService } from './vendas.service';
import { CreateVendaDTO } from './dto/create-venda.dto';
import { group } from 'console';
import { UpdateVendaDto } from './dto/update-venda.dto';

@Controller('vendas')
export class VendaController {
  constructor(private readonly vendaService: VendaService) {}

  @Post('')
  create(@Body() createVendaDTO: CreateVendaDTO){
    return this.vendaService.create(createVendaDTO)
  }

  @Get('')
  findAll(@Query('group') group: string | undefined) {
    return this.vendaService.findAll(group)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendaService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateVendaDto) {
    return this.vendaService.update(id, data)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vendaService.delete(id)
  }
}
