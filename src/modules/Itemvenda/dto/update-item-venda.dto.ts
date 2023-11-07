import { PartialType } from '@nestjs/mapped-types';
import { CreateItemVendaDTO } from './create-item-venda.dto';

export class UpdateItemVendaDto extends PartialType(CreateItemVendaDTO) {}
