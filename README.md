# Caramello Frontend Web

Interface web para o sistema pessoal de organização familiar Caramello.

## Índice

- [Sobre](#sobre)
- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias](#tecnologias)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Links Relacionados](#links-relacionados)
- [Contato](#contato)

## Sobre

Este repositório contém a interface web construída em **React** e **Ionic** para o projeto Caramello. O objetivo é fornecer uma aplicação híbrida (Web e Mobile via Capacitor) que facilite a organização da vida familiar em diferentes módulos.

## Funcionalidades

- **Autenticação Simples**: Login de usuários.
- **Home**: Visão geral (Dashboard).
- _Em construção..._

## Instalação

### Pré-requisitos

Certifique-se de ter o `nvm` (Node Version Manager) instalado em sua máquina.

### Configurando o Ambiente

1. **Instale e use a versão LTS do Node.js:**
   ```bash
   nvm install --lts
   nvm use --lts
   ```

2. **Clone o repositório:**
   ```bash
   git clone https://github.com/henricos/caramello-frontend.git
   cd caramello-frontend
   ```

3. **Instale as dependências:**
   Isto irá ler o `package.json` e gerar o `package-lock.json`.
   ```bash
   npm install
   ```

## Uso

### Rodar no Navegador (Desenvolvimento)
Para iniciar o servidor de desenvolvimento local:
```bash
npm run dev
```
O app estará acessível em `http://localhost:5173`.

### Rodar no Android (Emulador/Dispositivo)
1. Gere o build de produção:
   ```bash
   npm run build
   ```
2. Sincronize com o projeto nativo Android:
   ```bash
   npm run cap:sync
   ```
3. Abra o Android Studio para rodar:
   ```bash
   npm run cap:run:android
   ```

## Estrutura do Projeto

A estrutura segue o padrão React + Ionic:

- `src/pages`: Componentes de Página (Telas).
- `src/components`: Componentes reutilizáveis menores.
- `src/services`: Serviços de comunicação com API.
- `src/theme`: Variáveis globais de estilo (CSS).

## Tecnologias

- [React](https://reactjs.org/)
- [Ionic Framework](https://ionicframework.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Capacitor](https://capacitorjs.com/) (para build nativo)
- [Vite](https://vitejs.dev/) (Build tool)

## Contribuição

Este projeto é pessoal, mas aceitamos sugestões e melhorias. Consulte o arquivo `AGENTS.md` para diretrizes de desenvolvimento assistido por IA.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Links Relacionados

- [Caramello Backend](https://github.com/henricos/caramello-backend)
- [Caramello Frontend](https://github.com/henricos/caramello-frontend)

## Contato

[Henrico Scaranello](https://github.com/henricos)
