# Caramello App

Interface web para o sistema pessoal de organização familiar Caramello.

## Índice

- [Sobre](#sobre)
- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Configuração](#configuração)
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

Este projeto requer o **Node.js**. Recomendamos o uso do **nvm** (Node Version Manager) para gerenciar múltiplas versões do Node em paralelo sem afetar outras aplicações.

### Verificação Inicial

1. **Teste a existência do nvm:**
   ```bash
   nvm --version
   ```

2. **Teste a existência de um Node já instalado:**
   ```bash
   node -v
   ```

### Removendo Node do Sistema (Opcional)

Se você tiver uma versão do Node instalada via gerenciador de pacotes do sistema (ex: `apt`) e quiser usar apenas o nvm, pode removê-la com:
```bash
sudo apt purge --auto-remove nodejs
```

### Instalando o nvm

Caso não tenha o nvm instalado (o comando de versão falhou), consulte a [documentação oficial](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) ou use o comando abaixo (versão testada v0.40.3):

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

> **Importante:** Após a instalação, feche e abra o terminal novamente. Em seguida, execute `nvm --version` para confirmar que tudo funcionou.

### Instalando o node usando o nvm

Instale a versão LTS do Node.js via nvm:
```bash
nvm install --lts
```

### Instalando dependências do projeto

Instale as dependências (isto irá ler o `package.json` e gerar o `package-lock.json`):
```bash
npm install
```

## Configuração

O projeto utiliza variáveis de ambiente para configurações externas (como URL do backend).

1. Crie um arquivo `.env` na raiz do projeto (use `.env.example` como base):
   ```bash
   cp .env.example .env
   ```
2. Edite o arquivo `.env` conforme necessário. Para desenvolvimento local padrão, o valor `VITE_API_BASE_URL=http://localhost:8000` já deve ser suficiente.

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

- [Caramello API](https://github.com/henricos/caramello-api)
- [Caramello App](https://github.com/henricos/caramello-app)

## Contato

[Henrico Scaranello](https://github.com/henricos)
