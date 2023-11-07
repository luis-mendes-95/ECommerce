import { PartialType } from '@nestjs/mapped-types';
import { CreateEstoqueDTO } from './create-estoque.dto';

export class UpdateEstoqueDto extends PartialType(CreateEstoqueDTO) {}
