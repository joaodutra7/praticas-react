# Conjunto de Práticas com Node, React, TypeScript e Vite

Este repositório contém diversas práticas utilizando Node.js, React, TypeScript e Vite.

## Projetos

### 1. API REST com Express.js (Node-project-1)

Uma API simples para gerenciar uma lista de alunos.

#### Endpoints:

- `GET /` - Verifica se a API está rodando
- `GET /alunos` - Retorna a lista de alunos
- `GET /alunos/:id` - Retorna um aluno pelo ID
- `POST /alunos` - Adiciona um novo aluno
- `DELETE /alunos/:id` - Remove um aluno pelo ID

---

### 2. Estruturando um Site com Componentes no React (react-project-1)

Um projeto inicial de React estruturando partes do site como componentes reutilizáveis.

#### Componentes:

- `Header` - Cabeçalho do site
- `Nav` - Barra de navegação
- `SectionBody` - Corpo principal da página
- `Footer` - Rodapé do site

---

### 3. Gerenciador de Tarefas com React, Vite e TypeScript (task-manager)

Um gerenciador de tarefas simples utilizando React, Vite e TypeScript, com armazenamento no `localStorage`.

#### Funcionalidades:

- Adicionar novas tarefas
- Alternar entre tarefas concluídas e pendentes
- Remover tarefas
- Contagem de tarefas pendentes

---

### 4. Site com React Router para Navegação (reat-router-app)

Um site estruturado com React Router para facilitar a navegação entre páginas.

#### Páginas:

- `/` - Página inicial (`Home`)
- `/sobre` - Página de informações (`About`)
- `/cadastro` - Página de cadastro (`Register`)
- `/perfil/:username` - Página de perfil dinâmico (`Profile`)

---

### 5. Formulário de Validação com Yup e Input Mask (valida-form)

Um formulário de cadastro com validação utilizando Yup, React Hook Form e máscaras de entrada com Input Mask.

#### Funcionalidades:

- Validação de campos obrigatórios
- Máscara para CPF, telefone e CEP
- Exibição de mensagens de erro dinâmicas
