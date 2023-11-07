import { PartialType } from '@nestjs/mapped-types';
import { CreateReceivableDTO } from './create-receivable.dto';

export class UpdateReceivableDto extends PartialType(CreateReceivableDTO) {}
