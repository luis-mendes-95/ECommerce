-- CreateTable
CREATE TABLE "user_histories" (
    "id" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "lastEditted" TEXT NOT NULL,
    "changeMaker" TEXT NOT NULL,
    "cpf_cnpj" TEXT NOT NULL,
    "nome_razao_social" TEXT NOT NULL,
    "apelido_nome_fantasia" TEXT NOT NULL,
    "tags" TEXT[],
    "inscricao_estadual" TEXT NOT NULL,
    "inscricao_municipal" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "celular" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "site" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "colaboradores" TEXT[],
    "fornecedores" TEXT[],
    "user_id" TEXT NOT NULL,

    CONSTRAINT "user_histories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "lastEditted" TEXT NOT NULL,
    "changeMaker" TEXT NOT NULL,
    "cpf_cnpj" TEXT NOT NULL,
    "nome_razao_social" TEXT NOT NULL,
    "apelido_nome_fantasia" TEXT NOT NULL,
    "tags" TEXT[],
    "inscricao_estadual" TEXT NOT NULL,
    "inscricao_municipal" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "celular" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "site" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "colaboradores" TEXT[],
    "fornecedores" TEXT[],

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_histories" (
    "id" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "changeMaker" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "cod" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "imagem_principal" TEXT,
    "imagens" TEXT[],
    "custo" TEXT NOT NULL,
    "preco" TEXT NOT NULL,
    "qtd" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "product_histories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produtos" (
    "id" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "lastEditted" TEXT NOT NULL,
    "changeMaker" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "cod" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "imagem_principal" TEXT,
    "imagens" TEXT[],
    "custo" TEXT NOT NULL,
    "preco" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "estoque_id" TEXT,

    CONSTRAINT "Produtos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estoque_histories" (
    "id" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "lastEditted" TEXT NOT NULL,
    "changeMaker" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "estoque_id" TEXT NOT NULL,

    CONSTRAINT "estoque_histories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estoques" (
    "id" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "lastEditted" TEXT NOT NULL,
    "changeMaker" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Estoques_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "venda_histories" (
    "id" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "lastEditted" TEXT NOT NULL,
    "changeMaker" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "itens" TEXT[],
    "os" TEXT[],
    "receivables" TEXT[],
    "payables" TEXT[],
    "colaborador" TEXT NOT NULL,
    "venda_id" TEXT NOT NULL,

    CONSTRAINT "venda_histories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vendas" (
    "id" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "lastEditted" TEXT NOT NULL,
    "changeMaker" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "colaborador" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Vendas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemVenda" (
    "id" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "lastEditted" TEXT NOT NULL,
    "changeMaker" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "venda_id" TEXT NOT NULL,
    "produto_id" TEXT NOT NULL,

    CONSTRAINT "ItemVenda_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "os_histories" (
    "id" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "lastEditted" TEXT NOT NULL,
    "changeMaker" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "itens" TEXT[],
    "instrucoes" TEXT[],
    "client" TEXT NOT NULL,
    "files" TEXT[],
    "payables" TEXT[],
    "receivables" TEXT[],
    "os_id" TEXT NOT NULL,

    CONSTRAINT "os_histories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "os" (
    "id" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "lastEditted" TEXT NOT NULL,
    "changeMaker" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "venda_id" TEXT,
    "client_id" TEXT NOT NULL,

    CONSTRAINT "os_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemOs" (
    "id" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "lastEditted" TEXT NOT NULL,
    "changeMaker" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "tipo_arte" TEXT NOT NULL,
    "colaboradores" TEXT[],
    "os_id" TEXT NOT NULL,
    "produto_id" TEXT NOT NULL,

    CONSTRAINT "ItemOs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "instrucao_histories" (
    "id" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "lastEditted" TEXT NOT NULL,
    "changeMaker" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "arquivos" TEXT[],
    "instrucao_id" TEXT NOT NULL,

    CONSTRAINT "instrucao_histories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Instrucoes" (
    "id" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "lastEditted" TEXT NOT NULL,
    "changeMaker" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "osId" TEXT NOT NULL,
    "itemOs_id" TEXT NOT NULL,

    CONSTRAINT "Instrucoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cliente_histories" (
    "id" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "lastEditted" TEXT NOT NULL,
    "changeMaker" TEXT NOT NULL,
    "cpf_cnpj" TEXT NOT NULL,
    "nome_razao_social" TEXT NOT NULL,
    "apelido_nome_fantasia" TEXT NOT NULL,
    "tags" TEXT[],
    "inscricao_estadual" TEXT NOT NULL,
    "inscricao_municipal" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "celular" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "site" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "vendas" TEXT[],
    "os" TEXT[],
    "arquivos" TEXT[],
    "receivables" TEXT[],
    "compras" TEXT[],
    "payables" TEXT[],
    "cliente_id" TEXT NOT NULL,

    CONSTRAINT "cliente_histories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "lastEditted" TEXT NOT NULL,
    "changeMaker" TEXT NOT NULL,
    "cpf_cnpj" TEXT NOT NULL,
    "nome_razao_social" TEXT NOT NULL,
    "apelido_nome_fantasia" TEXT NOT NULL,
    "tags" TEXT[],
    "inscricao_estadual" TEXT NOT NULL,
    "inscricao_municipal" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "celular" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "site" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "files" (
    "id" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "lastEditted" TEXT NOT NULL,
    "changeMaker" TEXT NOT NULL,
    "filename" TEXT NOT NULL,
    "filetype" TEXT NOT NULL,
    "filesize" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,
    "os_id" TEXT,
    "itemOs_id" TEXT,
    "instrucao_id" TEXT,

    CONSTRAINT "files_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "receivables" (
    "id" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "lastEditted" TEXT NOT NULL,
    "changeMaker" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "receivements" TEXT[],
    "description" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,
    "venda_id" TEXT,
    "os_id" TEXT,
    "itemOs_id" TEXT,

    CONSTRAINT "receivables_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Compra" (
    "id" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "lastEditted" TEXT NOT NULL,
    "changeMaker" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "supplier_id" TEXT NOT NULL,

    CONSTRAINT "Compra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payables" (
    "id" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "lastEditted" TEXT NOT NULL,
    "changeMaker" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "payments" TEXT[],
    "description" TEXT NOT NULL,
    "compra_id" TEXT,
    "user_id" TEXT,
    "client_id" TEXT,
    "vendaId" TEXT,
    "osId" TEXT,
    "itemOsId" TEXT,

    CONSTRAINT "payables_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CompraToProduto" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_CompraToProduto_AB_unique" ON "_CompraToProduto"("A", "B");

-- CreateIndex
CREATE INDEX "_CompraToProduto_B_index" ON "_CompraToProduto"("B");

-- AddForeignKey
ALTER TABLE "user_histories" ADD CONSTRAINT "user_histories_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_histories" ADD CONSTRAINT "product_histories_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produtos" ADD CONSTRAINT "Produtos_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produtos" ADD CONSTRAINT "Produtos_estoque_id_fkey" FOREIGN KEY ("estoque_id") REFERENCES "Estoques"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "estoque_histories" ADD CONSTRAINT "estoque_histories_estoque_id_fkey" FOREIGN KEY ("estoque_id") REFERENCES "Estoques"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estoques" ADD CONSTRAINT "Estoques_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "venda_histories" ADD CONSTRAINT "venda_histories_venda_id_fkey" FOREIGN KEY ("venda_id") REFERENCES "Vendas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vendas" ADD CONSTRAINT "Vendas_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vendas" ADD CONSTRAINT "Vendas_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemVenda" ADD CONSTRAINT "ItemVenda_venda_id_fkey" FOREIGN KEY ("venda_id") REFERENCES "Vendas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemVenda" ADD CONSTRAINT "ItemVenda_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "Produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "os_histories" ADD CONSTRAINT "os_histories_os_id_fkey" FOREIGN KEY ("os_id") REFERENCES "os"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "os" ADD CONSTRAINT "os_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "os" ADD CONSTRAINT "os_venda_id_fkey" FOREIGN KEY ("venda_id") REFERENCES "Vendas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "os" ADD CONSTRAINT "os_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemOs" ADD CONSTRAINT "ItemOs_os_id_fkey" FOREIGN KEY ("os_id") REFERENCES "os"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemOs" ADD CONSTRAINT "ItemOs_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "Produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "instrucao_histories" ADD CONSTRAINT "instrucao_histories_instrucao_id_fkey" FOREIGN KEY ("instrucao_id") REFERENCES "Instrucoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Instrucoes" ADD CONSTRAINT "Instrucoes_osId_fkey" FOREIGN KEY ("osId") REFERENCES "os"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Instrucoes" ADD CONSTRAINT "Instrucoes_itemOs_id_fkey" FOREIGN KEY ("itemOs_id") REFERENCES "ItemOs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cliente_histories" ADD CONSTRAINT "cliente_histories_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "files" ADD CONSTRAINT "files_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "files" ADD CONSTRAINT "files_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "files" ADD CONSTRAINT "files_os_id_fkey" FOREIGN KEY ("os_id") REFERENCES "os"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "files" ADD CONSTRAINT "files_itemOs_id_fkey" FOREIGN KEY ("itemOs_id") REFERENCES "ItemOs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "files" ADD CONSTRAINT "files_instrucao_id_fkey" FOREIGN KEY ("instrucao_id") REFERENCES "Instrucoes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "receivables" ADD CONSTRAINT "receivables_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "receivables" ADD CONSTRAINT "receivables_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "receivables" ADD CONSTRAINT "receivables_venda_id_fkey" FOREIGN KEY ("venda_id") REFERENCES "Vendas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "receivables" ADD CONSTRAINT "receivables_os_id_fkey" FOREIGN KEY ("os_id") REFERENCES "os"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "receivables" ADD CONSTRAINT "receivables_itemOs_id_fkey" FOREIGN KEY ("itemOs_id") REFERENCES "ItemOs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Compra" ADD CONSTRAINT "Compra_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Compra" ADD CONSTRAINT "Compra_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payables" ADD CONSTRAINT "payables_compra_id_fkey" FOREIGN KEY ("compra_id") REFERENCES "Compra"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payables" ADD CONSTRAINT "payables_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payables" ADD CONSTRAINT "payables_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payables" ADD CONSTRAINT "payables_vendaId_fkey" FOREIGN KEY ("vendaId") REFERENCES "Vendas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payables" ADD CONSTRAINT "payables_osId_fkey" FOREIGN KEY ("osId") REFERENCES "os"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payables" ADD CONSTRAINT "payables_itemOsId_fkey" FOREIGN KEY ("itemOsId") REFERENCES "ItemOs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompraToProduto" ADD CONSTRAINT "_CompraToProduto_A_fkey" FOREIGN KEY ("A") REFERENCES "Compra"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompraToProduto" ADD CONSTRAINT "_CompraToProduto_B_fkey" FOREIGN KEY ("B") REFERENCES "Produtos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
