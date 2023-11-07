import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { EstoqueHistoryService } from './estoque-history.service';
import { CreateEstoqueHistoryDTO } from './dto/create-estoque-history.dto';
import { group } from 'console';

@Controller('estoque-history')
export class EstoqueController {
  constructor(private readonly estoqueService: EstoqueHistoryService) {}

  @Post('')
  create(@Body() createEstoqueHistoryDTO: CreateEstoqueHistoryDTO){
    return this.estoqueService.create(createEstoqueHistoryDTO)
  }

}
