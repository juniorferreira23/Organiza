# Iniciando o projeto

## Clonando o repositório
```
git clone https://github.com/juniorferreira23/Organiza.git

```

## Instalando dependências
```
npm install
```

## Iniciando no localhost:3000

First, run the development server:

```bash
npm run dev
```



# Links de apoio
Link projeto prático Nextjs:
https://www.youtube.com/watch?v=mikoTbhH_Qg&t=1734s

Link de playlist de Nextjs:
https://www.youtube.com/watch?v=GjQB4aAhJ24&list=PLR8OzKI52ppWoTRvAmB_FQPPlHS0otV7V&pp=iAQB

Link de tasks trello:
https://trello.com/invite/b/66b8b236f9c65fa6c341f61f/ATTI397cf0f263d4cb96a9e546cd841e2be4DBBF5EDB/dev-organiza


# Documentação Tailwind para consultar as classes
https://tailwindcss.com/docs/text-color

# Biblioteca de componentes Daisyui
>>> Aqui você encontrará componentes prontos
https://daisyui.com/components/button/


# Sobre o Git/Github
Para os envolvidos no projeto quando forem desenvolver, basta clonar o projeto:

```
git clone <url_github>
```

Criar uma nova branch ou "linha de desenvolvimento paralelo":

```
git checkout -b <nome_da_nova_branch>
```

Desenvolve suas atividades nela e subir suas modificações:

```
git add .
```

```
git commit -m <nome_do_commit>
```

```
git push --set-upstream origin <nome_da_branch>
```

*LEMBRANDO QUE CASO VOCÊ JÁ TENHA CLONADO O PROJETO E VÁ EFETUAR NOVAS ALTERAÇÕES NO PROJETO EM OUTRO MOMENTO, PRECISARÁ ATUALIZAR O REPOSITORIO PRINCIPAL E CRIAR UMA NOVA BRANCH PARA QUE NÃO DÊ CONFLITO NO CÓDIGO*

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

Verificando Branchs
```
git branch
```

Apagando branch antiga
```
git branch -d <nome_da_branch>
```


## Vscode
Recomendo instalar as extensões Auto Close Tag, Auto import, Auto Rename Tag, Bracket Pair Color DLW, ES7+ React/Redux/React-native Snippets, ESlint, IntelliCode API Usage Examples, IntelliSense for CSS class names in HTML, npm intellisense, Prettier, Simple React Snippets, Tailwind CSS IntelliSense


# Sobre o Nextjs

## Roteamento
O diretorio App é nosso repositório principal de criação de páginas, dentro dele podemos criar subdiretórios no qual cada pasta será considerado uma página e para que o compilador reconheça como página basta criar um arquivo page.js para os componentes da página.

Já o arquivo layout.js serve para criar heranças configuraveis que uma pasta filho pode está recebendo um componente herdado.

## Páginas server e client

Por padrão as páginas criadas no nextjs são server side então elas atuam no lado do servidor.
Para configurar uma página client side precisa colocar "use client" no começo do arquivo layout.js

# Como criar os componentes

No diretório app>componentes você pode criar um componente com o intuito de reutiliza-lo, segue o passo a passo:

1- Criar um arquivo com o nome do componente
2- Criar a função do componente, exemplo:
    export default function <nome_do_componente>(props){
        return(
            Criar o html aqui dentro, lembrando que para deixar um componente
            dinâmico você passa o props.<nome_do_atributo> 
        )
    }

3- E ao instânciar o componente dentro dele passaa o atributo igual ao valor que ele irá
    receber, exemplo:

    <Componente nome="junior">

4- Para estilizar o componente use documentação do tailwind acima
