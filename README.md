# Catálogo Harry Potter

Aplicação em React que consome a [Harry Potter API](https://hp-api.onrender.com/) para listar personagens, permitindo adicionar, remover e filtrar por casa e género. Os dados são guardados no `localStorage` do navegador.

## Funcionalidades

- Lista de personagens obtida através de um pedido `fetch` à API pública
- Adicionar novas personagens através de um formulário
- Remover qualquer personagem da lista
- Filtrar personagens por casa e por género
- Cores dos cartões e dos botões adaptadas à casa de cada personagem
- Dados guardados no `localStorage`, mantendo-se após dar refresh à página

## Tecnologias

- React (Vite)
- CSS puro
- [Harry Potter API](https://hp-api.onrender.com/)

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (versão 18 ou superior recomendada)
- npm

## Como correr o projeto

1. Instalar as dependências

   ```bash
   npm install
   ```

2. Iniciar o servidor de desenvolvimento

   ```bash
   npm run dev
   ```

3. Abrir o browser no endereço apresentado no terminal (normalmente `http://localhost:5173`)

## Estrutura do projeto

```
src/
  components/
    CharacterCard.jsx    # Cartão individual de personagem
    CharacterForm.jsx    # Formulário para adicionar personagens
    FilterBar.jsx         # Filtros de casa e género
  App.jsx                 # Componente principal, gere o estado da aplicação
  App.css                 # Estilos da aplicação
```

## Notas

- Ao abrir a aplicação pela primeira vez, os dados são obtidos da API (limitados a 20 personagens).
- Em visitas seguintes, os dados são lidos do `localStorage`, preservando adições e remoções feitas anteriormente.
- Para repor os dados originais da API, basta limpar o `localStorage` do site nas ferramentas de programador do browser (Application → Local Storage) e dar refresh à página.

## Autor

Trabalho desenvolvido por Cláudia Alfieri no âmbito da unidade curricular UC00621 - Criar aplicações em React.