import { PartialType } from '@nestjs/mapped-types';
import { CreateOsDTO } from './create-os.dto';

export class UpdateOsDto extends PartialType(CreateOsDTO) {}
