/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ClienteHistoryService } from './cliente-history.service';
import { CreateClienteHistoryDTO } from './dto/create-cliente-history.dto';
import { group } from 'console';

@Controller('cliente-history')
export class ClienteController {
  constructor(private readonly clienteService: ClienteHistoryService) {}

  @Post('')
  create(@Body() createClienteHistoryDTO: CreateClienteHistoryDTO){
    return this.clienteService.create(createClienteHistoryDTO)
  }

}
