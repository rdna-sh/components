# Novacap UI Componentes

Repositório com os componentes que serão utilizados nos projetos da [Novacap](https://www.novacap.df.gov.br/a-novacap/)

## Pré-requisitos
- Node 18^

## Instalação

- Execute o comando abaixo para instalar as dependências
```bash
npm install 
```

- Execute o comando abaixo para rodar a aplicação
```bash
npm run storybook
```
O projeto será aberto em [localhost:8000](localhost:6006/). Caso não esteja familiarizado com o Storybook, você pode ler a [documentação deles aqui](https://storybook.js.org/docs/writing-docs/autodocs).


## Publicação

Ok, se você chegou aqui, esta querendo publicar uma nova versão do pacote. Para isso, siga os passos abaixo.

- Primeiro, abra o arquivo `package.json` e atualize a versão do projeto
```json
{
  "version": "sua nova versão"
}
```

- Feito isso, execute o comando abaixo para buildar suas alterações.
```bash
    npm run build
```

- Se você chegou até, agora você precisa publicar seu pacote. Caso você ainda não esteja logado no [npm](https://www.npmjs.com/), faça login com o comando abaixo.
```bash
npm login
```
- Também é necessário que você tenha permissão no npm para atualizar o pacote. Caso você não tenha, falar com algum superior da Novacap.

- Excute o comando abaixo para publicar sua nova verão.

```bash
npm publish
```

- OK, versão publicada. Para baixar sua nova versão, será o comando abaixo
```
npm i novacap-ui-components@sua-versao
```