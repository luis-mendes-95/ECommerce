import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDTO } from './create-cliente.dto';

export class UpdateClienteDto extends PartialType(CreateClienteDTO) {}
