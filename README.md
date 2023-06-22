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
2. Instale o mySQL (MySQL Workbench de preferência) e crie um banco de dados (Schema) de nome <b>toughts</b>.
3. Instale o Node em sua máquina.
4. Instalar dependências. Na pasta raiz do projeto execute no CMD o comando:
> npm install
6. Executar o servidor. Na pasta raiz, após instalar as dependências, execute o comando:
>npm run dev
7. Se tudo ocorrer bem, acesse a aplicação no endereço: http://localhost:3001

Os dados para a connexão com o DB é:
><p>schema: toughts</p>
><p>usuário: root</p>
><p>senha: '' (sem senha)</p>

## Estrutura de Diretórios:
<pre>
  .editorconfig -> Arquivo de configurações do ambiente VS Code
  .eslintrc.js -> Arquivo Eslint para formatação e padronização do estilo de escrita do código
  nodemon.json -> Permite o import/export do ES6 no Node
  app.js -> Configura o Express
  server.js -> Servidor
  .sequelizerc -> Configurações dos caminhos do banco de dados, migrations e seeds.
  
  
  > src -> Código fonte da aplicação 
    > routes -> Contém os arquivos das rotas da aplicação
    > controllers -> Arquivos controladores que gerenciam as requisições retornando os responses em json. 
  
  > db/conn.js -> Arquivo de conecção com o banco de dados mysql através do sequelize 
  > helpers/auth.js -> Verifica se o usuário permanece conectado
  > models -> Arquivos que modelam as tabelas no db
  
</pre>
