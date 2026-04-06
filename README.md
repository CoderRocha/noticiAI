## NoticiAI

O NoticiAI é um portal de notícias, onde o usuário navega por categorias e visualiza as manchetes e artigos mais recentes de um determinado país e idioma.

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Stack](#stack)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Executando o Projeto](#executando-o-projeto)
- [Configurações](#configurações)
- [Autor](#autor)

## Sobre o Projeto

O **NoticiAI** é um portal de notícias em tempo real. O usuário seleciona uma categoria no menu lateral e visualiza a manchete principal e até 6 artigos relacionados, todos consumidos via API GNews. Ao clicar em qualquer artigo, um modal é exibido com os detalhes completos, como: título, fonte, data, conteúdo e link para a matéria original.

## Funcionalidades

- **Feed de notícias**
  - Exibição de uma manchete principal em destaque.
  - Grade com até 6 artigos secundários por categoria.

- **Categorias**
  - Navegação por 9 categorias: `general`, `world`, `business`, `technology`, `entertainment`, `sports`, `science`, `health` e `nation`.
  - Atualização automática do feed ao selecionar uma nova categoria.

- **Modal de artigo**
  - Exibição de imagem, título, fonte, data formatada e conteúdo do artigo.
  - Link direto para a matéria completa no veículo de origem.

## Stack

- **Frontend**
  - **React**
  - **Vite**
  - **Axios**

## Estrutura do Projeto

- **`src/`**
  - **`App.jsx`**
  - **`main.jsx`**
  - **`index.css`**
  - **`Components/News.jsx`**
  - **`Components/News.css`**
  - **`Components/NewsModal.jsx`**
  - **`Components/NewsModal.css`**
  - **`assets/images/`**

## Instalação

Pré-requisitos:

- **Node.js**
- API Key **GNews** ([gnews.io](https://gnews.io))

1. **Instalar as dependências**

   ```bash
   npm install
   ```

2. **Criar o arquivo `.env` a partir do exemplo**

   ```bash
   cp .env.example .env
   ```

3. **Configurar a variável de ambiente no `.env`**

   - `VITE_NEWS_API_KEY`

## Executando o Projeto

```bash
npm run dev
```

Após rodar o comando, acesse a aplicação em `http://localhost:5173`.

## Configurações

As variáveis de ambiente estão em `.env.example`:

O idioma e o país das notícias podem ser alterados diretamente nos parâmetros `lang` e `country` da requisição, localizados no componente `News.jsx` (ex.: `lang=en&country=us` para inglês/EUA ou `lang=pt&country=br` para português/Brasil).

## Autor

**Guilherme Rocha (CoderRocha)**

- GitHub: [CoderRocha](https://github.com/coderrocha)
- LinkedIn: [Guilherme Rocha](https://www.linkedin.com/in/guilherme-rocha-da-silva)

---
