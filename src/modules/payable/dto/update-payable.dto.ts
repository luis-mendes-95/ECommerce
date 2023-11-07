import { PartialType } from '@nestjs/mapped-types';
import { CreatePayableDTO } from './create-payable.dto';

export class UpdatePayableDto extends PartialType(CreatePayableDTO) {}
