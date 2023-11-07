/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { InstrucaoService } from './instrucao.service';
import { CreateInstrucaoDTO } from './dto/create-instrucao.dto';
import { group } from 'console';
import { UpdateInstrucaoDto } from './dto/update-instrucao.dto';

@Controller('instrucoes')
export class InstrucaoController {
  constructor(private readonly instrucaoService: InstrucaoService) {}

  @Post('')
  create(@Body() createInstrucaoDTO: CreateInstrucaoDTO){
    return this.instrucaoService.create(createInstrucaoDTO)
  }

  @Get('')
  findAll(@Query('group') group: string | undefined) {
    return this.instrucaoService.findAll(group)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.instrucaoService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateInstrucaoDto) {
    return this.instrucaoService.update(id, data)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.instrucaoService.delete(id)
  }
}
