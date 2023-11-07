import { PartialType } from '@nestjs/mapped-types';
import { CreateInstrucaoDTO } from './create-instrucao.dto';

export class UpdateInstrucaoDto extends PartialType(CreateInstrucaoDTO) {}
