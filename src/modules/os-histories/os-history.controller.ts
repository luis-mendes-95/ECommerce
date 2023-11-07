/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { OsHistoryService } from './os-history.service';
import { CreateOsHistoryDTO } from './dto/create-os-history.dto';
import { group } from 'console';

@Controller('os-history')
export class OsController {
  constructor(private readonly osService: OsHistoryService) {}

  @Post('')
  create(@Body() createOsHistoryDTO: CreateOsHistoryDTO){
    return this.osService.create(createOsHistoryDTO)
  }

}
