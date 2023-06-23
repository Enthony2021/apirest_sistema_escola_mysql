# apirest_sistema_escola_mysql

ApiRest de um systema de cadastro de alunos, construida no <a href="https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/" target="_blank">Curso de JavaScript e TypeScript do básico ao avançado</a> pela Udemy Academy.

## Funções e recursos da Aplicação:
* Cadastro de Alunos (CRUD).
* Upload de imagens.
* Utilização de Hash para proteção de senha.
* Migrations e Seeds de tabelas no Banco de Dados.

## Tecnologias usadas:
* BackEnd: *Node.js*
* Linguagem: *JavaScript*
* DataBase: *MySQL / MariaDB*
* DataBase framework: *Sequelize*

## Instalação e Execução do Projeto
1. Faça o download ou cópia deste repositório.
2. Instale o mySQL (MySQL Workbench de preferência) e crie um banco de dados (Schema) de nome <b>escola</b>.
3.Faça as migrações das tabelas desta aplicação para o banco de dados. Na pasta raiz do projeto execute no CMD o comando:
> npx sequelize db:migrate
3. Instale o Node em sua máquina.
4. Instalar dependências. Na pasta raiz do projeto execute no CMD o comando:
> npm install
6. Executar o servidor. Na pasta raiz, após instalar as dependências, execute o comando:
>npm run dev
7. Se tudo ocorrer bem, o servidor estará de pé no endereço: http://localhost:3001

Os dados para a connexão com o DB é:
><p>schema: toughts</p>
><p>usuário: root</p>
><p>senha: '' (sem senha)</p>

## Rotas da Aplicação:

### Rota home da aplicação:
<h5>/ -> GET</h5>

### Rotas para usuário (users):
<h5>/users/ -> POST</h5>
<h5>/users/ -> PUT</h5>
<h5>/users/ -> DELETE</h5>

### Rota para alunos:
<h5>/alunos/ -> GET</h5>
<h5>/alunos/ -> POST</h5>
<h5>/alunos/:id -> PUT</h5>
<h5>/alunos/:id -> GET</h5>
<h5>/alunos/:id -> DELETE</h5>

### Rota para token:
<h5>/tokens/ -> POST</h5>

### Rota para fotos:
<h5>/fotos/ -> POST</h5>

## Estrutura de Diretórios:
<pre>
  .editorconfig -> Arquivo de configurações do ambiente VS Code
  .eslintrc.js -> Arquivo Eslint para formatação e padronização do estilo de escrita do código
  nodemon.json -> Permite o import/export do ES6 no Node
  app.js -> Configura o Express
  server.js -> Servidor
  .sequelizerc -> Configurações dos caminhos do banco de dados, migrations e seeds.

  > src -> Código fonte da aplicação
    > config -> Arquivos de configurações do banco de dados
    > routes -> Contém os arquivos das rotas da aplicação
    > controllers -> Arquivos controladores que gerenciam as requisições retornando os responses em json.
    > database -> Arquivos relacionados a base de dados: migrations e seeds
    > models -> Arquivos que modelam as tabelas no db


  > db/conn.js -> Arquivo de conecção com o banco de dados mysql através do sequelize
  > helpers/auth.js -> Verifica se o usuário permanece conectado


</pre>
