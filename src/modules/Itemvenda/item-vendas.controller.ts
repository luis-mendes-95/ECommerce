/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ItemVendaService } from './item-vendas.service';
import { CreateItemVendaDTO } from './dto/create-item-venda.dto';
import { group } from 'console';
import { UpdateItemVendaDto } from './dto/update-item-venda.dto';

@Controller('itemVendas')
export class ItemVendaController {
  constructor(private readonly vendaService: ItemVendaService) {}

  @Post('')
  create(@Body() createItemVendaDTO: CreateItemVendaDTO){
    return this.vendaService.create(createItemVendaDTO)
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
  update(@Param('id') id: string, @Body() data: UpdateItemVendaDto) {
    return this.vendaService.update(id, data)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vendaService.delete(id)
  }
}
