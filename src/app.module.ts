/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersHistoriesModule } from "./modules/users-histories/users-histories.module"
import { ProdutosModule } from './modules/produtos/produtos.module';
import { ProdutosHistoriesModule } from './modules/produtos-histories/produtos-histories.module';
import { EstoqueModule } from './modules/estoque/estoque.module';
import { EstoqueHistoryModule } from './modules/estoque-histories/estoque-history.module';
import { VendasModule } from './modules/vendas/vendas.module';
import { VendaHistoryModule } from './modules/vendas-histories/vendas-history.module';
import { ItemVendasModule } from './modules/Itemvenda/item-vendas.module';
import { ClientesModule } from './modules/clientes/clientes.module';
import { ClienteHistoryModule } from './modules/clientes-histories/cliente-history.module';
import { OsModule } from './modules/os/os.module';
import { OsHistoryModule } from './modules/os-histories/os-history.module';
import { ItemOssModule } from './modules/ItemOs/item-os.module';
import { InstrucaosModule } from './modules/instrucao/instrucao.module';
import { InstrucaoHistoryModule } from './modules/instrucao-histories/instrucao-history.module';
import { FilesModule } from './modules/file/file.module';
import { ReceivablesModule } from './modules/receivable/receivable.module';
import { ComprasModule } from './modules/compra/compra.module';
import { PayablesModule } from './modules/payable/payable.module';


@Module({
  imports: [

    AuthModule,
    
    UsersHistoriesModule,
    UsersModule,

    ProdutosHistoriesModule,
    ProdutosModule,

    EstoqueModule,
    EstoqueHistoryModule,

    VendasModule,
    VendaHistoryModule,
    ItemVendasModule,

    ClientesModule,
    ClienteHistoryModule,

    OsModule,
    OsHistoryModule,
    ItemOssModule,

    InstrucaosModule,
    InstrucaoHistoryModule,

    FilesModule,

    ReceivablesModule,

    ComprasModule,

    PayablesModule
    

  ]
})
export class AppModule {}
