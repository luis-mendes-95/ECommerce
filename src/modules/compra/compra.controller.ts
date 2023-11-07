/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CompraService } from './compra.service';
import { CreateCompraDTO } from './dto/create-compra.dto';
import { group } from 'console';
import { UpdateCompraDto } from './dto/update-compra.dto';

@Controller('compras')
export class CompraController {
  constructor(private readonly compraService: CompraService) {}

  @Post('')
  create(@Body() createCompraDTO: CreateCompraDTO){
    return this.compraService.create(createCompraDTO)
  }

  @Get('')
  findAll(@Query('group') group: string | undefined) {
    return this.compraService.findAll(group)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.compraService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateCompraDto) {
    return this.compraService.update(id, data)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.compraService.delete(id)
  }
}
