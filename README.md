# apirest_sistema_escola_mysql

ApiRest de um sistema de cadastro de alunos, construida no <a href="https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/" target="_blank">Curso de JavaScript e TypeScript do básico ao avançado</a> pela Udemy Academy, para aprendizado de criação de API com POO.

## Funções e recursos da Aplicação:
* Cadastro de Alunos e Usuários (CRUD).
* Upload de imagens.
* Utilização de Hash para proteção de senha.
* Migrations e Seeds de tabelas no Banco de Dados.
* Autenticação de usuários logados com JsonWebToken (JWT).

## Tecnologias usadas:
* BackEnd: *Node.js*
* Linguagem: *JavaScript*
* DataBase: *MySQL / MariaDB*
* DataBase framework: *Sequelize*

## Instalação e Execução do Projeto
1. Faça o download ou cópia deste repositório.
2. Instale o mySQL (MySQL Workbench de preferência) e crie um banco de dados (Schema) de nome <b>escola</b>.
3. Renomeie o arquivo ".env.example" para ".env", edite os dados contidos nele conforme as suas configurações do mySQL/MariaDB.
3.Faça as migrações das tabelas desta aplicação para o banco de dados. Na pasta raiz do projeto execute no CMD os comandos:
> npx sequelize db:migrate
> npx sequelize db:seed:all
4. Instalar dependências (é necessário ter Node em sua máquina, senão tiver: instale). Na pasta raiz do projeto execute no CMD o comando:
> npm install
Se tudo ocorrer bem, será criada a pasta *node_modules*, onde ficam os arquivos de dependências da aplicação
5. Executar o servidor. Na pasta raiz, após instalar as dependências, execute o comando:
> npm run dev
6. Se tudo ocorrer bem, o servidor estará de pé no endereço: http://localhost:3001

Os dados para a connexão com o DB é:
><p>schema: escola</p>
><p>usuário: root</p>
><p>senha: '' (sem senha)</p>
obs: Conferir dados do arquivo .env.example

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

### Rota para fotos de alunos:
<h5>/fotos/ -> POST</h5>

## Estrutura de Diretórios:
<pre>
  .editorconfig -> Arquivo de configurações do ambiente VS Code
  .eslintrc.js -> Arquivo Eslint para formatação e padronização do estilo de escrita do código
  nodemon.json -> Permite o import/export do ES6 no Node
  .sequelizerc -> Configurações dos caminhos do banco de dados, migrations e seeds.
  .env.example -> Arquivo de exemplo para o arquivo ".env". Renomeie para ".env", edite conforme a necessidade e siga as instruções para iniciar a API.
  app.js -> Configura o Express
  server.js -> Servidor da aplicação

  > uploads/images -> Guarda as imagens de uploads.
  > src -> Código fonte da aplicação
    > config -> Arquivos de configurações do banco de dados
    > controllers -> Arquivos controladores que gerenciam as requisições retornando os responses em json.
    > database -> Arquivos relacionados a base de dados: migrations e seeds
    > middlewares/loginRequired.js -> Verifica se o usuário já fez login e autoriza para acessar determinadas rotas/páginas
    > models -> Arquivos que modelam as tabelas no db
    > routes -> Contém os arquivos das rotas da aplicação
</pre>

## Dependências:
<pre>
<b>Hash pra senhas</b>
  bcryptjs

<b>Autenticação</b>
  jsonwebtoken

<b>Formatação de código</b>
  eslint
  eslint-config-airbnb-base
  eslint-plugin-import

<b>Servidor</b>
  express
  nodemon

<b>DataBase</b>
  sequelize-cli
  mariadb
  sequelize

<b>Upload de arquivos</b>
  multer

<b>Outros</b>
  dotenv
  sucrase
</pre>

Para sugestões, críticas e melhoramentos deste projeto, por favor entrar em contato comigo através dos links no meu perfil.
<p>Enthony Stevie</p>
