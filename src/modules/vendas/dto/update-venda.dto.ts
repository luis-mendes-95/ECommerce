import { PartialType } from '@nestjs/mapped-types';
import { CreateVendaDTO } from './create-venda.dto';

export class UpdateVendaDto extends PartialType(CreateVendaDTO) {}
