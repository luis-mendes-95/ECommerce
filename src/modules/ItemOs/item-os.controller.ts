/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ItemOsService } from './item-os.service';
import { CreateItemOsDTO } from './dto/create-item-os.dto';
import { group } from 'console';
import { UpdateItemOsDto } from './dto/update-item-os.dto';

@Controller('itemOs')
export class ItemOsController {
  constructor(private readonly itemOsService: ItemOsService) {}

  @Post('')
  create(@Body() createItemOsDTO: CreateItemOsDTO){
    return this.itemOsService.create(createItemOsDTO)
  }

  @Get('')
  findAll(@Query('group') group: string | undefined) {
    return this.itemOsService.findAll(group)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemOsService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateItemOsDto) {
    return this.itemOsService.update(id, data)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemOsService.delete(id)
  }
}
