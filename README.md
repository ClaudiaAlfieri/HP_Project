# ⚡ Catálogo Harry Potter - React App

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=for-the-badge)

> Aplicação React desenvolvida como projeto individual, aplicando componentes, props, estado (`useState`), eventos, renderização de listas e pedidos a uma API externa (`fetch` / `useEffect`).
>
> O Catálogo Harry Potter consome a [Harry Potter API](https://hp-api.onrender.com/) para listar personagens, permitindo adicionar, remover e filtrar por casa e género, com persistência de dados em `localStorage`.

---

## 📌 Sobre o Projeto

O **Catálogo Harry Potter** foi desenvolvido individualmente para aplicar, num projeto próprio, os conceitos fundamentais de React: componentes reutilizáveis, props, estado, eventos e renderização de listas, incluindo pedidos a uma API externa.

A aplicação apresenta uma lista de personagens do universo Harry Potter, obtida em tempo real da API pública, com a possibilidade de o utilizador adicionar as suas próprias personagens, remover qualquer uma da lista e filtrar por casa e género. O tema visual de cada personagem adapta-se automaticamente à sua casa de Hogwarts.

---

## ✨ Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| 🧙 Lista de Personagens | Obtida através de um pedido `fetch` à Harry Potter API, renderizada a partir do estado (`useState`) |
| ➕ Adicionar Personagem | Formulário controlado para criar novas personagens |
| ❌ Remover Personagem | Remoção de qualquer personagem, da API ou adicionada manualmente |
| 🔍 Filtros | Filtragem por **casa** e por **género**, combináveis entre si |
| 🎨 Tema por Casa | Cores dos cartões e botões adaptadas à casa (Gryffindor, Slytherin, Hufflepuff, Ravenclaw) |
| 💾 Persistência | Dados guardados em `localStorage`, mantendo-se após refresh da página |
| 🧩 Componentes Reutilizáveis | `CharacterCard`, `CharacterForm` e `FilterBar`, todos controlados via props |

---

## 🗂️ Estrutura do Projeto

```
hp-project/
├── src/
│   ├── components/
│   │   ├── CharacterCard.jsx      # Cartão individual de personagem
│   │   ├── CharacterForm.jsx      # Formulário para adicionar personagens
│   │   ├── FilterBar.jsx          # Filtros de casa e género
│   │   └── Footer.jsx             # Rodapé com copyright
│   ├── App.jsx                    # Componente principal, gere o estado da aplicação
│   ├── App.css                    # Estilos da aplicação
│   └── main.jsx                   # Ponto de entrada da aplicação
├── package.json
└── README.md
```

---

## 🏗️ Arquitetura

A aplicação segue uma separação clara de responsabilidades:

```
App.jsx  →  Components  →  API Externa
```

- **`App.jsx`** — estado central da aplicação (`characters`, filtros), lógica de negócio (adicionar, remover, filtrar) e persistência em `localStorage`
- **`components/`** — componentes de apresentação, controlados exclusivamente via **props**, sem estado próprio de negócio
- **Harry Potter API** — fonte de dados inicial, consumida via `fetch` dentro de `useEffect`

Cada ação do utilizador (adicionar, remover, filtrar) passa por uma função no `App.jsx`, que atualiza o estado e despoleta uma nova renderização — mantendo o fluxo de dados unidirecional típico do React.

---

## 🎮 Como Usar

1. Ao abrir a aplicação, a lista de personagens é carregada automaticamente da API (ou do `localStorage`, se já existirem dados guardados)
2. Preenche o formulário para adicionares uma personagem própria
3. Usa os filtros de **casa** e **género** para restringires a lista apresentada
4. Clica em **Remover** em qualquer cartão para o eliminar da lista
5. As alterações mantêm-se mesmo depois de atualizares a página (`localStorage`)

---

## ▶️ Como Correr o Projeto

1. Clonar o repositório ou extrair a pasta comprimida (.zip):

```bash
git clone <url-do-repositorio>
cd hp-project
```

2. Instalar as dependências:

```bash
npm install
```

3. Iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abrir o browser no endereço apresentado no terminal (normalmente `http://localhost:5173`)

> Requer **Node.js 18+** e **npm** instalados.

---

## 🛠️ Tecnologias Usadas

- **React** — biblioteca principal, com Vite como bundler
- **JavaScript (ES6+)** — lógica da aplicação
- **CSS3** — estilização própria, com tema visual por casa
- **[Harry Potter API](https://hp-api.onrender.com/)** — fonte de dados externa
- **localStorage** — persistência de dados no browser
- **Git** — controlo de versões

---

## 📝 Notas

- Na primeira visita, os dados são obtidos da API (limitados a 20 personagens)
- Em visitas seguintes, os dados são lidos do `localStorage`, preservando adições e remoções feitas anteriormente
- Para repor os dados originais da API, limpa o `localStorage` do site nas ferramentas de programador do browser (**Application → Local Storage**) e atualiza a página

---

## 👤 Autor

Trabalho desenvolvido por **Claudia Alfieri**, no âmbito da unidade curricular de Programação com React.

---

Feito com ⚡, algum `useState` e uma paixão genuína por Hogwarts 🦉
