/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';
import { UsersHistoriesRepository } from '../users-histories/repositories/users-histories.repository';

@Injectable()
export class UsersService {

  constructor(private usersRepository: UsersRepository, private usersHistoriesRepository: UsersHistoriesRepository) {}

  async create(createUserDto: CreateUserDto) {

    if (createUserDto.tags && createUserDto.tags.includes('Administrador')) {
      createUserDto.tags = createUserDto.tags.filter(tag => tag !== 'Administrador');
  }

  const agora = new Date();
  const dia = agora.getDate().toString().padStart(2, '0'); 
  const mes = (agora.getMonth() + 1).toString().padStart(2, '0'); 
  const ano = agora.getFullYear();
  const horas = agora.getHours().toString().padStart(2, '0'); 
  const minutos = agora.getMinutes().toString().padStart(2, '0');

  const dataFormatada = `${dia}-${mes}-${ano} ${horas}:${minutos}`;

  createUserDto.createdAt = dataFormatada
  createUserDto.lastEditted = dataFormatada
    
    const findUser = await this.usersRepository.findByEmail(createUserDto.email)
    if(findUser){
      throw new ConflictException('User already exists')
    }
    const user = await this.usersRepository.create(createUserDto)

    return user
    
  }

  async findAll() {
    const users = await this.usersRepository.findAll();
    return users
  }

  async findOne(id: string) {
    const user = await this.usersRepository.findOne(id)
    if(!user){
      throw new NotFoundException("User not found!")
    }
    return user
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findByEmail(email)
    if(!user){
      throw new NotFoundException("email not found!")
    }
    return user
  }

  async update(id: string, updateUserDto: UpdateUserDto) {

    const userToHistory: any = await this.usersRepository.findOne(id)

    const agora = new Date();
    const dia = agora.getDate().toString().padStart(2, '0'); 
    const mes = (agora.getMonth() + 1).toString().padStart(2, '0'); 
    const ano = agora.getFullYear();
    const horas = agora.getHours().toString().padStart(2, '0'); 
    const minutos = agora.getMinutes().toString().padStart(2, '0');

    const dataFormatada = `${dia}-${mes}-${ano} ${horas}:${minutos}`;

    delete userToHistory.senha
    delete userToHistory.id
    delete userToHistory.versions
    delete userToHistory.produtos
    delete userToHistory.clientes
    delete userToHistory.estoques
    delete userToHistory.vendas

    userToHistory.user_id = id
    userToHistory.lastEditted = dataFormatada

    const user = await this.usersRepository.update(id, updateUserDto)

    await this.usersHistoriesRepository.create(userToHistory)

    

    if(!user){
      throw new NotFoundException("User not found!")
    }
    return user
  }

  async remove(id: string) {
    await this.usersRepository.delete(id);
    return
  }
}
