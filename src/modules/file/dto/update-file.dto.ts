import { PartialType } from '@nestjs/mapped-types';
import { CreateFileDTO } from './create-file.dto';

export class UpdateFileDto extends PartialType(CreateFileDTO) {}
