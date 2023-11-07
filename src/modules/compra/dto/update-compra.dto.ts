import { PartialType } from '@nestjs/mapped-types';
import { CreateCompraDTO } from './create-compra.dto';

export class UpdateCompraDto extends PartialType(CreateCompraDTO) {}
