import { Body, Controller, Post } from '@nestjs/common';
import { ProdutosHistoriesService } from './produtos-histories.service';
import { CreateProdutoHistoryDTO } from './dto/create-produto-history.dto';

@Controller('produtos-histories')
export class ProdutosHistoriesController {
  constructor(private readonly produtosHistoriesService: ProdutosHistoriesService) {}

  @Post()
  async create(@Body() createProdutoHistoryDTO: CreateProdutoHistoryDTO) {
    const produtoHistory = await this.produtosHistoriesService.create(createProdutoHistoryDTO);
    return produtoHistory;
  }
  
}
