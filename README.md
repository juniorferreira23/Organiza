shadcn


# Links de apoio
Link projeto prático Nextjs:
https://www.youtube.com/watch?v=mikoTbhH_Qg&t=1734s

Link de playlist de Nextjs:
https://www.youtube.com/watch?v=GjQB4aAhJ24&list=PLR8OzKI52ppWoTRvAmB_FQPPlHS0otV7V&pp=iAQB

Link de tasks trello:
https://trello.com/invite/b/66b8b236f9c65fa6c341f61f/ATTI397cf0f263d4cb96a9e546cd841e2be4DBBF5EDB/dev-organiza

# Documentação Tailwind para consultar as classes
https://tailwindcss.com/docs/text-color


# Sobre o Git/Github
Para os envolvidos no projeto quando forem desenvolver, basta clonar o projeto:

```
git clone <url-github>
```

Criar uma nova branch ou "linha de desenvolvimento paralelo":

```
git checkout -b <nome_da_nova_branch>
```

Desenvolve suas atividades nela e sobe suas modificações:

```
git add .
```

```
git commit -m <nome_do_commit>
```

```
git push --set-upstream origin <nome_da_branch>
```

*LEMBRANDO QUE CASO VOCÊ JÁ TENHA CLONADO O PROJETO E VÁ MEXER NO PROJETO EM OUTRO MOMENTO PRECISA ATUALIZAR O REPOSITORIO PRINCIPAL E CRIAR UMA NOVA BRANCH PARA QUE NÃO DÊ CONFLITO NO CÓDIGO*

Indo para a branch main:
```
git checkout main
```

Recendo atualizações do repositorio main no repositorio local
```
git pull
```

Criando uma nova branch para trabalhar
```
git checkout -b <nome_da_nova_branch>
```


# Iniciando o projeto

## Vscode
Recomendo instalar o pack de extensões  NextJS Developer Extensions Pack
Após instalar desabilite a extensão Blockman - Highlight Nested Code Blocks

## Instalando dependências
```
npm install
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# Sobre o Nextjs

## Roteamento
O diretorio App é nosso repositório principal de criação de páginas, dentro dele podemos criar subdiretórios no qual cada pasta será considerado uma página e para que o compilador reconheça como página basta criar um arquivo page.js para os componentes da página.

Já o arquivo layout.js serve para criar heranças configuraveis que uma pasta filho pode está recebendo um componente herdado.

## Páginas server e client

Por padrão as páginas criadas no nextjs são server side então elas atuam no lado do servidor.
Para configurar uma página client side precisa colocar "use client" no começo do arquivo layout.js

