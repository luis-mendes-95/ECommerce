/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { VendaHistoryService } from './vendas-history.service';
import { CreateVendaHistoryDTO } from './dto/create-venda-history.dto';
import { group } from 'console';

@Controller('venda-history')
export class VendaController {
  constructor(private readonly vendaService: VendaHistoryService) {}

  @Post('')
  create(@Body() createVendaHistoryDTO: CreateVendaHistoryDTO){
    return this.vendaService.create(createVendaHistoryDTO)
  }

}
