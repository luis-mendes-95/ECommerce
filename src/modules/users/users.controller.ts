/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserIsAdmGuard } from '../auth/userIsAdmGuard';
import { UserIsOwnerGuard } from '../auth/userIsOwnerGuard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('')
  @UseGuards(JwtAuthGuard, UserIsAdmGuard)
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, UserIsOwnerGuard )
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, UserIsOwnerGuard)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    
    return this.usersService.update(id, updateUserDto);
  }

  @HttpCode(204)
  @Delete(':id')
  @UseGuards(JwtAuthGuard, UserIsOwnerGuard)
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
