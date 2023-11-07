/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { InstrucaoHistoryService } from './instrucao-history.service';
import { CreateInstrucaoHistoryDTO } from './dto/create-instrucao-history.dto';
import { group } from 'console';

@Controller('instrucao-history')
export class InstrucaoController {
  constructor(private readonly instrucaoService: InstrucaoHistoryService) {}

  @Post('')
  create(@Body() createInstrucaoHistoryDTO: CreateInstrucaoHistoryDTO){
    return this.instrucaoService.create(createInstrucaoHistoryDTO)
  }

}
