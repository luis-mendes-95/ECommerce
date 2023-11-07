/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ClienteService } from './clientes.service';
import { CreateClienteDTO } from './dto/create-cliente.dto';
import { group } from 'console';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post('')
  create(@Body() createClienteDTO: CreateClienteDTO){
    return this.clienteService.create(createClienteDTO)
  }

  @Get('')
  findAll(@Query('group') group: string | undefined) {
    return this.clienteService.findAll(group)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clienteService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateClienteDto) {
    return this.clienteService.update(id, data)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clienteService.delete(id)
  }
}
