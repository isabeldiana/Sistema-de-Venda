# Projeto: Sistema de Retaguarda de Vendas

## Descrição Geral

O Sistema de Retaguarda de Vendas é uma aplicação backend desenvolvida utilizando Node.js com o framework Express e escrita em TypeScript. O sistema gerencia operações internas de uma loja, incluindo controle de estoque, informações de clientes e histórico de vendas. Utilizando o Prisma como ORM e PostgreSQL como banco de dados relacional para garantir uma integração eficiente e escalável.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de execução para JavaScript no servidor.
- **Express**: Framework web para Node.js, facilitando a criação de APIs RESTful.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática opcional, facilitando a manutenção e a escalabilidade do código.
- **PostgreSQL**: Banco de dados relacional robusto e escalável.
- **Prisma**: ORM moderno para TypeScript e Node.js, facilitando a interação com o banco de dados.
- **JWT (JSON Web Tokens)**: Para autenticação segura e gerenciamento de sessões.
- **Swagger**: Ferramenta para documentação de APIs RESTful.

## Funcionalidades

- Controle de estoque
- Gerenciamento de informações de clientes
- Histórico de vendas
- Integração com sistemas de pagamento.
- Autenticação segura com JWT

## Instalação

1. Clone o repositório:
    ```sh
    git clone git@github.com:isabeldiana/Sistema-Retarguarda.git
    ```

2. Navegue até o diretório do projeto:
    ```sh
    cd sistema-retarguarda-vendas
    ```

3. Instale as dependências:
    ```sh
    npm install
    ```

4. Configure o arquivo `.env` com suas variáveis de ambiente:
    ```sh
    cp .env.example .env
    ```

5. Execute as migrações do banco de dados:
    ```sh
    npx prisma migrate dev
    ```

6. Inicie o servidor:
    ```sh
    npm run dev
    ```

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor em modo de desenvolvimento.
- `npm run build`: Compila o projeto TypeScript para JavaScript.
- `npm start`: Inicia o servidor a partir do código compilado.

## Documentação da API

A documentação da API está disponível via Swagger. Após iniciar o servidor, acesse `/api-docs` para visualizar a documentação interativa.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou um pull request.


Desenvolvido por [Isabel Diana](https://github.com/isabeldiana)
