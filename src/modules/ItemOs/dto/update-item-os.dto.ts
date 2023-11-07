import { PartialType } from '@nestjs/mapped-types';
import { CreateItemOsDTO } from './create-item-os.dto';

export class UpdateItemOsDto extends PartialType(CreateItemOsDTO) {}
