/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { UsersHistoriesService } from './users-histories.service';
import { CreateUserHistoryDto } from './dto/create-user-history.dto';
import { UpdateUserHistoryDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserIsAdmGuard } from '../auth/userIsAdmGuard';
import { UserIsOwnerGuard } from '../auth/userIsOwnerGuard';

@Controller('users-histories')
export class UsersController {
  constructor(private readonly usersService: UsersHistoriesService) {}

  @Post('')
  create(@Body() createUserDto: CreateUserHistoryDto) {
    return this.usersService.create(createUserDto);
  }

}
