/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserIsAdmGuard } from '../auth/userIsAdmGuard';
import { UserIsOwnerGuard } from '../auth/userIsOwnerGuard';
import { UserIsProductOwnerGuard } from '../auth/userIsProductOwnerGuard';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post('')
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtosService.create(createProdutoDto);
  }

  @Get('')
  @UseGuards(JwtAuthGuard, UserIsAdmGuard)
  findAll() {
    return this.produtosService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, UserIsProductOwnerGuard )
  findOne(@Param('id') id: string) {
    return this.produtosService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateProdutoDto) {
    return this.produtosService.update(id, updateUserDto);
  }

  @HttpCode(204)
  @Delete(':id')
  @UseGuards(JwtAuthGuard, UserIsProductOwnerGuard)
  remove(@Param('id') id: string) {
    return this.produtosService.remove(id);
  }
}
