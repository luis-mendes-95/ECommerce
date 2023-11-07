import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { CreateEstoqueDTO } from './dto/create-estoque.dto';
import { group } from 'console';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';

@Controller('estoque')
export class EstoqueController {
  constructor(private readonly estoqueService: EstoqueService) {}

  @Post('')
  create(@Body() createEstoqueDTO: CreateEstoqueDTO){
    return this.estoqueService.create(createEstoqueDTO)
  }

  @Get('')
  findAll(@Query('group') group: string | undefined) {
    return this.estoqueService.findAll(group)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estoqueService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateEstoqueDto) {
    return this.estoqueService.update(id, data)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estoqueService.delete(id)
  }
}
